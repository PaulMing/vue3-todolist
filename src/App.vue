<template>
   <div>todoList</div>
   <input 
    type="text"
    v-model='newTodoRef'
    @keyup.enter='addTodo'/>
   <ul>
     <li 
      v-for='item in todosRef' 
      :key='item'>{{ item.name }}</li>
   </ul>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { ref, watchEffect, } from 'vue'
// import * as todoStoragte from './util/todoStorage'
import useTodoList from './composition/useTodoList'
import addNewTodo from './composition/addNewTodo'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  setup() {
    // const todoRef = ref(todoStoragte.fetch());
    // watchEffect(() => {
    //   todoStoragte.save(todoRef.value)
    // })
    const { todsRef } = useTodoList();

    return {
      todoRef,
      ...addNewTodo(todoRef)
    }



  }
  
}
</script>