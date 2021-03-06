import {GluegunCommand} from 'gluegun';
import * as querystring from 'querystring';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config()

import Instance from '../modules/instances';

import logger from '../logger'

import {asyncForEach, waitFor} from '../modules/functions'

const spiderfoot: GluegunCommand = {
  name: "spiderfoot",
  run: async toolbox => {
    const { parameters } = toolbox;

    const { scan, U, URL, t, time } = parameters.options;

    let spiderfootURL
    if(U || URL) spiderfootURL = U? U : URL
    else spiderfootURL = process.env.SPIDERFOOT_URL

    const api = axios.create({
      baseURL: spiderfootURL
    })

    let minutes
    if(t || time) minutes = t?t:time
    else minutes = 5

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
          if(response.status === 200)
            logger.info('Iniciou o scan do target: ' + data.scantarget)
          else logger.debug('Não iniciou o scan, response: ' + JSON.stringify(response))
        }, error => {
          logger.warn('Não iniciou o scan do target: ' + data.scantarget)
          console.error(error.message)
        })

        await waitFor(1000 * 60 * minutes);
      })
    }
  }
}

export default spiderfoot;