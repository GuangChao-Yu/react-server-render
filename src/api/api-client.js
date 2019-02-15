import axios from 'axios'
import secret from './secret'

const instance = axios.create({
  baseURL: '/',
  params: secret
})

export default instance
