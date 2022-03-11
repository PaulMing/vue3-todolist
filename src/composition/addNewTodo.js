import { ref } from 'vue'
import { generateId } from './util/todoStorage'

export default function newTodoList(todosRef) {
  const newTodoRef = ref("");
  const addTodo = () => {
    const value = newTodoRef.value?.newTodoRef.value.trim();
    if(!value) return;
    //任务对象
    const todo = {
      id: generateId(),
      title: value,
      completed: false,
    }
    //加入到任务列表
    todosRef.value.push(todo);
    // 清空
    newTodoRef.value = '';






  }

  return {
    newTodoRef,
    addTodo
  }
}