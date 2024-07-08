import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { usersQueryOptions } from '../services/users/queryOptions'
import UsersList from '../components/users/UsersList'
import { z } from 'zod'
import Pagination from '../components/Pagination'
import UsersSearchInput from '../components/users/UsersSearchInput'

const usersSearchSchema = z.object({
  page: z.number().int().nonnegative().catch(1),
  name: z.string().optional()
})

export const Route = createFileRoute('/users/')({
  validateSearch: (search) => usersSearchSchema.parse(search),
  loaderDeps: ({ search: { page, name } }: { search: { page: number; name?: string } }) => ({
    page,
    name
  }),
  loader: (opts) => opts.context.queryClient.ensureQueryData(usersQueryOptions(opts.deps)),
  component: UsersComponent
})

function UsersComponent() {
  const usersQuery = useSuspenseQuery(usersQueryOptions(Route.useLoaderDeps()))
  const { data, pagination } = usersQuery.data
  const search = Route.useSearch()

  return (
    <div className="flex flex-col gap-5">
      <UsersSearchInput fullPath={Route.fullPath} searchValue={search?.name} />
      {data.length > 0 ? <UsersList users={data} /> : <div>No users found</div>}
      <Pagination
        hasPrevious={pagination.hasPrevious}
        hasNext={pagination.hasNext}
        fullPath={Route.fullPath}
      />
    </div>
  )
}
