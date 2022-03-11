export default function deleteTodo(todoListRef) {

  const delTodo = (id) => {
    todoListRef.value = todoListRef.value?.filter(item => item.id !== id)
  }

  return {
    delTodo
  }
}