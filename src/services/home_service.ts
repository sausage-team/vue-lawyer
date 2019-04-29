import BasicService from './basic_service'

class HomeService extends BasicService {
  public ping () {
    console.log('pong!')
    return new Promise((resolve) => {
      this.GET('/', {}, resolve)
    })
  }
}

export default new HomeService()
