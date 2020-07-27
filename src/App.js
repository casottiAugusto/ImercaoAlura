import React from "react";
import Menu from './components/menu';
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain';





function App() {
  return (
    <div style={{ background: "#141414" }}>
      <div>
        <Menu />
      </div>
      <BannerMain>
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription=
        {
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      </BannerMain>
    </div>
  );
}

export default App;
