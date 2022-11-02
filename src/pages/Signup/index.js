import React, { useState } from 'react'
import { Link, useNavigate} from "react-router-dom";

// components
import Input from "../../components/Input";
import Button from "../../components/Button"
import useAuth from "../../hooks/useAuth"

// styles
import * as S from "./styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {signup} = useAuth();
  
  const handleSignup = () => {
    // verifica se email e senha estão preenchido
    if(!email | !emailConf | !senha){
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os email não são iguais");
      return;
    }

    const res = signup(email,senha);

    if (res){
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/");
  };




  return (
    <S.Container>
      <S.Label> Sistema de Login </S.Label>
      <S.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
          <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
         <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <S.labelError>{error}</S.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <S.LabelSignin>
          Já tem uma conta?
          <S.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </S.Strong>
        </S.LabelSignin>
      </S.Content>
    </S.Container>
  );
};

export default Signup;