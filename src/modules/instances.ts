import getClient from '../database/elasticsearch';

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
  }
}