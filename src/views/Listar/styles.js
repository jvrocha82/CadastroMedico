import styled from 'styled-components';
export const Container = styled.div`
font-family: sans-serif;
`
export const ContainerLista = styled.div`
display :flex;
flex-direction:column;
padding: 0 250px 0 250px;

`
export const List = styled.div`

background:#F8F8F8;
flex-direction:column;
width:100%;
height:500px;

display :flex;


`
export const Filtros = styled.div`
margin-top:20px;
display:flex;
justify-content:flex-end;
`
export const FormItem = styled.div`

display:flex;
flex-direction:row;
align-items:center;
padding: 0 260px 0 260px;
label{
    font-size:25px;
}
input{
    height:35px;
    width:500px;
    font-size:20px;
    margin:0 10px 0 10px;
}
select{
    width:160px;
    height:40px;
}
`




export const Header = styled.div`
margin-top:20px;
height:50px;
font-size:30px;

font-weight:700;
display:flex;
align-items:center;
justify-content:center;
margin-right:60px
width:100%;


`