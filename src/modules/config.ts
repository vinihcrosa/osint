import * as fs from 'fs'
import * as path from 'path'

import * as config from '../../global.config.json';

const configPath = path.resolve(__dirname ,'../', '../', 'global.config.json');

const configs = ['elasticSearchURL', 'spiderfootURL']

const Config = {
  printConfig() {
    console.log('Configurações válidas')
    configs.forEach(configName => {
      config[configName]? console.log(configName, ' -> Configurado') : console.log(configName, ' -> Não configurado')
    })
  },

  async addConfig(configName: string, value: string){
    const index = configs.indexOf(configName);

    if(index < 0){
      console.log('Por favor digite o nome da configuração corretamente');
      this.printConfig();
      return
    }
    
    config[configName] = value;

    fs.writeFileSync(configPath, JSON.stringify(config));

    console.log("Configuração adicionada");

  }
}

export default Config;