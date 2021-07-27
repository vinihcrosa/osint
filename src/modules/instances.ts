import getClient from '../database/elasticsearch';

import { Instance } from '../types'

export default {
  async getInstances() {
    const instances =  await getClient().search({
      index: 'instance',
      size: 1000
    })


    const aux_instances = await instances.hits.hits.map(instance => {
      const aux = {
        name: instance._source.name,
        target: instance._source.target,
        tags: instance._source.tags
      }
      return aux
    })

    return aux_instances;
  },

  async postInstance(instance: Instance) {
    console.log(instance)

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