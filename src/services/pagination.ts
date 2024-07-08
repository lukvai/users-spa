import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios'
import { Pagination } from '../interfaces/Pagination.ts'

export function getPaginationData(
  headers: AxiosResponseHeaders | RawAxiosResponseHeaders
): Pagination {
  const currentPage = headers?.['x-pagination-page']
    ? Number(headers['x-pagination-page'])
    : undefined
  const hasPrevious = !!headers?.['x-links-previous']
  const hasNext = Number(headers?.['x-pagination-pages']) !== currentPage

  return {
    hasPrevious,
    hasNext,
    currentPage
  }
}
