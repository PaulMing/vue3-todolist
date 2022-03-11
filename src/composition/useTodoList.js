import { ref, watchEffect, } from 'vue'
import * as todoStoragte from './util/todoStorage'

export default function useTodoList() {
  const todosRef = ref(todoStoragte.fetch());
  watchEffect(() => {
    todoStoragte.save(todosRef.value)
  })

  return {
    todosRef
  }
}