
import styled from 'styled-components';
export const Container = styled.div`

width:96%;
height:60px;
background:white;
display :flex;
margin:20px 0 20px 0;
margin:2% 2% 0 2%;

`
export const Left = styled.div`
width:100%;

display:flex;
align-items: center;
padding-left: 20px;
justify-content:space-between;
img{
    width:70px;
    border-radius:90px;
}
label{
    font-size:20px;
    font-weight:600;
}

`
export const Right = styled.div`
width:100%;
display:flex;
align-items: center;
color:black;
font-weight:900;
font-size:30px;
justify-content:flex-end;
margin-right:20px;
img{
    margin-top:12px;
    width:30px;
    border-radius:90px;
}
a, button {
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
  

    &:hover{
      color: blue;
    } 
    
`
export const img = styled.div`
height:40px
`