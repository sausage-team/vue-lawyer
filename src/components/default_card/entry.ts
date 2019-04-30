import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
class DefaultCard extends Vue {
  @Prop({
    type: String
  }) public cardTitle !: string
  @Prop({
    type: Array
  }) public data !: any[]
}
export default DefaultCard
