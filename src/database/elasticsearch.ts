import * as elasticsearch from 'elasticsearch';
import * as dotenv from 'dotenv';

import * as config from  '../../global.config.json';

dotenv.config();

function getClient() {
  if(!config['elasticsearchURL']){
    console.log('Por favor forneça as informações para se conectar com o elasticsearch')
    return new Error('Configurações inválidas');
  }

  const client = new elasticsearch.Client(
    {
      host: "https://vpc-security-q72dloacmrzr3hnaeet6shpyuq.us-east-2.es.amazonaws.com/",
      log: 'warning'
    }
  )
  return client
}

export default getClient;