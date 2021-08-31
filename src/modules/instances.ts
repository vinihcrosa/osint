import getClient from '../database/elasticsearch';
 
import { Instance } from '../types'

export default {
  async getInstances() {
    try{
    
      const instances =  await getClient().search({
        index: 'instance',
        size: 1000
      })

      console.log('entrou aqui')

      return await instances.hits.hits.map(instance => {
        return {
          name: instance._source.name,
          target: instance._source.target,
          tags: instance._source.tags
        }
    })
    //TODO: Loghs de info
  }catch(err){
    //TODO: logs de erro
    console.log(err) 
  }
    
  },

  async postInstance(instance: Instance) {
    console.log(instance)

    if(!instance.name || !instance.target || !instance.tags){
      return {
        status: "Argumentos faltando"
      }
    }

    const has_instance_response =  await getClient().search({
      index: 'instance',
      body: {
        query: {
          match: {
            "target.keyword": instance.target
          }
        }
      }
    });

    if(has_instance_response.hits.hits.length > 0)
      return { 
        status: "target ja existente"
      }

    console.log(instance)

    await getClient().index({
      index: "instance",
      type: "type_instance",
      body: instance
    })

    return { 
      status: "target criado"
    }
  }
}