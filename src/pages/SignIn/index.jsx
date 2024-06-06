import { BsFillHexagonFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, Header } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonNavigate } from "../../components/ButtonNavigate";
import { useAuth } from "../../hooks/auth";
import { UserMesssage } from "../../components/UserMessage";


export function SignIn() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, message } = useAuth();

  const [userMessage, setUserMessage] = useState("")

  function handleSignIn() {
    signIn({ email, password})
  }

  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/register");
  }

  function handleCloseMessage() {
    setUserMessage("")
  }

  useEffect(() => {
    setUserMessage(message)    

  }, [message])

  return (
    <Container>
      <UserMesssage         
        message={userMessage} 
        isMessage={!!userMessage}
        onClose={handleCloseMessage}
      />
      <Header>
        <BsFillHexagonFill size={40}/>
        <h1>food explorer</h1>
      </Header>
      <main>
        <h2>Faça Login</h2>
        <Input
          icon={CiMail}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          id="email"
          label="Email"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          icon={IoLockClosed}
          placeholder="No mínimo 6 caracteres"
          type="password"
          id="password"
          label="Senha"
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          title="Entrar"
          onClick={handleSignIn}
        />
        <ButtonNavigate
          title="Criar uma conta"
          onClick={handleNavigation}
        />
      </main>
    </Container>
  )
}


