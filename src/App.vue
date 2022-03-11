<template>
   <div>todoList</div>
   <input 
    type="text"
    v-model='newTodoRef'
    @keyup.enter='addTodo'/>
   <ul>
     <li
      v-for='item in todoListRef'
      :key='item.id'>{{ item.title }}</li>
   </ul>
</template>

<script>
import useTodoList from './composition/useTodoList'
import addNewTodo from './composition/addNewTodo'
export default {
  name: 'App',
  setup() {
    const { todoListRef } = useTodoList();

    return {
      todoListRef,
      ...addNewTodo(todoListRef)
    }
  }
}
</script>