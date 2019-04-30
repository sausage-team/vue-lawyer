import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
class HeaderNav extends Vue {
  private activeIndex: string = '1'
  public handleSelect (key: string, keyPath: string) {
    console.log('handleSelect')
  }
}
export default HeaderNav
