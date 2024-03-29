import { ComponentType } from 'react'

export type Route = {
  exact?: boolean
  path?: string
  guard?: React.LazyExoticComponent<ComponentType<unknown>> | ComponentType<unknown>
  requiredScopes?: string[]
  layout?: React.FunctionComponent
  component?: any
}

export type RouteItem = Route & {
  routes?: Route[]
}
