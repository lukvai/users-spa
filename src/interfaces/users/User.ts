export interface User {
  id: number
  name: string
  email: string
  gender: UserGender
  status: UserStatus
}

export interface UserForm extends Omit<User, 'id'> {}

export interface UserPost {
  body: string
  id: number
  title: string
  user_id: number
}

export enum UserStatus {
  active = 'active',
  inactive = 'inactive'
}

export enum UserGender {
  male = 'male',
  female = 'female'
}
