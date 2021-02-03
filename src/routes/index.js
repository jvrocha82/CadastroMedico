import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'

import Criar from '../views/Criar';
import Listar from '../views/Listar';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/Listar" exact component={Listar}/>
            <Route path="/Medico/:id" exact component={Criar}/>
            <Route path="/Medico" exact component={Criar}/>
        </Switch>
        </BrowserRouter>
    )
}