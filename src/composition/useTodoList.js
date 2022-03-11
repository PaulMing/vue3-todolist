import { ref, watchEffect, } from 'vue'
import * as todoStoragte from '../utils/todoStorage'

export default function useTodoList() {
  const todoListRef = ref(todoStoragte.fetch());
  watchEffect(() => {
    todoStoragte.save(todoListRef.value)
  })

  return {
    todoListRef
  }
}