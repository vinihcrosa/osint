import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URL || 'mongodb://localhost:27017/';
const client = new MongoClient(uri);


export default client;