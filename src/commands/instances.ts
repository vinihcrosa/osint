import {GluegunCommand} from 'gluegun';

import Instances from '../modules/instances';

const getInstances: GluegunCommand = {
  name: "instances",
  run: async toolbox => {
    const { parameters} = toolbox;

    const { get } = parameters.options;

    if(get){
      const instances = await Instances.getInstances()
      console.log(instances);
    }
  }
}

module.exports = getInstances;