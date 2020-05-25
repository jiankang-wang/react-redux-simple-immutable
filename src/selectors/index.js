export const getText = state => state.get('text')

export const getFilter = state => state.get('filter')

export const getVisibleTodos = state => {
  // 逐层往下拿需要的数据
  const data = state.getIn(['todos', 'data'])
  const filter = state.get('filter')
  // const { todos: { data }, filter } = state
  switch (filter) {
    case "all":
      return data;
    case "completed":
      return data.filter(t => t.get('completed'));
    case "active":
      return data.filter(t => !t.get('completed'));
    default:
      return new Error("Unknown filter: " + filter);
  }
}