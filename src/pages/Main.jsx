import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import useTodo from "../hooks/useTodo";
import {Layout, IconButton, TodoList} from "../components";

function Main() {
  const {todoList, addTodo, updateTodo, deleteTodo} = useTodo();
  // eslint-disable-next-line no-undef
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = e.target[0].value;
    addTodo(todo);
    inputRef.current.value = "";
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
              ref={inputRef}
              placeholder="Write To Do!"
              dataTestid="new-todo-input"
            />
            <IconButton type="submit" data-testid="new-todo-add-button">
              ➕
            </IconButton>
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

const Input = styled.input`
  width: 100%;
  padding: 15px 30px;
  border: 1px solid gray;
  border-radius: 20px;
  outline: none;
  &:focus {
    border: 2px solid black;
  }
`;

const StyleStatus = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
