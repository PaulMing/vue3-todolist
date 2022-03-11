<template>
   <div>todoList</div>
   <input 
    type="text"
    v-model='newTodoRef'
    @keyup.enter='addTodo'/>
   <ul>
     <li
        v-for='item in todoListRef'
        :key='item.id'>
        <span>{{ item.title }}</span>
        <button @click='delTodo(item.id)'>删除</button>
      </li>
   </ul>
</template>

<script>
import useTodoList from './composition/useTodoList'
import addNewTodo from './composition/addNewTodo'
import deleteTodo from './composition/deleteTodo'
export default {
  name: 'App',
  setup() {
    const { todoListRef } = useTodoList();
    // const { delTodo } = deleteTodo();

    return {
      todoListRef,
      ...addNewTodo(todoListRef),
      ...deleteTodo(todoListRef)
      // delTodo(id,todoListRef)
    }
  }
}
</script>