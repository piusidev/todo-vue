import api from '@/services/api';

export const todos = {
  state: {
    list: [],
  },
  async getTodos() {
    const resp = await api.get('/tasks');
    this.state.list = await resp.data;
  },
  addTodo(todo) {
    this.state.list.push(todo);
  },
};
