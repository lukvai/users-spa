import React from 'react'
import { Pagination as PaginationInterface } from '../interfaces/Pagination'
import { Link } from '@tanstack/react-router'

interface PaginationProps extends Omit<PaginationInterface, 'currentPage'> {
  fullPath: string
}

interface PaginationParams {
  page: number
  [key: string]: any
}

const Pagination = ({ hasNext, hasPrevious, fullPath }: PaginationProps): React.JSX.Element => {
  return (
    <div className="flex justify-end gap-3">
      <Link
        type="button"
        className="button-primary"
        search={(prev: PaginationParams) => ({ ...prev, page: prev.page - 1 })}
        disabled={!hasPrevious}
      >
        Prev
      </Link>
      <Link
        type="button"
        className="button-primary"
        to={fullPath}
        search={(prev: PaginationParams) => ({ ...prev, page: prev.page + 1 })}
        disabled={!hasNext}
      >
        Next
      </Link>
    </div>
  )
}

export default Pagination
