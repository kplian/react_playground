import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Funcionario = lazy(() => import('./lazy_suspense/Funcionario'));
const Organigrama = lazy(() => import('./lazy_suspense/Organigrama'));
const Localizacion = lazy(() => import('./lazy_suspense/Localizacion'));
const Oficina = lazy(() => import('./lazy_suspense/Oficina'));

const Home = () => (
    <div>
        <p>This is home</p>
    </div>
);

const Menu = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/funcionarios">Funcionarios</Link>
        </li>
        <li>
            <Link to="/organigrama">Organigrama</Link>
        </li>
        <li>
            <Link to="/localizacion">Localizacion</Link>
        </li>
        <li>
            <Link to="/oficinas">Oficinas</Link>
        </li>
    </ul>
);

const TestApp = () => (
    <Router>
        <Menu/>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/funcionarios" component={Funcionario}/>
                <Route path="/organigrama" component={Organigrama}/>
                <Route path="/localizacion" component={Localizacion}/>
                <Route path="/oficinas" component={Oficina}/>
            </Switch>
        </Suspense>        
    </Router>
);

export default TestApp