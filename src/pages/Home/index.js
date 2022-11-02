import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

// components
import * as S from "./styles";

const Home = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>Home</S.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >
        Sair
      </Button>
    </S.Container>
  );
};

export default Home;