import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDafault from '../../../components/PageDefault';
import useForm from '../../../hooks/useFrom';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import videosReposiroey from '../../../repositores/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  return (
    <PageDafault>
      <h1> Cadastro de Videos </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('');
        videosReposiroey.create({
          titulo: values.titulo,
          url: values.url,
          categoria: 1,
        }).then(() => {
          console.log('Video cadastrado');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Titulo do video:"
          value={values.titulo}
          onChange={handleChange}
          name="titulo"

        />
        <FormField
          label="Url do viedo:"
          value={values.url}
          onChange={handleChange}
          name="url"

        />
        <FormField
          label="Categorias:"
          value={values.categoria}
          onChange={handleChange}
          name="categori"

        />
        <Button type="submit">
          cadastras
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>
    </PageDafault>
  );
}

export default CadastroVideo;
