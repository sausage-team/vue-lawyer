import axios from 'axios'

type PROMISE = (data: object) => void

interface Service {
  GET (url: string, data: object, resolve: PROMISE): void
  POST (url: string, data: object, resolve: PROMISE): void
  PUT (url: string, data: object, resolve: PROMISE): void
  DELETE (url: string, resolve: PROMISE): void
  PATCH (url: string, data: object, resolve: PROMISE): void
}

class BasicService implements Service {
  private $http: any

  constructor () {
    this.$http = axios
  }

  public GET (url: string, data: object, resolve: PROMISE) {
    this.$http.get(url, {
      params: data || {}
    }).then((res: any) => {
      if (res.status === 200 && res.data.status === 0) {
        resolve(res.data)
      } else {
        resolve(res.data || {
          status: -1,
          msg: '请求失败'
        })
      }
    })
  }

  public POST (url: string, data: object, resolve: PROMISE) {
    this.$http.post(url, data || {})
      .then((res: any) => {
        if (res.status === 200 && res.data.status === 0) {
          resolve(res.data)
        } else {
          resolve(res.data || {
            status: -1,
            msg: '请求失败'
          })
        }
      })
  }

  public PUT (url: string, data: object, resolve: PROMISE) {
    this.$http.put(url, data || {})
      .then((res: any) => {
        if (res.status === 200 && res.data.status === 0) {
          resolve(res.data)
        } else {
          resolve(res.data || {
            status: -1,
            msg: '请求失败'
          })
        }
      })
  }

  public DELETE (url: string, resolve: PROMISE) {
    this.$http.delete(url)
      .then((res: any) => {
        if (res.status === 200 && res.data.status === 0) {
          resolve(res.data)
        } else {
          resolve(res.data || {
            status: -1,
            msg: '请求失败'
          })
        }
      })
  }

  public PATCH (url: string, data: object, resolve: PROMISE) {
    this.$http.patch(url, data || {})
      .then((res: any) => {
        if (res.status === 200 && res.data.status === 0) {
          resolve(res.data)
        } else {
          resolve(res.data || {
            status: -1,
            msg: '请求失败'
          })
        }
      })
  }
}

export default BasicService
