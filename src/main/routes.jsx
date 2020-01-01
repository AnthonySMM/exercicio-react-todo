import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About}/>
        <Redirect from ='*' to = '/todos' />
        </Router>

    )
    // tem outras estrategias de rotas
    //rotas por browser 
    // redirect, caso mude a url ele direciona para a /todos