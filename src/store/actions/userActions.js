import userApi from '../../apis/userApi'
import { GET_USER, GET_USERS } from '../actions/types'

export const getUsers = () => async (dispatch) => {
  const res = await userApi.get('/')

  return dispatch({
    type: GET_USERS,
    payload: res.data.users
  })
}

export const getUser = (userId) => async (dispatch) => {
  const res = await userApi.get(`/${userId}`)

  return dispatch({
    type: GET_USER,
    payload: res.data.user
  })
}
