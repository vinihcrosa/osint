import * as elasticsearch from 'elasticsearch';
import * as dotenv from 'dotenv';

import Config from '../modules/config'

dotenv.config();

export default function getClient() {
  const { config, erro } = Config.getConfig("elasticSearchURL")

  if(erro) return
  return new elasticsearch.Client(
  {
    host: config,
    log: 'warning'
  })
}