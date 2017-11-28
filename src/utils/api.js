import Rapid, { Auth } from 'rapid.js'
import { getJWT } from './storage'

export class Api extends Rapid {
  boot () {
    this.baseURL = 'http://localhost:5000/v1'
    this.config.globalParameters = {}
    this.config.apiConfig = {
      headers: {'Authorization': getJWT()}
    }
  }
}

export class ApiAuth extends Auth {
  boot () {
    this.baseURL = 'http://localhost:5000/v1/auth'
    this.config.apiConfig = {
      transformResponse: res => {
        return JSON.parse(res).data
      }
    }
  }
}
