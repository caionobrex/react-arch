import { axios } from "@/modules/shared/services/axios";

const MODULE_URL = '/auth'

export class AuthService {
  static signIn(email: string, password: string) {
    return axios.post(`${MODULE_URL}/signIn`, { email, password })
  }

  static signUp(email: string, name: string, password: string) {
    return axios.post(`${MODULE_URL}/signUp`, { email, name, password })
  }
}
