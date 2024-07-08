import { createRouter, RouterProvider, ErrorComponent } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routeTree } from '../routeTree.gen'
import React from 'react'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = (queryClient: QueryClient) =>
  createRouter({
    routeTree,
    context: {
      queryClient
    },
    defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
    defaultPreload: 'intent',
    basepath: import.meta.env.VITE_BASE_PATH,
    defaultPreloadStaleTime: 0
  })

const Router = ({ queryClient }: { queryClient: QueryClient }): React.JSX.Element => {
  return <RouterProvider router={router(queryClient)} />
}

export default Router
