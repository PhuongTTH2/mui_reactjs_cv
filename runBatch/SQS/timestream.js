
const  { TimestreamQueryClient, QueryCommand } = require("@aws-sdk/client-timestream-query");

const fs = require("fs")
const client = new TimestreamQueryClient({
    region: "us-west-2",
    credentials: {
      accessKeyId: '',
      secretAccessKey: ''
    }
   })

const test = async () =>{
  const query = `WITH
  q_actual AS (SELECT FROM_UNIXTIME(TO_UNIXTIME(time) + 32400) AS "time", SUM(value_sum) AS "actual" FROM realne_prod.ppa_aggregate WHERE (location = 'yaoko00007') AND (deviceId in ('30141', '30221', '30021', '30011', '30201', '40001', '31001', '30001', '30181', '30121', '30161', '40201', '31201', '45201', '45001', '30101')) AND (equipment = 'SmartMeters') AND (name = 'receivedPowerAmountIn1Min') AND (time >= FROM_ISO8601_TIMESTAMP('2023-10-13T00:00:00.000+09:00')) AND (time <= FROM_ISO8601_TIMESTAMP('2023-10-15T00:00:00.000+09:00')) GROUP BY time),
  
  q_predict AS (SELECT FROM_UNIXTIME(TO_UNIXTIME(time) + 32400) AS "time", SUM(value_sum) AS "predict" FROM realne_prod.ppa_aggregate WHERE (location = 'yaoko00007') AND (name = 'CalculatedPV') AND (time >= FROM_ISO8601_TIMESTAMP('2023-10-13T00:00:00.000+09:00')) AND (time <= FROM_ISO8601_TIMESTAMP('2023-10-15T00:00:00.000+09:00')) GROUP BY time)
  SELECT q_actual.time, actual AS "actual", predict FROM q_actual LEFT JOIN q_predict ON (q_actual.time = q_predict.time) ORDER BY q_actual.time ASC`
  
  const params = {
    QueryString: query,
    NextToken: null,
}
const command = new QueryCommand(params);
  new Promise(async (resolve, reject) => {
    await client.send(command)
        .then(
            async (response) => {
              console.error('Success :', response)
                resolve(response)
            },
            (err) => {
                console.error('Error while querying:', err)
                reject('NG')
            },
        )
        .catch((err) => {
            console.log(err)
            throw err
        })
  })



  // client
  // .listScheduledQueries(query)
  // .then((data) => {
  //   // process data.
  // })
  // .catch((error) => {
  //   // error handling.
  // });


};

test()
