import {HTTP} from '../util/http.js'

export class ClassicModel extends HTTP {
  getLatest(sCallback){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}