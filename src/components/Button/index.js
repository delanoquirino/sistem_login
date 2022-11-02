import React from 'react'

import * as S from "./styles"

function Button({Text, onClick, Type = "button"}) {
  return (
    <S.Button type={Type} onClick={onClick}>
      {Text}
    </S.Button>
  )
}

export default Button;
