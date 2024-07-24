import { useRouterState } from '@tanstack/react-router'
import Spinner from '../shared/Spinner'

const AppLaoder = (): React.JSX.Element => {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' })

  return <Spinner show={isLoading} />
}

export default AppLaoder
