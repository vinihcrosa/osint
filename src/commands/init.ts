import {GluegunCommand} from 'gluegun';
import * as fs from "fs";
import * as readline from 'readline-sync';
import * as path from "path";

import Config from '../modules/config'

const configPath = path.resolve(__dirname, '../', '../', 'global.config.json')

const Init: GluegunCommand = {
  name: 'init',
  run: async toolbox => {
    const configs = {}

    Config.configs.forEach(configName => {
      const { config, erro } = Config.getConfig(configName)
      if(erro){
        const newConfig = readline
          .question(`Qual o valor da configuração -> ${configName} = `)
        //console.table({newConfig, config})

        configs[configName] = newConfig

      }else { 
        configs[configName] = config
      }
    })

    console.table(configs)

    fs.writeFileSync(configPath, JSON.stringify(configs));
  }
}

export default Init;