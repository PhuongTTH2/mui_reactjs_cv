import React, { useState, useEffect, useReducer } from 'react'
import * as Excel from 'exceljs'
import * as FileSaver from 'file-saver'
import { HEADERXLSX } from 'constants/index'

import { formatDateTextJP } from 'utils/helper'
import { reduce } from 'lodash'

const reducer = (state: any, action: any) => {
  switch (action) {
    case 'TANG':
      return state + 1
    case 'GIAM':
      return state - 1
    case 'XOA':
      return 0
    default:
      return state
  }
}

const reducer2 = (state: any, action: any) => {
  switch (action.type) {
    case 'NEW':
      return action.data
    default:
      return state
  }
}
const PageDownload = () => {
  const [downloadXlsx, setDownloadXlsx] = useState<boolean>(false)
  const [count, dispatch] = useReducer(reducer, 0)
  const [count2, dispatch2] = useReducer(reducer2, 0)
  let xlsx: any = [{ test: 1 }, { test: 2 }]
  useEffect(() => {
    ;(async () => {
      if (downloadXlsx && xlsx) {
        const workbook = new Excel.Workbook()
        const worksheet = workbook.addWorksheet('My Sheet')
        let headerXlsx: any = []
        HEADERXLSX.forEach((item: any) => {
          headerXlsx.push({ header: `${item}`, key: `${item}`, width: 23 })
        })

        worksheet.columns = headerXlsx

        let isNumber: number = 2

        worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getColumn(5).numFmt = '#,##0.00'
        worksheet.getColumn(6).numFmt = '#,##0.000'
        worksheet.getColumn(7).numFmt = '#,##0.000'
        worksheet.getColumn(8).numFmt = '#,##0.000'
        worksheet.getColumn(9).numFmt = '#,##0'
        worksheet.getColumn(10).numFmt = '#,##0'
        worksheet.getColumn(11).numFmt = '#,##0'
        worksheet.getColumn(12).numFmt = '#,##0'
        worksheet.getColumn(13).numFmt = '#,##0'
        worksheet.getColumn(14).numFmt = '#,##0'
        worksheet.getColumn(15).numFmt = '#,##0'
        worksheet.getColumn(18).numFmt = '#,##0'

        xlsx.forEach((billing: any) => {
          worksheet.getCell(`A${isNumber}`).value = 'A'
          worksheet.getCell(`B${isNumber}`).value = 'Test'
          worksheet.getCell(`C${isNumber}`).value = 'C'
          worksheet.getCell(`D${isNumber}`).value = 'D'
          worksheet.getCell(`E${isNumber}`).value = 1
          worksheet.getCell(`F${isNumber}`).value = 2
          worksheet.getCell(`G${isNumber}`).value = 3
          worksheet.getCell(`H${isNumber}`).value = 4
          worksheet.getCell(`I${isNumber}`).value = 5
          worksheet.getCell(`J${isNumber}`).value = `=ROUNDUP(E${isNumber}*H${isNumber}, 0)`
          worksheet.getCell(`K${isNumber}`).value = `=ROUND(E${isNumber}*H${isNumber}, 0)`

          isNumber += 1
        })

        worksheet.mergeCells('B2:K2')
        worksheet.mergeCells('B4:G6')
        worksheet.mergeCells('H4:K6')

        // Style
        // border bottom
        const bottomBorderCells = ['B2', 'B4']
        bottomBorderCells.forEach((cell) => {
          worksheet.getCell(cell).border = {
            bottom: { style: 'thin', color: { argb: '000000' } },
          }
        })

        for (let num = 4; num <= 6; num++) {
          const cell = worksheet.getCell(`B${num}`)
          cell.style = JSON.parse(JSON.stringify(cell.style))
          cell.border = {
            left: { style: 'medium', color: { argb: 'BFBFBF' } },
          }
        }

        const newSheet = `Test Sheet`
        worksheet.name = 'Test nmae'
        // save file
        const blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        workbook.xlsx
          .writeBuffer()
          .then((data: any) => {
            const blob = new Blob([data], { type: blobType })
            // Download 1 file
            FileSaver.saveAs(blob, `${newSheet}.xlsx`)
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadXlsx])

  const handleDownloadXlsx = async (data: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDownloadXlsx(true)
  }

  return (
    <div>
      <button onClick={(e) => handleDownloadXlsx(e)}>Download</button>
      <div>
        <p>Count {count}</p>
        <button onClick={() => dispatch('TANG')}>Tang </button>
        <button onClick={() => dispatch('GIAM')}>Giam </button>
        <button onClick={() => dispatch('XOA')}> Xoa</button>
        <p>Count2 {count2}</p>
        <button
          onClick={() =>
            dispatch2({
              type: 'NEW',
              data: 10,
            })
          }
        >
          {' '}
          NEW
        </button>
      </div>
    </div>
  )
}

export default PageDownload
