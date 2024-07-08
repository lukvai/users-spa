import { useState } from 'react'
import { UserGender, UserStatus } from '../../interfaces/User'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateUserMutation } from '../../services/users/hooks'

const GenderSchema = z.enum([UserGender.female, UserGender.male])
const ActiveStatusSchema = z.enum([UserStatus.active, UserStatus.inactive])

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  gender: GenderSchema,
  status: ActiveStatusSchema
})

const UsersCreateForm = () => {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      gender: UserGender.male,
      status: UserStatus.active
    }
  })
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const { mutate, isPending } = useCreateUserMutation()

  return (
    <form className="max-w-sm mx-auto grid gap-5" onSubmit={handleSubmit((user) => mutate(user))}>
      <div>
        <label htmlFor="name" className="primary-label">
          Full Name
        </label>
        <input
          {...register('name')}
          id="name"
          className="primary-input"
          required
          disabled={isPending}
        />
      </div>

      <div>
        <label htmlFor="email" className="primary-label">
          Your email
        </label>
        <input
          {...register('email')}
          className="primary-input"
          placeholder="exemple@example.com"
          required
          disabled={isPending}
        />
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Gender
        </label>
        <select
          {...register('gender')}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={isPending}
        >
          <option value={UserGender.male}>{UserGender.male}</option>
          <option value={UserGender.female}>{UserGender.female}</option>
        </select>
      </div>

      <div>
        <label className="flex flex-col gap-2 cursor-pointer">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => {
              setValue('status', e.target.checked ? UserStatus.active : UserStatus.inactive)
              setIsChecked(!isChecked)
            }}
            disabled={isPending}
            checked={isChecked}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <button type="submit" className="button-secondary" disabled={isPending}>
        Submit
      </button>
    </form>
  )
}

export default UsersCreateForm
