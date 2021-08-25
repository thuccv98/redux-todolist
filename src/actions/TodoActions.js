// su dung redux-thunk de cho phep tra ve action la mot fuction, dong vai tro la middleware giua action va reducer
export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  // Tim ra todo da co trong list: hastodo la todo da ton tai trong list
  const hasTodo = todos.find((i) => i.todo === todo);

  // check neu ma todo khong ton tai trong list va todo khac rong thi dispatch
  if (!hasTodo && todo !== '') {
    dispatch({
      type: 'ADD_TODO',
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  dispatch({
    // Loc ra nhung todo khong can remove, todo bi remove la todo co id trung vs id dc click
    type: 'REMOVE_TODO',
    payload: todos.filter((i) => i.id !== todo.id),
  });
};
