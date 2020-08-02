import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useFrom';

function Cadastrocategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const { handleChange, values, cleaForm } = useForm(valoresIniciais);
  const [categorias, setCategorianova] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://dev-samuraflixbackend.herokuapp.com/categorias';
    fetch(URL).then(async (respostaDoServidor) => {
      const respota = await respostaDoServidor.json();
      setCategorianova([...respota,
      ]);
    });
  }, []);
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form
        onSubmit={function handleSubmit(infosEnvneto) {
          infosEnvneto.preventDefault();
          setCategorianova([...categorias, values]);
          cleaForm();
        }}
      >
        <FormField
          label="Nome da categoria:"
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
        />
        <FormField
          label="Descrição:"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
        />
        <FormField
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
          name="color"
          type="color"
        />
        <Button>
          cadastras
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {' '}
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">Ir Para Home</Link>
    </PageDefault>
  );
}
export default Cadastrocategoria;
