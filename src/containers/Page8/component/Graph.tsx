import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts'

type GraphProps = {
  checkList?: any
}

const Graph = (props: GraphProps) => {
  let { checkList } = props
  let maxKWh = 1
  let maxWm2 = 1

  const data: any[] = []
  for (let i = 1; i <= 30; i++) {
    data.push({
      date: i < 10 ? '06/0' + i : '06/' + i,
      uv: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      pv: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      amt: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      test: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    })
  }

  return (
    <div>
      <ResponsiveContainer width="99%" height="auto" aspect={3}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 30,
            bottom: 20,
            right: -25,
            left: -20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            interval={0}
            tick={{ fontSize: '10px', fontFamily: '"Roboto Condensed", sans-serif' }}
            tickLine={false}
          />
          <YAxis
            yAxisId="1"
            interval={0}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: '10px', fontFamily: '"Roboto Condensed", sans-serif' }}
            label={{
              value: 'kWh',
              position: 'top',
              dy: -6,
              dx: 10,
              offset: 12,
              fontSize: 10,
              fill: '#4A4A4A',
              fontFamily: '"Roboto Condensed", sans-serif',
            }}
            domain={[0, maxKWh]}
          />
          <YAxis
            yAxisId="2"
            interval={0}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: '10px', fontFamily: '"Roboto Condensed", sans-serif' }}
            orientation="right"
            label={{
              value: 'MJ/㎡',
              position: 'top',
              dy: -6,
              dx: -10,
              offset: 12,
              fontSize: 10,
              fill: '#4A4A4A',
              fontFamily: '"Roboto Condensed", sans-serif',
            }}
            domain={[0, maxWm2]}
          />
          <YAxis yAxisId="3" hide />
          {/* yellow */}
          {checkList.a && <Bar yAxisId="1" dataKey="uv" stackId="a" barSize={9} fill="#E8A1A1" />}
          {checkList.b && <Bar yAxisId="2" dataKey="pv" stackId="a" barSize={9} fill="#6F8EC6" />}
          {checkList.c && <Bar yAxisId="1" dataKey="amt" stackId="a" barSize={9} fill="#E8A1A1" />}
          {/* red */}
          {checkList.d && <Bar yAxisId="3" dataKey="test" stackId="a" barSize={9} fill="#EFEDA7" />}
          {/* grey */}
          {checkList.a && <Bar yAxisId="1" dataKey="uv" barSize={9} fill="#EAEAEA" />}
          {/* green */}
          {checkList.a && (
            <Line yAxisId="2" type="monotone" dataKey="pv" strokeWidth={3} dot={false} stroke="#C1E1D0" />
          )}
          {/* blue */}
          {checkList.a && (
            <Line
              yAxisId="3"
              type="monotone"
              dataKey="amt"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 3 }}
              stroke="#8CA7C3"
            >
              <LabelList content={CustomizedAxisTick} />
            </Line>
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomizedAxisTick({ x, y, stroke, value }: any) {
  return (
    <text
      x={x}
      y={y}
      dy={-8}
      fill="#8CA7C3"
      fontSize={10}
      fontFamily='"Roboto Condensed", sans-serif'
      textAnchor="middle"
    >
      {value}
    </text>
  )
}

export default Graph
