import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Categoria = () => {
    return (
       <div>
           <Switch>
               <Route path="/admin/categorias" exact>
                    <List />
               </Route>
               <Route path="/admin/categorias/:categoriaId">
                    <Form />
               </Route>
           </Switch>
       </div>
    );
}

export default Categoria;