import client from '../../../database/mongoClient'

interface Instance {
  name: string,
  email: string,
  tags: Array<string>,
}

function getInstances(): Promise<Array<any>> {
  return new Promise((resolve, reject) => {
    client.connect(async error => {
      client.db('security').collection('osint_instances').find({}).toArray((err, instances) => {
        if(err){
          reject(err)
        }else{
          client.close()
          resolve(instances)
        }
      })
    })  
  })
}

function postInstance(instance: Instance): Promise<any> {
  return new Promise((resolve, reject) => {
    client.connect(async error => {
      client.db('security').collection('osint_instances').insertOne(instance, (err, result) => {
        if(err){
          reject(err)
        }else{
          client.close()
          resolve(result)
        }
      })
    })
  })
}
export {getInstances, postInstance, Instance}