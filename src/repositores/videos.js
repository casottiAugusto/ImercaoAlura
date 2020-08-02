import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetovideo) {
  return fetch(`${URL_VIDEOS}?embed_videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body:
    JSON.stringify(objetovideo),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error('Não Foi Possivelcadastrar dados :(');
  });
}
export default {

  create,
};
