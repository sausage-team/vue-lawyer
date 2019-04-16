<template>
  <div>
    <el-row>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio2" @change="changeValue">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '1',
      radio2: 3,
      radio3: '上海',
      radio4: '上海',
      radio5: '上海',
      radio6: '上海'
    }
  },
  methods: {
    changeValue (val) {
      console.log(val)
    }
  }
}
</script>
