import BasicService from './basic_service'

class PingService extends BasicService {
  ping () {
    return new Promise((resolve) => {
      this.TEMPLATE_GET('/', '', resolve)
    })
  }
}

export default new PingService()
