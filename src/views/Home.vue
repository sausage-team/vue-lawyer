<template>
  <div class="home">
    <div class="home-header">
      <el-tag v-for="(item, index) in CONSTANT.headerTags" :key="index" type="success">
        {{item}}
      </el-tag>
    </div>
    <div class="home-body">
      <div class="title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>湖北</el-breadcrumb-item>
          <el-breadcrumb-item>荆州</el-breadcrumb-item>
          <el-breadcrumb-item>荆州市律师</el-breadcrumb-item>
          <el-breadcrumb-item>任金城律师</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="main">
        <div class="left-con">
          <default-card card-title="任金城律师" class="personal">
            <template v-slot:content>
              <img src="../assets/images/photo.jpg"/>
              <span>任金城律师</span>
              <span>湖北·荆州·荆州市</span>
              <span>电话:{{mobile}}</span>
              <span>中国法网加盟律师</span>
              <span>已帮助 <em class="emphasis">1</em> 人解决了法律难题</span>
              <img src="../assets/images/lawyeryp.gif" alt="">
            </template>
          </default-card>
          <default-card card-title="律师档案" class="resume">
            <template v-slot:content>
              <span>执业证号：170405118021</span>
              <span>单位：湖北省楚胥律师事务所</span>
              <span>地址：
                <a class="company-address" target="_blank" :href="companyMapAddress">
                  监利县容城镇宝合门路12号
                </a>
              </span>
              <span>电话：{{phone}}</span>
              <span>手机：{{mobile}}</span>
              <span>QQ：112202469</span>
              <span>微博：
                <a class="weibo-address">看看Ta的微博</a>
              </span>
              <span>邮箱：rjcsf@126.com</span>
            </template>
          </default-card>
          <default-card card-title="业务擅长" class="speciality">
            <template v-slot:content>
              <el-tag size="mini" v-for="(item, index) in CONSTANT.serviceTags" :key="index">
                {{item}}
              </el-tag>
            </template>
          </default-card>
          <default-card card-title="任金城律师社会荣誉" class="honor">
            <template v-slot:content>
              <el-tag size="mini"><a href="http://www.cnlaw.net/lawyer/" target="_blank">中国法网荆州律师团成员</a></el-tag>
              <el-tag size="mini"><a href="http://www.cnlaw.net/zhuanye/" target="_blank">荆州金融保险专业律师</a></el-tag>
            </template>
          </default-card>
           <default-card
            card-title="荆州律师导航"
            class="navigator"
            :data="CONSTANT.navigator">
          </default-card>
          <default-card
            card-title="成功案例"
            class="success-case"
            :data="CONSTANT.successCase">
          </default-card>
        </div>
        <div class="right-con">
          <default-card card-title="最新观点" class="lastest-view">
            <template v-slot:content>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;任金城律师手机：{{mobile}}，{{phone}}！</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;任金城律师，毕业于武汉大学，法学硕士，系中华全国律师协会会员、荆州市律师协会会员. 曾任职政府、上市公司法律部，社会阅历丰富，具有很强的诉讼和非诉讼方案策划等能力，办事认真负责，法律理论功底扎实，诉讼和非诉讼法律实务经验技巧丰富，有极强的服务、责任意识，在法律服务中竭力维护委托人的合法权益，长期为国内银行、外商投资企业、港台企业、国内大型企业、国内个人等大量客户提供法律服务，代理了大量有社会影响的诉讼和非诉讼业务案件，担任一批企业公司和外籍个人的常年法律顾问，维护了客户的合法权益，深受到客户肯定，一些案例</span>
              <span v-for="(item, index) in CONSTANT.successCase" :key="index">
                <a :href="item.href" target="_blank">{{item.name}}</a>
              </span>
            </template>
          </default-card>
          <div class="news-solution">
            <el-row :gutter="30">
              <el-col :span="12">
                <default-card card-title="我的快报" class="news">
                  <template v-slot:content>
                    <span>本律师暂时没有最新消息.</span>
                    <span><a>免费发布律师快报.</a></span>
                  </template>
                </default-card>
              </el-col>
              <el-col :span="12">
                <default-card card-title="最新解答" class="solution">
                  <template v-slot:content>
                    <span>还没有解答任何问题.</span>
                    <span><a>进入法律咨询中心.</a></span>
                  </template>
                </default-card>
              </el-col>
            </el-row>
          </div>
          <div class="civil-debet">
            <el-row :gutter="30">
              <el-col :span="12">
                <default-card
                  card-title="民事"
                  class="civil"
                  :data="CONSTANT.civil">
                </default-card>
              </el-col>
              <el-col :span="12">
                <default-card
                  card-title="债权债务"
                  class="debet"
                  :data="CONSTANT.debet">
                </default-card>
              </el-col>
            </el-row>
          </div>
          <div class="contract-criminal">
            <el-row :gutter="30">
              <el-col :span="12">
                <default-card
                  card-title="公司合同"
                  class="contract"
                  :data="CONSTANT.contract">
                </default-card>
              </el-col>
              <el-col :span="12">
                <default-card
                  card-title="刑事"
                  class="crinimal"
                  :data="CONSTANT.crinimal">
                </default-card>
              </el-col>
            </el-row>
          </div>
          <div class="submit-question">
            <default-card
              card-title="我要提问">
              <template v-slot:content>
                <el-form ref="form" :model="form" :rules="formRules" label-width="80px">
                  <el-form-item label="手机号码" prop="phone">
                    <el-input v-model.number="form.phone" clearable></el-input>
                  </el-form-item>
                  <el-form-item label="事发地点" prop="place">
                    <el-input v-model="form.place" clearable></el-input>
                  </el-form-item>
                  <el-form-item label="咨询内容" prop="desc">
                    <el-input type="textarea" v-model="form.desc" ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">确定</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                  </el-form-item>
                </el-form>
              </template>
            </default-card>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer"></div>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
      form: {
        province: '湖北',
        city: '荆州',
        comeweb: '荆州市L23384_R',
        phone: '',
        place: '',
        desc: ''
      },
      formRules: {
        phone: [
          { type: 'number', required: true, message: '请输入正确手机号', trigger: 'blur' }
        ],
        place: [
          { required: true, message: '请输入事发地点', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入咨询内容', trigger: 'blur' }
        ]
      },
      phone: '0716-xxxxxxx',
      mobile: '13972119198',
      companyMapAddress: 'http://api.map.baidu.com/geocoder?address=监利县容城镇宝合门路12号&output=html'
    }
  },
  methods: {
    submitForm () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('backHome', 'home').then(res => {
            console.log(`now in home/vue ${this.$store.state.home.author}`)
            console.log(`now in home/vue: promise response ${res}`)
          })
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs['form'].resetFields()
    }
  }
}
</script>
