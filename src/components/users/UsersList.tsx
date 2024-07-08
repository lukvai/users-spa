import { User } from '../../interfaces/User'
import { Link } from '@tanstack/react-router'
import { useDeleteUserMutation } from '../../services/users/hooks'

interface UserListProps {
  users: User[]
}

const UsersList = ({ users }: UserListProps) => {
  const { mutate, isPending } = useDeleteUserMutation()

  return (
    <ul className="divide-y divide-gray-200 rounded-lg border">
      {users.map((user) => (
        <li className="px-4 py-5 sm:px-6" key={user.id}>
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate dark:text-white">{user.name}</p>
            </div>
            <div className="inline-flex items-center text-base font-semibold dark:text-white gap-5">
              <Link
                className="button-primary"
                to="/users/$userId"
                params={{
                  userId: user.id
                }}
                disabled={isPending}
              >
                Details
              </Link>
              <button
                className="button-danger"
                onClick={() => mutate(user.id)}
                disabled={isPending}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default UsersList
