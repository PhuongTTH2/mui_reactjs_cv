
const moment  = require('moment')
const data = [
    {
      startDate: '2023-10-11T07:28:00+09:00',
      endDate: '2023-10-11T07:29:00.000+09:00',
      count: 1,
    },
    {
      startDate: '2023-10-11T07:30:00+09:00',
      endDate: '2023-10-11T07:31:00.000+09:00',
      count: 1,
    },
    {
      startDate: '2023-10-11T08:32:00+09:00',
      endDate: '2023-10-11T08:33:00+09:00',
      count: 1,
    },
    {
      startDate: '2023-10-11T08:44:00+09:00',
      endDate: '2023-10-11T08:46:00+09:00',
      count: 1,
    },
    {
      startDate: '2023-10-11T08:47:00+09:00',
      endDate: '2023-10-11T08:49:00+09:00',
      count: 1,
    },
    {
      startDate: '2023-10-11T07:58:00+09:00',
      endDate: '2023-10-11T07:59:00.000+09:00',
      count: 1,
    },
   ];
   
const handleConsecutiveTime = (data) =>  {


    let currentData = null
    const result = []
    for (const item of data) {
        const currentEndDate = new Date(item.startDate);
        
        if(!currentData) {
          currentData = item
        } else if (currentEndDate - new Date(currentData.endDate) <= 60000 ) {
          currentData.endDate = item.endDate
          currentData.count += item.count
        } else {
          result.push(currentData)
          currentData = item
        }
    }
    if(currentData) {
      result.push(currentData)
    }

    console.log('result',result)
    return result
}
handleConsecutiveTime(data)

