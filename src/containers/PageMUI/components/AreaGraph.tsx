import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 15,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 20,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 18,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 25,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 23,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 25,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 21,
    pv: 4300,
    amt: 2100,
  },
]
const AreaGraph = () => {
  return (
    <AreaChart
      width={160}
      height={100}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#C7020B" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#C7020B" stopOpacity={0} />
        </linearGradient>
      </defs>

      <Area dataKey="uv" fill="url(#colorUv)" stroke="#C7020B" />
    </AreaChart>
  )
}
export default AreaGraph
