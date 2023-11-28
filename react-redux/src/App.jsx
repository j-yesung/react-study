// import axios from 'axios';
import api from './axios/api';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState({
    title: '',
  });
  const [todos, setTodos] = useState(null);

  // patch에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({
    title: '',
  });

  const fetchTodos = async () => {
    const { data } = await api.get('/todos');
    setTodos(data);
  };

  const onSubmitHandler = todo => {
    api.post('/todos', todo);
    setTodos([...todos, todo]);
    setTodo({ title: '' });
  };

  const onClickDeleteButtonHandler = todoId => {
    api.delete(`/todos/${todoId}`);
    return todos.filter(todo => todo.id !== todoId);
  };

  // 수정버튼 이벤트 핸들러 추가 👇
  const onClickEditButtonHandler = (todoId, edit) => {
    api.patch(`/todos/${todoId}`, edit);
    return todos.map(todo => {
      if (todo.id === todoId) {
        return edit;
      }
      return todo;
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        {/* 👇 수정기능에 필요한 id, 수정값 input2개와 수정하기 버튼을 추가 */}
        <div>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            onChange={ev => {
              setTargetId(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            onChange={ev => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value,
              });
            }}
          />
          <button
            // type='button' 을 추가해야 form의 영향에서 벗어남
            type="button"
            onClick={() => onClickEditButtonHandler(targetId, editTodo)}
          >
            수정하기
          </button>
        </div>
        <input
          type="text"
          onChange={ev => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map(todo => (
          <div key={todo.id}>
            {/* todo의 아이디를 화면에 표시 */}
            {todo.title}
            &nbsp;
            <button type="button" onClick={() => onClickDeleteButtonHandler(todo.id)}>
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
