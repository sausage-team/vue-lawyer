import homeService from '@/services/home_service'

interface StateProps {
  home: string,
  author: string
}
const state: StateProps = {
  home: 'welcome',
  author: 'tdy'
}

type COMMIT = (name: string, data?: any) => void
interface ActionProps {
  commit: COMMIT
  state: StateProps
}

const actions: any = {
  backHome: ({ commit, state }: ActionProps, place: string) => {
    return new Promise((resolve) => {
      homeService.ping().then((res) => {
        resolve(place)
        commit('receiveFromHome', place)
      })
    })
  }
}

const getters: any = {}

const mutations: any = {
  receiveFromHome: (state: StateProps, place: string) => {
    console.log(`now in home/store: ${state.home} to ${place}`)
    console.log(`now in home/store: set ${state.author} to tangdaoyuan`)
    state.author = 'tangdaoyuan'
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
