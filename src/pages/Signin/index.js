import React, { useState } from 'react'
import { Link, useNavigate} from "react-router-dom";

// components
import Input from "../../components/Input";
import Button from "../../components/Button"
import useAuth from "../../hooks/useAuth"

// styles
import * as S from "./styles";

const Signin = () => {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // verifica se email e senha estão preenchido
    if(!email | !senha){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email,senha);

    if (res){
      setError(res);
      return;
    }

    navigate("/home");
  };


  return (
    <S.Container>
      <S.Label> Sistema de Login </S.Label>
      <S.Content>
        <Input
          type="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          placeholder="Digite seu E-mail"
        />
          <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <S.labelError>{error}</S.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <S.LabelSignup>
          Não tem um conta?
          <S.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </S.Strong>
        </S.LabelSignup>
      </S.Content>  
    </S.Container>
  );
};

export default Signin;