import React, { useState, useEffect } from 'react';

import * as S from './styles';


import Button from '@material-ui/core/Button';

//Componentes
import Header from '../../components/Header'

import cep from 'cep-promise'
import api from '../../services/api';

function Home({ match }) {
    //Estados
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [telefoneCelular, setCelular] = useState();
    const [telefoneFixo, setFixo] = useState();
    const [CEP, setCep] = useState();
    const [endereco, setEndereco] = useState();
    const [numero, setNumero] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [CRM, setCrm] = useState();
    const [Especialidade, setEspecialidade] = useState();
    const [valoresCarregados, setValores] = useState(false);
    const [medicoExistente, setExistente] = useState(false)


    async function CarregarMedico() {
        if(match.params.id){
        await api.get(`/${match.params.id}`)
          .then(response => { let medico = response.data
  
            setNome(medico.nome)
            setCelular(medico.telefoneCelular)
            setFixo(medico.telefoneFixo)
            setCep(medico.telefoneCelular)
            setEndereco(medico.endereco)
            setNumero(medico.numero)
            setCidade(medico.cidade)
            setEstado(medico.estado)
            setCrm(medico.CRM)
            setEspecialidade(medico.Especialidade)
            setValores(true)
            setExistente(true)
          
          })
        }
         
        
        
      }
    function apagar() {
        setNome('')
        setCelular('')
        setFixo('')
        setCep('')
        setEndereco('')
        setNumero('')
        setCidade('')
        setEstado('')
        setCrm('')
        setEspecialidade('')
    }
    async function salvar(){
        if(medicoExistente == false){
        await api.post('/',{
            nome,
            CRM,
            telefoneFixo,
            telefoneCelular,
            CEP,
            endereco,
            numero,
            cidade,
            estado,
            Especialidade
            
        }).then(() =>
        alert('MÉDICO CADASTRADO COM SUCESSO'));
    } else{
        await api.put((`/${match.params.id}`),{
            nome,
            CRM,
            telefoneFixo,
            telefoneCelular,
            CEP,
            endereco,
            numero,
            cidade,
            estado,
            Especialidade
            
        }).then(() =>
        alert('MÉDICO EDITADO COM SUCESSO'))
    }
}
    async function calculaCEP(CEP) {

        cep(CEP)
            .then((value) => {
                setCidade(value.city)
                setEstado(value.state)
                setCidade(value.city)
                setEndereco(value.street)
            })
    }

    

    useEffect(() => {
        if(!valoresCarregados)
        CarregarMedico();
    
      }, [ CarregarMedico])
    return (
        <S.Container>
            <Header />

            <S.ContainerLista>
                <S.Header>
                    Cadastro Médico
            </S.Header>
                <S.List>

                    <S.Form>
                        <span>Dados pessoais</span>
                        <S.FormLine>

                            <S.FormItem>

                                <label>Nome</label>
                                <input maxLength='120' type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do médico..." />
                            </S.FormItem>


                        </S.FormLine>

                        <S.FormLine>
                            <S.FormGrup>
                                <label>Celular</label>
                                <input type="text" value={telefoneCelular} maxLength='14' onChange={e => setCelular(e.target.value)} placeholder="Numero de celular" />
                            </S.FormGrup>

                            <S.FormGrup>
                                <label>Telefone fixo</label>
                                <input type="text" value={telefoneFixo} maxLength='14' onChange={e => setFixo(e.target.value)} placeholder="Telefone fixo" />
                            </S.FormGrup>
                        </S.FormLine>

                        <S.FormLine>
                            <S.FormGrup>
                                <label>CEP</label>
                                <input type="text" value={CEP} onChange={e => setCep(e.target.value)} onBlur={() => calculaCEP(CEP)} placeholder="CEP" />
                            </S.FormGrup>

                            <S.FormGrup></S.FormGrup>

                        </S.FormLine>

                        <S.FormLine>

                            <S.FormGrup>
                                <label>Endereço</label>
                                <input value={endereco} onChange={e => setEndereco(e.target.value)} type="text" placeholder="Estado" />
                            </S.FormGrup>

                            <S.FormGrup>
                                <label>Número</label>
                                <input type="text" value={numero} onChange={e => setNumero(e.target.value)} placeholder="Número" />
                            </S.FormGrup>
                        </S.FormLine>

                        <S.FormLine>
                            <S.FormGrup>
                                <label>Cidade</label>
                                <input value={cidade} onChange={e => setCidade(e.target.value)} type="text" placeholder="Cidade" />
                            </S.FormGrup>
                            <S.FormGrup>
                                <label>Estado</label>
                                <input value={estado} onChange={e => setEstado(e.target.value)} type="text" placeholder="Estado" />
                            </S.FormGrup>

                        </S.FormLine>

                        <span>Dados profissionais</span>

                        <S.FormGrup>
                            <S.FormItem>
                                <label>CRM</label>
                                <input value={CRM} onChange={e => setCrm(e.target.value)} type="string" maxLength='9' placeholder="CRM" />
                            </S.FormItem>

                            <S.FormItem>
                                <label>Especialidade</label>
                                <select onChange={e => setEspecialidade(e.target.value)} value={Especialidade}>
                                    <option selected ></option>
                                    <option value="ALERGOLOGIA">ALERGOLOGIA</option>
                                    <option value="ANGIOLOGIA">ANGIOLOGIA</option>
                                    <option value="BUCO MAXILO">BUCO MAXILO</option>
                                    <option value="CARDIOLOGIA CLINICA">CARDIOLOGIA CLÍNICA</option>
                                    <option value="CARDIOLOGIA INFANTIL">CARDIOLOGIA INFANTIL</option>
                                    <option value="CIRURGIA CABECA E PESCOCO">CIRURGIA CABEÇA E PESCOÇO</option>
                                    <option value="CIRURGIA CARDIACA">CIRURGIA CARDÍACA</option>
                                    <option value="CIRURGIA DE TORAX">CIRURGIA DE TÓRAX</option>
                                </select>
                            </S.FormItem>
                        </S.FormGrup>

                    </S.Form>
                    <S.Buttons>
                        <Button variant="contained" onClick={salvar} color="primary" href="#contained-buttons">
                            Salvar
                            </Button>
                        <Button onClick={() => apagar()} variant="contained" color="secondary">
                            Cancelar
                                </Button>
                    </S.Buttons>

                </S.List>
            </S.ContainerLista>
        </S.Container>
    )
}

export default Home;
