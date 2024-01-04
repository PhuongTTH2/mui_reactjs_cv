import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  Grid,
  FormGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from '@material-ui/core'
import StyledButton from 'components/FormControl/StyledButton'
import DatePickerField from 'components/FormControl/DatePickerField'
import StyledSwitch from 'components/FormControl/StyledSwitch'
import StyledCheckbox from 'components/FormControl/StyledCheckbox'
import CircleLabel from 'components/Label/CircleLabel'
import Graph from './Graph'
import clsx from 'clsx'
const Content = () => {
  const classes = useStyles()
  const [startDate, setStartDate] = useState(new Date())
  const [checkList, setCheckList] = useState({
    a: true,
    b: true,
    c: true,
    d: true,
  })
  const [toogleSwitch, setToogleSwitch] = useState({
    prevValue: false, // black
    actualValue: false, // blue
    plannedValue: false, // red
    theoreticalValue: true, // yellow
  })
  const [checked, setChecked] = useState({
    electricCapacityBlue: true,
    amountLossBlue: true,
    RPRBlue: true,
    insolationBlue: true,
    averageTemperatureBlue: true,
    electricCapacityRed: true,
    insolationRed: true,
    averageTemperatureRed: true,
    electricCapacityYellow: true,
  })
  const handleSetCheckList = (event: { target: { name: string; checked: boolean } }) => {
    setCheckList({ ...checkList, [event.target.name]: event.target.checked })
  }
  const handleSetToogleSwitch = (event: { target: { name: string; checked: boolean } }) => {
    setToogleSwitch({ ...toogleSwitch, [event.target.name]: event.target.checked })
  }
  const handleSetChecked = (event: { target: { name: string; checked: boolean } }) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked })
  }
  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Box className={classes.boxPin}>
          <Box className={classes.boxHeader}>
            <img src="/assets/images/arrow-down.svg" className={classes.img} alt="arrow-down" />
            <Typography variant="caption" component="span" className={classes.text}>
              現在の状態
            </Typography>
          </Box>
          <Box className={classes.boxContent}>
            <Typography variant="caption" component="p">
              ■ 充放電ステータス
            </Typography>
            <Box className={classes.boxContentItem}>
              <Typography variant="caption" component="p">
                待機
              </Typography>
            </Box>
            <Typography variant="caption" component="p">
              ■ 制御モード
            </Typography>
            <Box className={classes.boxContentItem}>
              <Typography variant="caption" component="p">
                AI
              </Typography>
              <Box className={classes.boxContentItemSub}>
                <Typography variant="body1" component="p" className={classes.subText}>
                  ピークカット
                </Typography>
                <Typography variant="caption" component="span" className={classes.subText}>
                  ピークカット
                </Typography>
              </Box>
            </Box>
            <Typography variant="caption" component="p">
              ■ 蓄電池残量
            </Typography>
            <Box className={classes.boxContentItem2}>
              <Typography variant="caption" component="p">
                待機
              </Typography>
            </Box>

            <Box className={classes.boxContentItemProgress}>
              <Box className={classes.boxContentItemProgressLeft}>
                <Typography variant="caption" component="span" className={classes.boxContentItemProgressLeftText}>
                  81
                </Typography>
                <Typography variant="caption" component="span">
                  %
                </Typography>
              </Box>
              <Box className={classes.boxContentItemProgressRight}>
                <Box>
                  <Typography variant="body1" component="span" className={classes.boxContentItemProgressRightText}>
                    SAS
                  </Typography>
                  <Typography variant="caption" component="span">
                    25.0
                  </Typography>
                  <Typography variant="caption" component="span">
                    %
                  </Typography>
                </Box>
                <Box style={{ borderTop: '1px solid rgb(213, 213, 213)' }}>
                  <Typography variant="caption" component="span" className={classes.boxContentItemProgressRightText}>
                    BCP
                  </Typography>
                  <Typography variant="caption" component="span">
                    15.0
                  </Typography>
                  <Typography variant="caption" component="span">
                    %
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.boxPinChart}>
          <Box className={classes.boxHeader}>
            <img src="/assets/images/arrow-down.svg" className={classes.img} alt="arrow-down" />
            <Typography variant="caption" component="span" className={classes.text}>
              現在の状態
            </Typography>
          </Box>
          <Box>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={clsx(classes.tableCell, classes.headerCell)}></TableCell>
                    <TableCell>充電量</TableCell>
                    <TableCell>放電量</TableCell>
                    <TableCell>ピークカット（改善量）</TableCell>
                    <TableCell>アービトラージ（実施量）zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  <TableRow>
                    <TableCell>実績</TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        1,000
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        1,000
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        200
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        200
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>予測</TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        1,200
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        1,200
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        150
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" component="span">
                        150
                      </Typography>
                      <Typography variant="caption" component="span">
                        kWh
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className={classes.boxContentOverallChart}>
            <Box className={classes.boxContentHeader}>
              <Typography variant="caption" component="span" className={classes.text}>
                日付
              </Typography>
              <DatePickerField
                width={125}
                height={20}
                fontWeight={600}
                dateFormat={['yyyy/MM', 'yyyyMM', 'yyyy-MM']}
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                maxDate={startDate}
              />
              <Typography variant="caption" component="span" className={classes.text}>
                粒度
              </Typography>
              <Box>
                <StyledButton background="#88ABDA" border="1px solid #F4F4F4" width={80} height={30}>
                  一日
                </StyledButton>
                <StyledButton
                  background="#FFFFFF"
                  border="1px solid #F4F4F4"
                  colorText="#4A4A4A"
                  width={80}
                  height={30}
                >
                  一ヶ月
                </StyledButton>
                <StyledButton
                  background="#FFFFFF"
                  border="1px solid #F4F4F4"
                  colorText="#4A4A4A"
                  width={80}
                  height={30}
                >
                  一年
                </StyledButton>
              </Box>
            </Box>
            <Box className={classes.boxContentChart}>
              <Grid item xs={12} container style={{ marginBottom: 40 }}>
                <Grid item xs={6}>
                  <Box className={classes.changeSwitchGroup}>
                    <StyledButton
                      background="#707070"
                      width={60}
                      height={20}
                      colorText="#FFFFFF"
                      style={{ marginRight: 10 }}
                    >
                      月次
                    </StyledButton>
                    <StyledButton
                      background="#F5F5F5"
                      width={60}
                      height={20}
                      colorText="#4A4A4A"
                      style={{ marginRight: 15 }}
                    >
                      年次
                    </StyledButton>
                    <DatePickerField
                      width={125}
                      height={20}
                      dateFormat="yyyy"
                      selected={startDate}
                      onChange={(date: Date) => setStartDate(date)}
                      align="center"
                      showYearPicker
                      color="#4A4A4A"
                      boxShadow="none"
                      background="#F5F5F5"
                    />
                  </Box>
                  <Box display="flex">
                    <StyledSwitch
                      label="実績"
                      color="#6F8EC6"
                      fontSize={15}
                      checked={toogleSwitch.actualValue}
                      name="actualValue"
                      onChange={handleSetToogleSwitch}
                      style={{ marginRight: 25 }}
                    />
                    <FormGroup row className={classes.groupCheckbox}>
                      <StyledCheckbox
                        label="発電量"
                        fontSize={15}
                        checked={checked.electricCapacityBlue}
                        name="electricCapacityBlue"
                        onChange={handleSetChecked}
                      />
                      <StyledCheckbox
                        label="日射量"
                        fontSize={15}
                        checked={checked.insolationBlue}
                        name="insolationBlue"
                        onChange={handleSetChecked}
                      />
                      <StyledCheckbox
                        label="平均気温"
                        fontSize={15}
                        checked={checked.averageTemperatureBlue}
                        name="averageTemperatureBlue"
                        onChange={handleSetChecked}
                      />
                      <StyledCheckbox
                        label="損失量"
                        fontSize={15}
                        checked={checked.amountLossBlue}
                        name="amountLossBlue"
                        onChange={handleSetChecked}
                      />
                      <StyledCheckbox
                        label="RPR"
                        fontSize={15}
                        checked={checked.RPRBlue}
                        name="RPRBlue"
                        onChange={handleSetChecked}
                      />
                    </FormGroup>
                  </Box>
                  <Box marginTop="-10px" className={classes.changeSwitchGroup}>
                    <StyledSwitch
                      label="計画値"
                      color="#E8A1A1"
                      fontSize={15}
                      checked={toogleSwitch.plannedValue}
                      name="plannedValue"
                      onChange={handleSetToogleSwitch}
                      style={{ marginRight: 10 }}
                    />

                    <FormGroup row className={classes.groupCheckbox}>
                      <StyledCheckbox
                        label="発電量"
                        fontSize={15}
                        checked={checked.electricCapacityRed}
                        name="electricCapacityRed"
                        onChange={handleSetChecked}
                      />
                      <StyledCheckbox
                        label="日射量"
                        fontSize={15}
                        checked={checked.insolationRed}
                        name="insolationRed"
                        onChange={handleSetChecked}
                      />
                      <StyledCheckbox
                        label="平均気温"
                        fontSize={15}
                        checked={checked.averageTemperatureRed}
                        name="averageTemperatureRed"
                        onChange={handleSetChecked}
                      />
                    </FormGroup>
                  </Box>

                  <Box marginTop="-10px" className={classes.changeSwitchGroup}>
                    <StyledSwitch
                      label="理論値"
                      color="#EFEDA7"
                      fontSize={15}
                      checked={toogleSwitch.theoreticalValue}
                      name="theoreticalValue"
                      onChange={handleSetToogleSwitch}
                      style={{ marginRight: 10 }}
                    />

                    <FormGroup row className={classes.groupCheckbox}>
                      <StyledCheckbox
                        label="発電量"
                        fontSize={15}
                        checked={checked.electricCapacityYellow}
                        name="electricCapacityYellow"
                        onChange={handleSetChecked}
                      />
                    </FormGroup>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.circleDesc}>
                    <Box display="flex">
                      <CircleLabel
                        background="#6F8EC6"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="実績 発電量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#547096"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="実績 日射量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#B2C9F4"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="実績 平均気温"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#547096"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="損失量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#E0EBFF"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="RPR発生回数"
                        style={{ margin: '0 44px 4.5px 0' }}
                      />
                    </Box>

                    <Box display="flex">
                      <CircleLabel
                        background="#E8A1A1"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="計画 発電量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#DFA6A5"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="計画 日射量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#F4D6D6"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="計画 平均気温"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#EFEDA7"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="理論 発電量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                    </Box>

                    <Box display="flex">
                      <CircleLabel
                        background="#707070"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年実績 発電量"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#707070"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="前年実績 日射量"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#707070"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="前年実績 平均気温"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#A7A7A7"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年 損失量"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#CBCBCB"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="前年 RPR発生回数"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                    </Box>

                    <Box display="flex">
                      <CircleLabel
                        background="#C3C3C3"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年計画 発電量"
                        style={{ margin: '0 20px 0 0' }}
                      />
                      <CircleLabel
                        background="#BCBCBC"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="前年計画 日射量"
                        style={{ margin: '0 20px 0 0' }}
                      />
                      <CircleLabel
                        background="#BCBCBC"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="前年計画 平均気温"
                        style={{ margin: '0 20px 0 0' }}
                      />
                      <CircleLabel
                        background="#E6E6E6"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年理論 発電量"
                        style={{ margin: '0 20px 0 0' }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Graph checkList={checkList} />
            </Box>
            <Box className={classes.boxContentChart}>
              <Grid item xs={12} container style={{ marginBottom: 40 }}>
                <Grid item xs={6}>
                  <Typography variant="caption" component="span" className={classes.text}>
                    蓄電池 使用状況
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.circleDesc}>
                    <Box display="flex">
                      <CircleLabel
                        background="#6F8EC6"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="実績 発電量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#547096"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="実績 日射量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#B2C9F4"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="実績 平均気温"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#547096"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="損失量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#E0EBFF"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="RPR発生回数"
                        style={{ margin: '0 44px 4.5px 0' }}
                      />
                    </Box>

                    <Box display="flex">
                      <CircleLabel
                        background="#E8A1A1"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="計画 発電量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#DFA6A5"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="計画 日射量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#F4D6D6"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="計画 平均気温"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#EFEDA7"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="理論 発電量"
                        style={{ margin: '0 40px 4.5px 0' }}
                      />
                    </Box>

                    <Box display="flex">
                      <CircleLabel
                        background="#707070"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年実績 発電量"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#707070"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="前年実績 日射量"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#707070"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="前年実績 平均気温"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#A7A7A7"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年 損失量"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                      <CircleLabel
                        background="#CBCBCB"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="前年 RPR発生回数"
                        style={{ margin: '0 20px 4.5px 0' }}
                      />
                    </Box>

                    <Box display="flex">
                      <CircleLabel
                        background="#C3C3C3"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年計画 発電量"
                        style={{ margin: '0 20px 0 0' }}
                      />
                      <CircleLabel
                        background="#BCBCBC"
                        fontSize={10}
                        line={true}
                        height={14}
                        width={14}
                        label="前年計画 日射量"
                        style={{ margin: '0 20px 0 0' }}
                      />
                      <CircleLabel
                        background="#BCBCBC"
                        fontSize={10}
                        border={true}
                        height={14}
                        width={14}
                        label="前年計画 平均気温"
                        style={{ margin: '0 20px 0 0' }}
                      />
                      <CircleLabel
                        background="#E6E6E6"
                        fontSize={10}
                        height={14}
                        width={14}
                        label="前年理論 発電量"
                        style={{ margin: '0 20px 0 0' }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Graph checkList={checkList} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    marginTop: '135px',
    marginLeft: '110px',
    zIndex: 1,
  },
  box: {
    display: 'flex',
    justifyContent: 'start',
    gap: '30px',
    alignItems: 'start',
    padding: '24px 32px',
  },
  button: {
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 20,
    fontWeight: 600,
  },
  boxPin: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  boxHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '20px',
    marginRight: '5px',
  },
  text: {
    fontFamily: 'Meiryo UI W6", sans-serif',
    fontSize: 16,
    fontWeight: 600,
  },
  boxContent: {
    boxShadow: 'rgb(0 0 0 / 9%) 0px 0px 8px',
    border: '1px solid rgb(232, 232, 232)',
    padding: '24px',
    marginTop: '10px',
    width: '100%',
    boxSizing: 'border-box',
    height: '100%',
    overflowY: 'unset',
  },
  boxPinChart: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    height: '100%',
    maxHeight: 'calc(100vh - 183px)',
  },
  boxContentOverallChart: {
    boxShadow: 'rgb(0 0 0 / 9%) 0px 0px 8px',
    border: '1px solid rgb(232, 232, 232)',
    padding: '24px',
    marginTop: '10px',
    boxSizing: 'border-box',
    height: '100%',

    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: '#6180AB',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#547096',
    },
  },
  boxContentHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  boxContentChart: {
    boxShadow: 'rgb(0 0 0 / 9%) 0px 0px 8px',
    border: '1px solid rgb(232, 232, 232)',
    padding: '24px',
    marginTop: '10px',
    width: '100%',
    boxSizing: 'border-box',
    height: '100%',
  },
  boxContentItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px 0',
    background: 'rgb(232, 232, 232)',
    color: 'rgb(112, 112, 112)',
    height: '48px',
    fontSize: '20px',
  },
  boxContentItem2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px 0',
    background: 'rgb(232, 232, 232)',
    color: 'rgb(112, 112, 112)',
    height: '58px',
    fontSize: '20px',
  },
  boxContentItemSub: {
    display: 'flex',
    height: '32px',
  },
  subText: {
    fontSize: '12px',
    background: 'rgb(255, 255, 255)',
    padding: '3px',
    width: '50%',
    boxShadow: 'rgb(0 0 0 / 9%) 0px 0px 8px inset',
    color: 'rgb(74, 74, 74)',
    '& .MuiTypography-body1': {
      fontWeight: 600,
      fontSize: 15,
      fontFamily: 'Hiragino Sans, sans-serif',

      color: 'rgb(232, 232, 232)',
    },
  },

  boxContentItemProgress: {
    display: 'flex',
    borderTop: '1px solid rgb(213, 213, 213)',
  },
  boxContentItemProgressLeft: {
    flex: 1,
    borderRight: '1px solid rgb(213, 213, 213)',
    height: '100%',
    padding: '0 5px',
  },
  boxContentItemProgressRight: {
    flex: 1,
    '& .MuiTypography-caption': {
      fontSize: '12px',
    },
    '& .MuiTypography-body1': {
      color: 'rgb(237, 181, 195)',
    },
  },
  boxContentItemProgressLeftText: {
    fontFamily: 'Oswald, sans-serif',
    lineHeight: 'normal',
    color: 'rgb(74, 74, 74)',
    fontSize: '40px',
    fontWeight: 300,
  },
  boxContentItemProgressRightText: {
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: '12px',
    padding: '0 5px',
    color: 'rgb(169, 211, 197)',
  },

  groupCheckbox: {
    marginTop: 10,
    paddingLeft: 8,
  },
  circleDesc: {
    paddingTop: 10,
    border: '1px solid #707070',
    padding: '11px 15px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  changeSwitchGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  tableContainer: {
    // min-width: 650px;
    // background: 'rgb(255, 255, 255)',
    // boxSizing: 'border-box',
    // width: '100%',
    // borderSpacing: '1px',
  },
  table: {
    minWidth: 650,
    '& .MuiTableCell-root': {
      border: '1px solid rgba(255, 255, 255, 1)',
    },
  },
  tableHead: {
    background: 'rgb(136, 171, 218)',
  },
  tableBody: {
    background: 'rgb(231, 238, 248)',
  },
  tableCell: {},
  headerCell: {
    height: '100%',
    maxHeight: '24px',
    maxWidth: '120px',
    width: '120px',
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: '12px',
    textAlign: 'center',
  },
}))
export default Content
