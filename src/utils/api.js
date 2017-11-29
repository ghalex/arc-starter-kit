import Rapid, { Auth } from 'rapid.js'
import { getJWT } from './storage'

const SERVER_URL = 'https://dreaminternship-api-dev.herokuapp.com/v1'

export class Api extends Rapid {
  boot () {
    this.baseURL = SERVER_URL
    this.config.globalParameters = {}
    this.config.apiConfig = {
      headers: {'Authorization': getJWT()},
      transformResponse: res => {
        return JSON.parse(res).data
      }
    }
  }
}

export class ApiAuth extends Auth {
  boot () {
    this.baseURL = SERVER_URL + '/auth'
    this.config.apiConfig = {
      transformResponse: res => {
        const json = JSON.parse(res)
        if (json.error) {
          throw new Error(json.error)
        }
        return json.data
      }
    }
  }

  login (data) {
    return super.login(data).then(res => {
      return res
    })
  }
}
