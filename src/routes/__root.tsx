import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import AppLayout from '../components/appLayout/AppLayout'
import { QueryClient } from '@tanstack/react-query'

interface RootContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RootContext>()({
  component: RootComponent
})

function RootComponent(): React.JSX.Element {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}
