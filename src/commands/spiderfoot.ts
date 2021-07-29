import {GluegunCommand} from 'gluegun';

import { spiderfootURL } from '../../global.config.json'
import Instance from '../modules/instances';

const spiderfoot: GluegunCommand = {
  name: "spiderfoot",
  run: async toolbox => {
    const { parameters, http } = toolbox;

    const api = http.create({
      baseURL: spiderfootURL
    });

    const { scan } = parameters.options;

    if(scan){
      console.log("inicia o scan");
      const targets = await Instance.getInstances();
      console.log(targets);

      api.get('');
      
    }
  }
}

export default spiderfoot;