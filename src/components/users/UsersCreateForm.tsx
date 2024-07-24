import { UserGender, UserStatus } from '../../interfaces/users/User'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateUserMutation } from '../../services/users/hooks'
import Switch from '../shared/form/Switch'
import Select from '../shared/form/Select'
import { getUserGenderOptions } from '../../services/users'
import Input from '../shared/form/Input'

const GenderSchema = z.enum([UserGender.female, UserGender.male])
const ActiveStatusSchema = z.enum([UserStatus.active, UserStatus.inactive])

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  gender: GenderSchema,
  status: ActiveStatusSchema
})

const UsersCreateForm = (): React.JSX.Element => {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      gender: UserGender.male,
      status: UserStatus.active
    }
  })

  const { mutate, isPending } = useCreateUserMutation()

  return (
    <form className="max-w-sm mx-auto grid gap-5" onSubmit={handleSubmit((user) => mutate(user))}>
      <Input {...register('name')} label="Full name" id="name" required disabled={isPending} />
      <Input
        {...register('email')}
        label="Your email"
        id="email"
        placeholder="exemple@example.com"
        required
        disabled={isPending}
      />
      <Select
        {...register('gender')}
        label="Gender"
        options={getUserGenderOptions()}
        id="gender"
        disabled={isPending}
      />
      <Switch
        onChange={(e) => {
          setValue('status', e.target.checked ? UserStatus.active : UserStatus.inactive)
        }}
        label={'Active'}
        disabled={isPending}
        checked={true}
      />
      <button type="submit" className="button-secondary" disabled={isPending}>
        Submit
      </button>
    </form>
  )
}

export default UsersCreateForm
