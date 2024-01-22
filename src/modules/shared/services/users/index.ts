import { axios } from "@/modules/shared/services/axios";

const MODULE_URL = '/users'

export class UsersService {
  static me() {
    return axios.get(`${MODULE_URL}/me`)
  }
}