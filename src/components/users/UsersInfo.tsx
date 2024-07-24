import { useState } from 'react'
import { User } from '../../interfaces/users/User'
import UsersInfoEditForm from './UsersInfoEditForm'
import UsersInfoDetails from './UsersInfoDetails'

interface UsersInfoProps {
  user: User
}

const UsersInfo = ({ user }: UsersInfoProps): React.JSX.Element => {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button type="button" className="button-secondary" onClick={() => setIsEdit(!isEdit)}>
          {!isEdit ? 'Edit' : 'Close'}
        </button>
      </div>
      {isEdit ? <UsersInfoEditForm user={user} /> : <UsersInfoDetails user={user} />}
    </div>
  )
}

export default UsersInfo
