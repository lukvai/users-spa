import { createFileRoute } from '@tanstack/react-router'
import UsersCreateForm from '../components/users/UsersCreateForm'

export const Route = createFileRoute('/users/create')({
  component: UsersCreateComponent
})

function UsersCreateComponent() {
  return <UsersCreateForm />
}
