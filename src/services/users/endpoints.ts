const baseUsersUrl = `${import.meta.env.VITE_API_URL}users`

export const getPaginatedUsersEndpoint = (page = 1, name = '') =>
  `${baseUsersUrl}?page=${page}&name=${name}`

export const getUsersInfoEndpoint = (id: string) => `${baseUsersUrl}/${id}`

export const updateUsersEndpoint = (id: number) => `${baseUsersUrl}/${id}`

export const createUserEndpoint = () => baseUsersUrl

export const deleteUserEndpoint = (id: number) => `${baseUsersUrl}/${id}`
