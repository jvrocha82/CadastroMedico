
import React from 'react';
import * as S from './styles'

import editar from '../../assets/editar.png'
import excluir from '../../assets/excluir.png'
import { Link } from 'react-router-dom'
import api from '../../services/api';
async function Deletar(id) {
  await api.delete(`/${id}`)
      .then(response => {
    console.log('Excluido')
      })
      .catch(error => {
          console.log(error)
      })
}

function Header( {nome, especialidade,id}) {
  return (
    <S.Container >
      <S.Left>

        <label>{nome}</label> <label>{especialidade}</label>

      </S.Left>
      <S.Right>
        <Link to={`/Medico/${id}`}><img src={editar} alt="editar"></img> </Link>  
        | 
         <Link onClick={() => Deletar(id)}> <img src={excluir} alt="excluir"></img></Link>
      </S.Right>
    </S.Container>
  )
}

export default Header;
