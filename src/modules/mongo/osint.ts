import client from '../../database/mongoClient'

async function getInstances(){
  const db = client.db('osint');
    const collection = db.collection('instances');
    const instances = await collection.find().toArray()
    return instances
}

export {
  getInstances 
}
  