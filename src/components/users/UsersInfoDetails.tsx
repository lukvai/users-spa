import { User, UserStatus } from '../../interfaces/User'
import { IoChevronDownCircle, IoCloseCircleSharp } from 'react-icons/io5'

interface UsersInfoDetailsProps {
  user: User
}

const UsersInfoDetails = ({ user }: UsersInfoDetailsProps) => {
  return (
    <div className="overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium">User Profile</h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">{user.name}</dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Gender</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">{user.gender}</dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">{user.email}</dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 text-lg">
              {user.status === UserStatus.active ? (
                <IoChevronDownCircle className="fill-green-400" />
              ) : (
                <IoCloseCircleSharp className="fill-red-400" />
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default UsersInfoDetails
