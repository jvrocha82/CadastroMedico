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


flex-direction:column;
width:100%;
height:900px;

display :flex;


`
export const Form = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
span{

    font-size:20px;
    margin:10px 0 30px 20px;
    font-weight:600;
}
`
export const FormLine = styled.div`
display:flex;
flex-direction:row;
width:100%;
margin-bottom:30px;

`
export const FormItem = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
label{
font-size:17px;
    
}
input{
    height:35px;
    width:87.5%;
    font-size:15px;
    margin:0 10px 0 10px;
}
select{
    height:35px;
    width:87.5%;
    font-size:15px;
    margin:0 10px 0 10px;
}

`
export const FormGrup = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
label{
    font-size:17px;
    
}
input{
    height:35px;
    width:75%;
    font-size:15px;
    margin:0 10px 0 10px;
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
export const Buttons = styled.div`

width:70%;
display:flex;
justify-content:space-around;
margin:70px 15% 0 15%;

`