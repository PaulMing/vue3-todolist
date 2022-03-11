function generateId() {
  return Date.now() + Math.random().toString(16).slice(2,4)
}


function fetch() {
  const result = localStorage.getItem('vue3_todoList');
  if(result) {
    return JSON.parse(result)
  } 
  return []
}


function save(param) {
  localStorage.setItem('vue3_todoList',JSON.stringify(param))
}


export {
  fetch,
  save,
  generateId
}