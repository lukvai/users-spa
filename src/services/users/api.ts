import axios from 'axios'
import { Pagination } from '../../interfaces/Pagination'
import { User, UserForm } from '../../interfaces/User'
import {
  createUserEndpoint,
  deleteUserEndpoint,
  getPaginatedUsersEndpoint,
  getUsersInfoEndpoint,
  updateUsersEndpoint
} from './endpoints'
import { getPaginationData } from '../pagination'
import { getHeader } from '../api'

export const getPaginatedUsers = async (
  page = 1,
  name = ''
): Promise<{ pagination: Pagination; data: User[] }> => {
  try {
    const token = import.meta.env.VITE_BEARER_TOKEN
    const response = await axios.get(getPaginatedUsersEndpoint(page, name), {
      headers: { Authorization: `Bearer ${token}` }
    })

    return {
      pagination: getPaginationData(response.headers),
      data: response.data ?? []
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getUsersInfo = async (id: string): Promise<User> => {
  try {
    const response = await axios.get(getUsersInfoEndpoint(id), getHeader())

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateUser = async (user: User): Promise<void> => {
  try {
    await axios.put(updateUsersEndpoint(user.id), user, getHeader())
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createUser = async (user: UserForm): Promise<User> => {
  try {
    const response = await axios.post(createUserEndpoint(), user, getHeader())

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteUser = async (id: User['id']): Promise<void> => {
  try {
    await axios.delete(deleteUserEndpoint(id), getHeader())
  } catch (error) {
    console.error(error)
    throw error
  }
}
