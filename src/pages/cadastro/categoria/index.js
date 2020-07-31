import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormFild";


function Cadastrocategoria() {
  const valoresIniciais={
    nome:'',
    descricao:'',
    cor:''
  }
  const [categorias, setCategorianova] = useState([]);

  const [values, setValues] = useState(valoresIniciais);
function setValue(chave, valor) {
  // chave: nome, descricao, bla, bli
  setValues({
    ...values,
    [chave]: valor, // nome: 'valor'
  })
}
  function handleChange(infosDoEvento) {
    
    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:{values.nome}</h1>
      <form
        onSubmit={function handleSubmit(infosEnvneto) {
          infosEnvneto.preventDefault();
          setCategorianova([...categorias, values]);
          setValue();
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
          type="TextArea"
        />
        <FormField
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
          name="color"
          type="color"
        />

        <button>cadastras</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}> {categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir Para Home</Link>
    </PageDefault>
  );
}
export default Cadastrocategoria;
