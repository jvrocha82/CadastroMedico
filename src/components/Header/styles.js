
import styled from 'styled-components';
export const Container = styled.div`

width:100%;
height:90px;
background:#87cefa;
display :flex

`
export const Left = styled.div`
width:100%;

display:flex;
align-items: center;
padding-left: 20px;
img{
    width:70px;
    border-radius:90px;
}

`
export const Right = styled.div`
width:100%;
display:flex;
align-items: center;
color:white;
font-weight:900;
font-size:25px;
justify-content:flex-end;
margin-right:20px;

a, button {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
  

    &:hover{
      color: gray;
    } 
`
export const img = styled.div`
height:40px
`