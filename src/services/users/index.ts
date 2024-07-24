import { Option } from '../../interfaces/form/Option'
import { UserGender } from '../../interfaces/users/User'

export const getUserGenderOptions = (): Option[] => {
  return [
    {
      label: UserGender.male,
      value: UserGender.male
    },
    {
      label: UserGender.female,
      value: UserGender.female
    }
  ]
}
