import {HTTP} from '../util/http.js'

export class LikeModel extends HTTP{
  like(behavior,artId, category){
    let url = behavior == 'like'?'like':'like/cancel'
    this.request({
      url:url,
      method:'POST',
      data:{
        art_id: artId,
        type: category
      }
    })
  }
}