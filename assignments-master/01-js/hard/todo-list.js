/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.arr = []
  }
  add(todo) {
    this.arr.push(todo)
  }
  remove(indexOfTodo) {
    this.arr.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo){
    if(this.arr.length > index) {
    this.arr[index] = updatedTodo;
    } else {
      throw new Error('Invalid index');
    }
  }
  getAll() {
    return this.arr;
  }
  get(indexOfTodo){
    return this.arr[indexOfTodo]
  }
  clear(){
    this.arr = []
  }
}

module.exports = Todo;
