<template>
  <div class="home">
    <div class="home-header">
      <el-tag v-for="(item, index) in headerTags" :key="index" type="success">
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
              <el-tag size="mini" v-for="(item, index) in serviceTags" :key="index">
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
           <default-card card-title="荆州律师导航" class="navigator">
            <template v-slot:content>
              <span>
                <a href="http://www.cnlaw.net/hb/" target="_blank">湖北律师</a>
              </span>
              <span>
                <a href="http://www.cnlaw.net/jingzhou/" target="_blank">荆州律师</a>
              </span>
              <span>
                <a href="http://www.cnlaw.net/hb/lawnews" target="_blank">湖北律师快报</a>
              </span>
              <span>
                <a href="http://www.cnlaw.net/jingzhou/lawnews/" target="_blank">荆州律师快报</a>
              </span>
              <span >
                <a href="http://www.cnlaw.net/lawyer/yp_17.htm" target="_blank">湖北律师黄页</a>
              </span>
              <span>
                <a href="http://www.cnlaw.net/lawyer/yp_257.htm" target="_blank">荆州律师黄页</a>
              </span>
              <span>
                <a href="http://www.cnlaw.net/rank/17.htm" target="_blank">湖北律师排名</a>
              </span>
              <span>
                <a href="http://www.cnlaw.net/rank/257.htm" target="_blank">荆州律师排名</a>
              </span>
            </template>
          </default-card>
          <default-card card-title="成功案例" class="success-case">
            <template v-slot:content>
              <span><a target="_blank">蒋某某民间借贷纠纷案代理词</a></span>
              <span><a target="_blank">道路交通事故损害赔偿案件上诉状</a></span>
              <span><a target="_blank">企业规章制度的备案程序</a></span>
            </template>
          </default-card>
        </div>
        <div class="right-con">
          <default-card card-title="最新观点" class="lastest-view">
            <template v-slot:content>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;任金城律师手机：{{mobile}}，{{phone}}！</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;任金城律师，毕业于武汉大学，法学硕士，系中华全国律师协会会员、荆州市律师协会会员. 曾任职政府、上市公司法律部，社会阅历丰富，具有很强的诉讼和非诉讼方案策划等能力，办事认真负责，法律理论功底扎实，诉讼和非诉讼法律实务经验技巧丰富，有极强的服务、责任意识，在法律服务中竭力维护委托人的合法权益，长期为国内银行、外商投资企业、港台企业、国内大型企业、国内个人等大量客户提供法律服务，代理了大量有社会影响的诉讼和非诉讼业务案件，担任一批企业公司和外籍个人的常年法律顾问，维护了客户的合法权益，深受到客户肯定，一些案例</span>
              <span><a>蒋某某民间借贷纠纷案代理词</a></span>
              <span><a>道路交通事故损害赔偿案件上诉状</a></span>
              <span><a>企业规章制度的备案程序</a></span>
              <span><a>涉毒犯罪案件中主观明知的认定问题如何来确定</a></span>
              <span><a>什么是立案</a></span>
              <span><a>关于劳动争议案件仲裁与审判若干问题的指导意见</a></span>
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
                <default-card card-title="民事" class="civil">
                  <template v-slot:content>
                    <span>
                      <a href="">离婚诉讼要经过的三个程序</a>
                    </span>
                    <span>
                      <a href="">在房产的租赁纠纷中最常见的三几大误区</a>
                    </span>
                    <span>
                      <a href="">协议离婚手续怎么办？</a>
                    </span>
                    <span>
                      <a href="">以出租房屋为名出租划拨土地的合同无效</a>
                    </span>
                    <span>
                      <a href="">职工工作时间发病死亡能否认定工伤？</a>
                    </span>
                    <span>
                      <a href="">离婚协议书</a>
                    </span>
                  </template>
                </default-card>
              </el-col>
              <el-col :span="12">
                <default-card card-title="债权债务" class="debet">
                  <template v-slot:content>
                    <span>
                      <a href="">合同一般包括哪些条款？</a>
                    </span>
                    <span>
                      <a href="">诉讼中通过那些渠道查找债务人的财产？</a>
                    </span>
                    <span>
                      <a href="">追讨债务的司法诉讼程序</a>
                    </span>
                    <span>
                      <a href="">第三人代为履行是否为并存的债务承担的法律</a>
                    </span>
                    <span>
                      <a href="">民事裁定书（不予执行公证债权文书用）</a>
                    </span>
                    <span>
                      <a href="">律师提示：警惕黑客盗取邮箱密码冒充主人谈</a>
                    </span>
                  </template>
                </default-card>
              </el-col>
            </el-row>
          </div>
          <div class="contract-criminal">
            <el-row :gutter="30">
              <el-col :span="12">
                <default-card card-title="公司合同" class="contract">
                  <template v-slot:content>
                    <span><a href="">水水货物联运合同</a></span>
                    <span><a href="">国有土地使用权出让合同（二）</a></span>
                    <span><a href="">合同无效和合同解除的区别</a></span>
                    <span><a href="">联营合同（松散型）</a></span>
                    <span><a href="">中外货物买卖合同（三）</a></span>
                    <span><a href="">合同转让纠纷诉讼当事人</a></span>
                    <span><a href="">大学生能否签订劳动合同？</a></span>
                    <span><a href="">城市土地开发和商品房借款合同</a></span>
                    <span><a href="">赠与合同是诺成性合同还是实践合同的探讨</a></span>
                    <span><a href="">中国农业银行担保借款协议书</a></span>
                  </template>
                </default-card>
              </el-col>
              <el-col :span="12">
                <default-card card-title="刑事" class="crinimal">
                  <template v-slot:content>
                    <span><a href="">非法买卖制毒物品罪</a></span>
                    <span><a href="">《关于复核死刑案件若干问题的规定》的解读</a></span>
                    <span><a href="">司法拘留的适用条件？</a></span>
                    <span><a href="">引诱、教唆、欺骗他人吸毒罪</a></span>
                    <span><a href="">执行程序中拘留应当注意的几个问题</a></span>
                    <span><a href="">妨害公务罪辩护词</a></span>
                    <span><a href="">嫖宿幼女罪</a></span>
                    <span><a href="">受过刑事处罚的外国人能否在中国收养子女？</a></span>
                    <span><a href="">盗窃罪</a></span>
                    <span><a href="">关于假冒注册商标犯罪立案标准的规定</a></span>
                  </template>
                </default-card>
              </el-col>
            </el-row>
          </div>
          <div class="submit-question">
            <div class="default-card">
              <div class="default-title">我要提问</div>
              <div class="default-content content">
                <el-form ref="form" :model="form" :rules="formRules" label-width="80px">
                  <el-form-item label="手机号码" prop="phone">
                    <el-input v-model.number="form.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="事发地点" prop="place">
                    <el-input v-model="form.place"></el-input>
                  </el-form-item>
                  <el-form-item label="咨询内容" prop="desc">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">确定</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer"></div>
  </div>
</template>
<script>
import { mkdir } from 'fs';
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
          {type: "number", required: true, message: '请输入正确手机号', trigger: 'blur'}
        ],
        place: [
          {required: true, message: '请输入事发地点', trigger: 'blur'}
        ],
        desc: [
          {required: true, message: '请输入咨询内容', trigger: 'blur'}
        ]
      },
      phone: '0716-8888888',
      mobile: '13333333333',
      companyMapAddress: 'http://api.map.baidu.com/geocoder?address=监利县容城镇宝合门路12号&output=html',
      headerTags: [
        '金融保险',
        '行政诉讼',
        '建筑房产',
        '海商海事',
        '公司法务',
        '借贷纠纷',
        '公司法务',
        '合同纠纷',
        '债权债务',
        '刑事辩护',
        '知识产权',
        '国际贸易'
      ],
      serviceTags: [
        '金融保险',
        '行政诉讼',
        '建筑房产',
        '海商海事',
        '公司法务'
      ]
    }
  },
  methods: {
    submitForm () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    resetForm () {
      this.$refs['form'].resetFields();
    }
  }
}
</script>
