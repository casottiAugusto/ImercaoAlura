import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home/App";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CadastroVideo from "./pages/cadastro/Videos";
import CadastroCategoria from "./pages/cadastro/categoria";
import erro from './pages/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={erro} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
