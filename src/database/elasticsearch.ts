import * as elasticsearch from 'elasticsearch';
import * as dotenv from 'dotenv';

import * as config from  '../../global.config.json';

dotenv.config();

function getClient() {
  if(!config['elasticSearchURL']){
    console.log('Por favor forneça as informações para se conectar com o elasticsearch')
    return new Error('Configurações inválidas');
  }

  console.log('não está no if de erro', config.elasticSearchURL)

  const client = new elasticsearch.Client(
  {
    host: config.elasticSearchURL,
    log: 'warning'
  })

  return client
}

export default getClient;