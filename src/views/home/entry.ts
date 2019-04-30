import { Component, Prop, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component({})
export default class Home extends Vue {
  @Action('home/backHome') private backHome: any

  private form: any = {
    province: '湖北',
    city: '荆州',
    comeweb: '荆州市L23384_R',
    phone: '',
    place: '',
    desc: ''
  }
  private formRules: any = {
    phone: [
      { type: 'number', required: true, message: '请输入正确手机号', trigger: 'blur' }
    ],
    place: [
      { required: true, message: '请输入事发地点', trigger: 'blur' }
    ],
    desc: [
      { required: true, message: '请输入咨询内容', trigger: 'blur' }
    ]
  }
  private phone: string = '0716-xxxxxxx'
  private mobile: string = '13972119198'
  private companyMapAddress: string = 'http://api.map.baidu.com/geocoder?address=监利县容城镇宝合门路12号&output=html'

  public submitForm () {
    const form: any = this.$refs.form

    form.validate((valid: any) => {
      if (valid) {
        this.backHome('home').then((res: any) => {
          console.log(`now in home/vue ${this.$store.state.home.author}`)
          console.log(`now in home/vue: promise response ${res}`)
        })
      } else {
        return false
      }
    })
  }
  public resetForm () {
    const form: any = this.$refs.form
    form.resetFields()
  }
}
