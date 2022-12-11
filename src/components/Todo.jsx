import React, { useState } from "react";
import styled from "styled-components";

export default function Todo({ contents, updateTodo, deleteTodo }) {
  const { id, isCompleted, todo } = contents;
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const handleUpdate = async (_id, _isCompleted, _todo) => {
    updateTodo(_id, _isCompleted, _todo);
    setIsEdit((props) => !props);
  };
  const handleDelete = async (_id) => {
    deleteTodo(_id);
  };
  const handleDone = async (_id, _isCompleted, _todo) => {
    updateTodo(_id, _isCompleted, _todo);
  };
  return (
    <StyledTodo>
      <IconButton onClick={() => handleDone(id, !isCompleted, todo)}>
        ✅
      </IconButton>
      {isEdit ? (
        <div>
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        </div>
      ) : (
        <div>{todo}</div>
      )}
      {isEdit ? (
        <StyledButtons>
          <IconButton onClick={() => handleUpdate(id, isCompleted, editTodo)}>
            💾
          </IconButton>
          <IconButton onClick={() => setIsEdit((props) => !props)}>
            ↪️
          </IconButton>
        </StyledButtons>
      ) : (
        <StyledButtons>
          <IconButton onClick={() => setIsEdit((props) => !props)}>
            ✏️
          </IconButton>
          <IconButton onClick={() => handleDelete(id)}>❌</IconButton>
        </StyledButtons>
      )}
    </StyledTodo>
  );
}

const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;

const StyledButtons = styled.div`
  display: flex;
  margin-left: 10px;
`;

const IconButton = styled.button`
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30px;
  height: 30px;
  background-color: white;
`;
