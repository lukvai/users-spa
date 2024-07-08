import { queryOptions } from '@tanstack/react-query'
import { getPaginatedUsers, getUsersInfo } from './api'

export const usersQueryOptions = ({ page = 1, name = '' }: { page?: number; name?: string }) =>
  queryOptions({
    queryKey: ['users', page, name],
    queryFn: async () => getPaginatedUsers(page, name)
  })

export const usersInfoQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ['usersInfo', id],
    queryFn: async () => getUsersInfo(id)
  })
