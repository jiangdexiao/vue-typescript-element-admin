import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { LoginData } from '@/interface/login.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter login.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: LoginData = {
    pageName: 'login'
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
