import { useDebouncedCallback } from 'use-debounce'
import { useNavigate } from '@tanstack/react-router'

interface UsersSearchInputProps {
  searchValue?: string
  fullPath: string
}

const UsersSearchInput = ({ searchValue, fullPath }: UsersSearchInputProps) => {
  const navigate = useNavigate({ from: fullPath })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0 && e.target.value.length < 3) {
      return
    }

    navigate({
      search: () => {
        return {
          page: 1,
          name: e.target.value || undefined
        }
      },
      replace: true
    })
  }

  const debounced = useDebouncedCallback((e) => handleChange(e), 300)

  return (
    <div className="flex flex-col">
      <input
        defaultValue={searchValue ?? ''}
        onChange={(e) => debounced(e)}
        placeholder="Enter name"
        className="min-w-0 flex-1 border p-1 px-2 rounded"
      />
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Please enter at least 3 characters to search for users
      </p>
    </div>
  )
}

export default UsersSearchInput
