
import React from 'react';
import * as S from './styles'
import logo from '../../assets/medico.png'
import {Link} from 'react-router-dom'
function Header() {
  return(
    <S.Container>
      <S.Left>
<img src={logo} alt="logo"></img>
      </S.Left>
      <S.Right>
<Link to="/Listar">Listar </Link>  |  <Link to="/Medico"> Criar</Link> 
     </S.Right>
    </S.Container>
  )
  }
  
  export default Header;
  