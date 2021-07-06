import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Atendimento = () => {
    return (
       <div>
           <Switch>
               <Route path="/admin/marcas" exact>
                    <List />
               </Route>
               <Route path="/admin/marcas/:marcaId">
                    <Form />
               </Route>
           </Switch>
       </div>
    );
}

export default Atendimento;