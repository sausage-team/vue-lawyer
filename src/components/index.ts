import DefaultCard from './default_card/DefaultCard.vue'
import HeaderNav from './header_nav/HeaderNav.vue'

interface ComponentBase {
  init (vue: any): void
}

class GlobalComponents implements ComponentBase {
  public init (vue: any) {
    vue.component('DefaultCard', DefaultCard)
    vue.component('HeaderNav', HeaderNav)
  }
}

export default new GlobalComponents()
