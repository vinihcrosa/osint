import {GluegunCommand} from 'gluegun';
import * as querystring from 'querystring';
import * as dotenv from 'dotenv';

dotenv.config()

import Instance from '../modules/instances';

import {asyncForEach, waitFor} from '../modules/functions'

const spiderfoot: GluegunCommand = {
  name: "spiderfoot",
  run: async toolbox => {
    const { parameters } = toolbox;

    const { scan } = parameters.options;

    if(scan){
      console.log("inicia o scan");
      const targets = await Instance.getInstances();

      asyncForEach(targets, async target => {
        //console.log(target)

        const data = {
          "scanname": target.name,
          "scantarget": target.target,
          "usecase": "all",
          "modulelist": "",
          "typelist": "" 
        }

        console.log(data)

        await api.post('/startscan', querystring.stringify(data))
        .then(response => {
          console.log("scan iniciado", response.status)
        }, error => {
          console.error(error.message)
        })

        await waitFor(1000 * 60 * 1);
      })
    }
  }
}

export default spiderfoot;