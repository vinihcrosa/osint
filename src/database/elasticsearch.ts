import * as elasticsearch from 'elasticsearch';
import * as dotenv from 'dotenv';

dotenv.config();

function getClient() {
  const client = new elasticsearch.Client(
    {
      host: "https://vpc-security-q72dloacmrzr3hnaeet6shpyuq.us-east-2.es.amazonaws.com/",
      log: 'warning'
    }
  )
  return client
}

export default getClient;