import { createFileRoute } from '@tanstack/react-router'
import { usersInfoQueryOptions } from '../services/users/queryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import UsersInfo from '../components/users/UsersInfo'

export const Route = createFileRoute('/users/$userId')({
  loader: ({ context: { queryClient }, params: { userId } }) => {
    return queryClient.ensureQueryData(usersInfoQueryOptions(userId))
  },
  component: UserComponent
})

function UserComponent() {
  const userId = Route.useParams().userId
  const { data: user } = useSuspenseQuery(usersInfoQueryOptions(userId))

  return <>{user ? <UsersInfo user={user} /> : <div>User not Found</div>}</>
}
