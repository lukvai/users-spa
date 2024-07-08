import {
  QueryCache,
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from '@tanstack/react-query'
import Router from './Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryRouter = (): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    },
    queryCache: new QueryCache({
      onError: (error) => console.error(`Something went wrong: ${error.message}`)
    })
  })

  return (
    <ReactQueryClientProvider client={queryClient}>
      <Router queryClient={queryClient} />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  )
}

export default QueryRouter
