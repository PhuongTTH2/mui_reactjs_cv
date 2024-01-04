// [GET] /top/summary
export interface TopSummary {
  total: TopSummaryTotal
  areas: TopSummaryArea[]
  vendors: TopSummaryItem[]
}

export interface TopSummaryArea extends TopSummaryItem {
  latitude: number
  longitude: number
}

export interface TopSummaryItem {
  code: string
  name: string
  power: number
}

export interface TopSummaryTotal {
  power: number
}
