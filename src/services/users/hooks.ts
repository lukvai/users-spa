import { useMutation, useQueryClient } from '@tanstack/react-query'
import { User } from '../../interfaces/User'
import { createUser, deleteUser, updateUser } from './api'
import toast from 'react-hot-toast'
import { useNavigate } from '@tanstack/react-router'

export const useUpdateUsersInfoMutation = (userId: User['id']) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update', 'user', userId],
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('User updated successfully')
    },
    onError: () => {
      toast.error('Oops something went wrong')
    }
  })
}

export const useCreateUserMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      navigate({
        to: '/users/$userId',
        params: {
          userId: data.id
        }
      })
      toast.success('User created successfully')
    },
    onError: () => {
      toast.error('Oops something went wrong')
    }
  })
}

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('User deleted successfully')
    },
    onError: () => {
      toast.error('Oops something went wrong')
    }
  })
}
