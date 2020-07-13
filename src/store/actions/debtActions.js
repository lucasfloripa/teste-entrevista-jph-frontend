import debtApi from '../../apis/debtApi'
import userApi from '../../apis/userApi'
import { GET_DEBT, GET_DEBTS, CREATE_DEBT, UPDATE_DEBT, DELETE_DEBT } from '../actions/types'

export const getDebts = (userId) => async (dispatch) => {
  let res;

  if (userId === undefined) {
    res = await debtApi.get('/')
  } else {
    res = await userApi.get(`/${userId}/debts`)
  }

  return dispatch({
    type: GET_DEBTS,
    payload: res.data.debts
  })
}

export const getDebt = (debtId) => async (dispatch) => {
  const res = await debtApi.get(`/${debtId}`)

  return dispatch({
    type: GET_DEBT,
    payload: res.data.debt
  })
}

export const createDebt = (userId, newDebt) => async (dispatch) => {
  const res = await debtApi.post(`/${userId}`, newDebt)

  return dispatch({
    type: CREATE_DEBT,
    payload: res.data
  })
}

export const updateDebt = (debtId, updatedDebt) => async (dispatch) => {
  const res = await debtApi.put(`/${debtId}`, updatedDebt)

  const data = await res

  return dispatch({
    type: UPDATE_DEBT,
    payload: data
  })
}

export const deleteDebt = (debtId) => async (dispatch) => {
  const res = await debtApi.delete(`${debtId}`)

  return dispatch({
    type: DELETE_DEBT,
    payload: res.data
  })
}