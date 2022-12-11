import React from "react";
import styled from "styled-components";
import { Todo } from "../components";

export default function TodoList({ todoList, updateTodo, deleteTodo }) {
  return (
    <StyledTodoList>
      <div>
        <StyleStatus>TODO ! 💥</StyleStatus>
        <TodoSection>
          {todoList &&
            todoList.map((contents) =>
              !contents.isCompleted ? (
                <Todo
                  key={contents.id}
                  contents={contents}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              ) : null
            )}
        </TodoSection>
      </div>
      <div>
        <StyleStatus>DONE ! 👑</StyleStatus>
        <TodoSection>
          {todoList &&
            todoList.map((contents) =>
              contents.isCompleted ? (
                <Todo
                  key={contents.id}
                  contents={contents}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              ) : null
            )}
        </TodoSection>
      </div>
    </StyledTodoList>
  );
}

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyleStatus = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

const TodoSection = styled.div`
  width: 350px;
  height: 250px;
  border: 2px solid purple;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
