import axios from 'axios'

class BasicService {
  constructor () {
    this.$http = axios
  }

  TEMPLATE_GET (url, data, resolve) {
    this.$http.get(url, {
      params: data || {}
    }).then(res => {
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

  TEMPLATE_POST (url, data, resolve) {
    this.$http.post(url, data || {})
      .then(res => {
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

  TEMPLATE_PUT (url, data, resolve) {
    this.$http.put(url, data || {})
      .then(res => {
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

  TEMPLATE_DELETE (url, resolve) {
    this.$http.delete(url)
      .then(res => {
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

  TEMPLATE_PATCH (url, data, resolve) {
    this.$http.patch(url, data || {})
      .then(res => {
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
