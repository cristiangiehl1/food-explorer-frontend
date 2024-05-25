import { BsFillHexagonFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
import { FaPersonHalfDress } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


import { Container, Header } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonNavigate } from "../../components/ButtonNavigate";



export function SignUp() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (


    <Container>
      <Header>
        <BsFillHexagonFill size={40}/>
        <h1>food explorer</h1>
      </Header>
      <div className="input-wrapper">
        <Input
          icon={FaPersonHalfDress}
          placeholder="Exemplo: Maria da Silva"
          type="text"
          id="name"
          label="Seu nome"
        />
        <Input
          icon={CiMail}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          id="email"
          label="Email"
        />
      </div>
      <div className="input-wrapper">
        <Input
          icon={IoLockClosed}
          placeholder="No mínimo 6 caracteres"
          type="password"
          id="password"
          label="Senha"
        />
        <Input
          icon={IoLockClosed}
          placeholder="Mesma senha da anterior"
          type="password"
          id="confirmPassword"
          label="Confirme a senha"
        />
      </div>
      <Button 
        title="Criar conta"
      />   
      <ButtonNavigate 
        title="Já tenho uma conta"
        onclick={handleBack}
      />

    </Container>
  )
}


