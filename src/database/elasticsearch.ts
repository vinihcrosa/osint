import * as elasticsearch from 'elasticsearch';
import * as dotenv from 'dotenv';

dotenv.config()

dotenv.config();

export default function getClient() {
  return new elasticsearch.Client(
  {
    host: process.env.ELASTICSEARCH_URL || 'localhost:9200',
    log: 'warning'
  })
}