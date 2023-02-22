import {useEffect, useState} from "react";
import api from "../libs/api";

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const response = async () =>
      await api.get("/todos").then(({data}) => setTodoList([...data]));
    response();
  }, []);

  const addTodo = async (todo) => {
    const {data} = await api.post("/todos", {todo});
    setTodoList([...todoList, data]);
  };

  const updateTodo = async (_id, _isCompleted, _todo) => {
    const {data} = await api.put(`/todos/${_id}`, {
      isCompleted: _isCompleted,
      todo: _todo,
    });

    setTodoList(
      todoList.map((todo) =>
        todo.id === data?.id
          ? {...todo, todo: data.todo, isCompleted: data.isCompleted}
          : todo
      )
    );
  };

  const deleteTodo = async (_id) => {
    await api.delete(`/todos/${_id}`);
    setTodoList(todoList.filter((todo) => todo.id !== _id));
  };

  return {todoList, updateTodo, addTodo, deleteTodo};
}
