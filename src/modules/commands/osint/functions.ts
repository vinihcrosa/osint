import * as mongo from './mongo'
//import * as spiderfoot from './spiderfoot'


async function initScan(time, URL, args) {
  //1: Buscar as Instancesno Mongo
  const instances = await mongo.getInstances();
  instances.forEach(instance => {console.log(instance)});
  //2: Iterar sobre as Instances iniciando o Scan
}

async function addInstance(instance: mongo.Instance){
  const newInstance = await mongo.postInstance(instance);
  return newInstance;
}

export {initScan, addInstance}