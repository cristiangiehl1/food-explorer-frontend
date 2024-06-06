import { BsFillHexagonFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
import { FaPersonHalfDress } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Header } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonNavigate } from "../../components/ButtonNavigate";
import { UserMesssage } from "../../components/UserMessage";

import { api } from "../../services/api"


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [bgColor, setBgColor] = useState("");

  const navigate = useNavigate();


  async function handleSignUp() {
    if(!name || !email || !password || !passwordConfirm) {
      setUserMessage("Por favor, preencha todos os campos de cadastro.")
        
      setTimeout(() => {
        setUserMessage("");
        
      }, 2000);

      return;
    }  

    await api.post("/users", {
      name, 
      email,
      password,
      passwordConfirm
    })
    .then(() => {
      setUserMessage("Usuário cadastrado com sucesso!")
      setBgColor("TINTS_CAKE_200")

      setTimeout(() => {
        setUserMessage("");
        setBgColor("")

        navigate(-1)
        
      }, 1000);    

    })
    .catch(error => {
      if(error.response) {
        setUserMessage(error.response.data.message);

        setTimeout(() => {
          setUserMessage("");
          
        }, 2000);

      } else {
        setUserMessage("Não foi possível cadastrar.");

        setTimeout(() => {
          setUserMessage("");
          
        }, 2000);
      }
    });  
  }

  function handleCloseMessage() {
    setUserMessage("")
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>

      <UserMesssage 
        background ={bgColor}
        message={userMessage} 
        isMessage={!!userMessage}
        onClose={handleCloseMessage}

      />
      <Header>        
        <BsFillHexagonFill size={40}/>
        <h1>food explorer</h1>
      </Header>
      <main>
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
          <Input
            icon={FaPersonHalfDress}
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id="name"
            label="Seu nome"
            onChange={event => setName(event.target.value)}
          />
          <Input
            icon={CiMail}
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            id="email"
            label="Email"
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <Input
            icon={IoLockClosed}
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="password"
            label="Senha"
            onChange={event => setPassword(event.target.value)}
          />
          <Input
            icon={IoLockClosed}
            placeholder="Mesma senha da anterior"
            type="password"
            id="confirmPassword"
            label="Confirme a senha"
            onChange={event => setPasswordConfirm(event.target.value)}
          />
        </div>
        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />
        <ButtonNavigate
          title="Já tenho uma conta"
          onClick={handleBack}
        />
      </main>

    </Container>
  )
}


