<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="add">mycount is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { ref } from 'vue';



export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   add() {
  //     this.count++
  //     console.log(this)
  //   }
  // },
  setup(){
    // let count = 0;
    let countRef = ref(0);
    const add = () => {
      count.value++;
      console.log(count.value,count)
    }
    return {
      value: 10,
      count,
      add
    }
  }
}
</script>
