import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../libs/api";
import {
  isMatchedPassword,
  isValidPassword,
  isValidEmailForm,
} from "../libs/valid";
import {Layout, Input} from "../components";
import styled from "styled-components";

export default function SignUp() {
  const navigate = useNavigate();
  /** Register State */

  /** Input State */
  const [email, setEmail] = useState("");
  const [password, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  /**Valid Checker */
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPW, setIsValidPW] = useState(false);
  const [isMatchedPW, setIsMatchedPW] = useState(false);

  /**Disabled Controller */
  useEffect(() => {
    isValidEmailForm(email) ? setIsValidEmail(true) : setIsValidEmail(false);
    isValidPassword(password) ? setIsValidPW(true) : setIsValidPW(false);
    isMatchedPassword(password, password2)
      ? setIsMatchedPW(true)
      : setIsMatchedPW(false);
  }, [email, password, password2]);

  /**Submit Handler */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/auth/signup", {
        email,
        password,
      })
      .catch((e) => {
        if (e.response?.data?.statusCode) {
          return alert(e.response?.data?.message);
        }
      });

    navigate("/signin");
  };
  return (
    <Layout>
      <Container>
        <Title>TODAY'S TO DO</Title>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            type="text"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
            dataTestid="email-input"
            required
          />
          <Input
            type="password"
            value={password || ""}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="비밀번호(영문,숫자 8자리 이상)"
            dataTestid="password-input"
            required
          />

          <Input
            type="password"
            value={password2 || ""}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="비밀번호 확인"
            required
          />

          <Button
            type="submit"
            data-testid="signup-button"
            disabled={!isValidEmail || !isValidPW || !isMatchedPW}
          >
            회원가입
          </Button>
        </AuthForm>
        <StyledIsRegister onClick={() => navigate("/signin")}>
          이미 회원입니다 !
        </StyledIsRegister>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 40px;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 230px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => (props.disabled ? "gray" : "purple")};
  color: white;
  cursor: pointer;
`;

const StyledIsRegister = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: black;
  }
`;
