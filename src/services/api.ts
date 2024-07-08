export const getHeader = (): { headers: { Authorization: string } } => {
  const token = import.meta.env.VITE_BEARER_TOKEN

  return {
    headers: { Authorization: `Bearer ${token}` }
  }
}
