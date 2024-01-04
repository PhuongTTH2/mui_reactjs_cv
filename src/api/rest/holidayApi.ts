import axiosClients from './axiosClients'
import { Holiday } from 'models'

const holidayApi = {
  getHoliday(startDate: string, endDate: string): Promise<Holiday[]> {
    const url = `/data/holidays/${startDate}/${endDate}`
    return axiosClients.get(url)
  },
}

export default holidayApi
