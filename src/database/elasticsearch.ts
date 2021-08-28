import * as elasticsearch from 'elasticsearch';
import * as dotenv from 'dotenv';

import Config from '../modules/config'

dotenv.config();

function getClient() {
  const { config, erro } = Config.getConfig("elasticSearchURL")

  if(erro) return
  const client = new elasticsearch.Client(
  {
    host: config,
    log: 'warning'
  })

  return client
}

export default getClient;