import { ref } from 'vue'
import { generateId } from '../utils/todoStorage'

export default function newTodoList(todoListRef) {
  const newTodoRef = ref("");
  const addTodo = () => {
    const value = newTodoRef.value?.trim();
    if(!value) return;
    // 生成任务对象
    const todo = {
      id: generateId(),
      title: value,
      completed: false,
    }
    // 加入到任务列表
    todoListRef.value.push(todo);
    // 清空
    newTodoRef.value = '';
  }

  return {
    newTodoRef,
    addTodo
  }
}