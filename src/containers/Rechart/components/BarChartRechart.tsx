import React from 'react'
import {
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts'

interface Props {
  verticalStatus: boolean
}
const BarChartRechart = ({ verticalStatus }: Props) => {
  const data = [
    {
      name: '0-10',
      uv: 10,
      pv: 15,
    },
    {
      name: '11-20',
      uv: 20,
      pv: 25,
    },
    {
      name: '21-30',
      uv: 30,
      pv: 35,
    },
    {
      name: '31-40',
      uv: 40,
      pv: 45,
    },
    {
      name: '41-50',
      uv: 50,
      pv: 55,
    },
    {
      name: '51-60',
      uv: 60,
      pv: 65,
    },
    {
      name: '61-70',
      uv: 70,
      pv: 75,
    },
    {
      name: '71-80',
      uv: 80,
      pv: 85,
    },
    {
      name: '81-90',
      uv: 90,
      pv: 55,
    },
    {
      name: '91-100',
      uv: 95,
      pv: 65,
    },
  ]

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <ComposedChart
          width={500}
          height={800}
          data={data}
          margin={{
            top: 30,
            bottom: 0,
            right: 20,
            left: -35,
          }}
          barGap="0"
          barCategoryGap={verticalStatus ? '10%' : '0%'}
        >
          <CartesianGrid vertical={verticalStatus} horizontal={true} />
          <XAxis tickLine={false} dataKey="name" padding={{ right: 10, left: 10 }} />
          <YAxis
            interval={0}
            axisLine={verticalStatus}
            tickLine={verticalStatus}
            tick={{
              fontSize: '10px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              color: '#959595',
              fill: '#959595',
            }}
          />

          <Legend />
          <defs>
            <linearGradient id={`colorUv`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={'#07517A'} stopOpacity={1} />
              <stop offset="95%" stopColor={'#04293D'} stopOpacity={0.14} />
            </linearGradient>
          </defs>
          <Bar dataKey="uv" fill={`url(#colorUv)`} stroke={`url(#colorUv)`}></Bar>
          {verticalStatus ? <Bar dataKey="pv" fill="#82ca9d" /> : ''}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  )
}
export default BarChartRechart
