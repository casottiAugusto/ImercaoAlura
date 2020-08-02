import config from '../config';

const URL_CATEORIAS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEORIAS}?_embed=videos`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error('Não Foi Possivel pegar dasod :(');
  });
}
export default {

  getAllWithVideos,
};
