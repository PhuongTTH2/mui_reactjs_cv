
const moment  = require('moment')
const data = [

    {
       startDate: '2023-10-11T08:32:00+09:00',
       endDate: '2023-10-11T08:33:00+09:00',
       errorCode: 8,
     },
     
     {
       startDate: '2023-10-11T08:44:00+09:00',
       endDate: '2023-10-11T08:46:00+09:00',
       errorCode: 8,
     },
     {
       startDate: '2023-10-11T08:47:00+09:00',
       endDate: '2023-10-11T08:49:00+09:00',
       errorCode: 8,
     },
     {
       startDate: '2023-10-11T07:28:00+09:00',
       endDate: '2023-10-11T07:29:00.000+09:00',
       errorCode: 1,
     },
     {
       startDate: '2023-10-11T07:30:00+09:00',
       endDate: '2023-10-11T07:31:00.000+09:00',
       errorCode: 1,
     },
     {
       startDate: '2023-10-11T07:38:00+09:00',
       endDate: '2023-10-11T07:58:00.000+09:00',
       errorCode: 1,
     },
     {
       startDate: '2023-10-11T07:58:00+09:00',
       endDate: '2023-10-11T07:59:00.000+09:00',
       errorCode: 1,
     },
   ];
   
const handleConsecutiveTimeC1 = (data) =>  {


    const arrayErrorCode = {} 
    for (const item of data) {
        const currentEndDate = new Date(item.startDate);
        if(!arrayErrorCode[item.errorCode]) {
            arrayErrorCode[item.errorCode] = [item]
        } else {
            const currentData = arrayErrorCode[item.errorCode][arrayErrorCode[item.errorCode].length - 1] 
            if( currentEndDate - new Date(currentData.endDate)  <= 60000 ) {
                arrayErrorCode[item.errorCode][arrayErrorCode[item.errorCode].length - 1].endDate = item.endDate
            } else {
                arrayErrorCode[item.errorCode].push(item)
            }
        }
    }

    const result = [].concat(...Object.values(arrayErrorCode))
    console.log('result',result)
    return result
}
handleConsecutiveTimeC1(data)

// console.log(handleConsecutiveTimeC1(data))