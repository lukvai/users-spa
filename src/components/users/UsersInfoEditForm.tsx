import { User, UserGender, UserStatus } from '../../interfaces/users/User'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateUsersInfoMutation } from '../../services/users/hooks'
import Switch from '../shared/form/Switch'
import Input from '../shared/form/Input'
import { getUserGenderOptions } from '../../services/users'
import Select from '../shared/form/Select'

interface UsersInfoEditFormProps {
  user: User
}

const GenderSchema = z.enum([UserGender.female, UserGender.male])
const ActiveStatusSchema = z.enum([UserStatus.active, UserStatus.inactive])

const schema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email().min(1),
  gender: GenderSchema,
  status: ActiveStatusSchema
})

const UsersInfoEditForm = ({ user }: UsersInfoEditFormProps): React.JSX.Element => {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: user
  })
  const isChecked = user.status === UserStatus.active
  const { mutate, isPending } = useUpdateUsersInfoMutation(user.id)

  return (
    <form className="max-w-sm mx-auto grid gap-5" onSubmit={handleSubmit((user) => mutate(user))}>
      <Input label="Full name" {...register('name')} id="name" required disabled={isPending} />
      <Input
        label=" Your email"
        id="email"
        {...register('email')}
        placeholder="exemple@example.com"
        required
        disabled={isPending}
      />
      <Select
        label="Gender"
        options={getUserGenderOptions()}
        {...register('gender')}
        id="gender"
        disabled={isPending}
      />
      <Switch
        onChange={(e) => {
          setValue('status', e.target.checked ? UserStatus.active : UserStatus.inactive)
        }}
        label={'Active'}
        disabled={isPending}
        checked={isChecked}
      />
      <button type="submit" className="button-secondary" disabled={isPending}>
        Submit
      </button>
    </form>
  )
}

export default UsersInfoEditForm
