import React, { Fragment, Suspense } from 'react'
import { RouteItem } from 'utils/types'
import { Route, Routes } from 'react-router-dom'
import { PATH_NAME } from 'constants/index'

import BaseLayout from 'containers/Layouts/BaseLayout'
import BaseLayoutUser from 'containers/Layouts/BaseLayoutUser'
const routes: RouteItem[] = [
  {
    path: '/',
    component: BaseLayoutUser,
    routes: [
      {
        path: PATH_NAME.HOME,
        component: React.lazy(() => import('containers/Demand')),
      },
      {
        path: PATH_NAME.RUNNING,
        component: React.lazy(() => import('containers/Running')),
      },
      {
        path: PATH_NAME.RECHARTS,
        component: React.lazy(() => import('containers/Rechart')),
      },
      {
        path: PATH_NAME.Page1,
        component: React.lazy(() => import('containers/Page1')),
      },
      {
        path: PATH_NAME.Page2,
        component: React.lazy(() => import('containers/Page2')),
      },
      {
        path: PATH_NAME.Page3,
        component: React.lazy(() => import('containers/Page3')),
      },
      {
        path: PATH_NAME.Page4,
        component: React.lazy(() => import('containers/Page4')),
      },
      {
        path: PATH_NAME.Page5,
        component: React.lazy(() => import('containers/Page5')),
      },
      {
        path: PATH_NAME.Page8,
        component: React.lazy(() => import('containers/Page8')),
      },
      {
        path: PATH_NAME.Page9,
        component: React.lazy(() => import('containers/Page9')),
      },
      {
        path: PATH_NAME.Page10,
        component: React.lazy(() => import('containers/Page10')),
      },
      {
        path: PATH_NAME.PageMui,
        component: React.lazy(() => import('containers/PageMUI')),
      },
      {
        path: PATH_NAME.PageSetting,
        component: React.lazy(() => import('containers/PageSetting')),
      },
      {
        path: PATH_NAME.PageSettingCreate,
        component: React.lazy(() => import('containers/PageSetting/Create')),
      },
      {
        path: PATH_NAME.PageDownload,
        component: React.lazy(() => import('containers/Download')),
      },
    ],
  },
]

const renderRoutes = (routes: RouteItem[]) => {
  return routes?.map((route: RouteItem, idx: number) => {
    const Component = route.component
    const Guard = route.guard || Fragment

    return (
      <Route
        key={`routes-${idx}`}
        path={route.path}
        element={
          <Guard>
            <Suspense fallback={<></>}>
              <Component />
            </Suspense>
          </Guard>
        }
      >
        {route.routes && renderRoutes(route.routes)}
      </Route>
    )
  })
}

function RoutesList() {
  return <Routes>{renderRoutes(routes)}</Routes>
}

export default RoutesList
