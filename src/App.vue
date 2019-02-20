<template>
    <div id="app">
      <img src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view />
        </keep-alive>
        <router-view v-else/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  // Getter
  @Getter author: any;// 作者

  // Mutation
  @Mutation SET_AUTHOR: any;

  mounted () {
    console.log(this.author)
    this.changeAuthor('帅锅')
  }

  changeAuthor (name: String) {
    this.SET_AUTHOR(name)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
