import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Pecas = () => {
    return (
       <div>
           <Switch>
               <Route path="/admin/pecas" exact>
                    <List />
               </Route>
               <Route path="/admin/pecas/:pecaId">
                    <Form />
               </Route>
           </Switch>
       </div>
    );
}

export default Pecas;