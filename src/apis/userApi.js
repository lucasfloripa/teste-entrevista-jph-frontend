import axios from 'axios'

const userApi = axios.create({ baseURL: "http://localhost:3333/api/v1/users" })

export default userApi