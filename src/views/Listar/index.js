import React, { useEffect, useState } from 'react'

import * as S from './styles';
import api from '../../services/api';
//Componentes
import Header from '../../components/Header'
import ItemLista from '../../components/itemLista'

function Home() {
    const [Values, setValues] = useState([])
    const [Campo, setCampo] = useState([])
    async function loadValues() {
        await api.get('/')
            .then(response => {
                setValues(response.data)
            })
    }
    useEffect(() => {
        loadValues();
    })
   
    

    return (
        <S.Container>
            <Header />
            <S.Filtros>

                <S.FormItem>
                    <select onChange={e => setCampo(e.target.value)} value={Campo}>
                    <option selected ></option>
                        <option value="nome">Nome</option>
                        <option value="CRM">CRM</option>
                        <option value="fixo">Telefone Fixo</option>
                        <option value="CEP">Cep</option>
                        <option value="endereco">Endereço</option>
                        <option value="especialidade">Especialidade Médica</option>
                    </select>
                    <input type="text"  placeholder="Valor a ser pesquisado..." />
                    <button>Pesquisar</button>
                </S.FormItem>

            </S.Filtros>
            <S.ContainerLista>
                <S.Header>
                    Pesquisar Médico
            </S.Header>
                <S.List>
                        {Values.map(t => (
                    <ItemLista nome={t.nome} especialidade={t.Especialidade} id={t.id} />
                    ))}

                </S.List>
            </S.ContainerLista>
        </S.Container>
    )
}

export default Home;
