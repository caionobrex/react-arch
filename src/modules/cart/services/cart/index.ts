import { axios } from "@/modules/shared/services/axios";

const MODULE_URL = '/cart'

export class CartService {
  static addItem(itemId: string, qty: number) {
    return axios.put(`${MODULE_URL}/addItem`, { itemId, qty })
  }

  static removeItem(itemId: string) {
    return axios.delete(`${MODULE_URL}/removeItem/${itemId}`)
  }
}