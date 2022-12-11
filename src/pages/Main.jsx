import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useTodo from "../hooks/useTodo";
import { Layout, Input, IconButton, TodoList } from "../components";

function Main() {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodo();

  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      window.location.replace("/");
    }
  }, []);

  return (
    <Layout>
      <Container>
        <StyledInputForm onSubmit={handleSubmit}>
          <StyleStatus>오늘의 할 일을 입력해주세요!</StyleStatus>
          <StyledInput>
            <Input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Write To Do!"
            />
            <IconButton type="submit">➕</IconButton>
          </StyledInput>
        </StyledInputForm>
        <TodoList
          todoList={todoList}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </Container>
    </Layout>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const StyleStatus = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
