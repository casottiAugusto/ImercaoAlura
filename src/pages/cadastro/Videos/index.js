import React from 'react';
import { Link } from 'react-router-dom';
import PageDafault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDafault>
      <h1> Cadastro de Videos </h1>
      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>
    </PageDafault>
  );
}

export default CadastroVideo;
