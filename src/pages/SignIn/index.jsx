import { BsFillHexagonFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { Container, Header } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonNavigate } from "../../components/ButtonNavigate";


export function SignIn() { 
  
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/register");
  }

  return (
    <Container>
      <Header>
        <BsFillHexagonFill size={40}/>
        <h1>food explorer</h1>
      </Header>
      <Input
        icon={CiMail}
        placeholder="Exemplo: exemplo@exemplo.com.br"
        type="text"
        id="email"
        label="Email"
      />
      <Input
        icon={IoLockClosed}
        placeholder="No mínimo 6 caracteres"
        type="password"
        id="password"
        label="Senha"
      />
      <Button 
        title="Entrar"
      />
      <ButtonNavigate 
        title="Criar uma conta"
        onclick={handleNavigation}
      />   
    </Container>
  )
}


