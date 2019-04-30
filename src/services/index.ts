const services: any = {}
const files = require.context('./', true, /\.ts$/)
files.keys().forEach((key: string) => {
  const k: string = key.split('/')[key.split('/').length - 1].replace(/_service.ts/g, 'Service')
  if (k !== './basic_service.js') {
    services[k] = files(key).default
  }
})
export {
  services
}
