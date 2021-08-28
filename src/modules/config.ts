import * as fs from 'fs'
import * as path from 'path'

import * as config from '../../global.config.json';

const configPath = path.resolve(__dirname ,'../', '../', 'global.config.json');



const Config = {
  configs: [
    'elasticSearchURL', 
    'spiderfootURL',
    'spiderfootDB',
    'databaseDB',
    'databaseHOST',
    'databaseUSER',
    'databasePASS'
  ],
  printConfig() {
    console.log('Configurações válidas')
    this.configs.forEach(configName => {
      config[configName]? console.log(configName, ' -> Configurado') : console.log(configName, ' -> Não configurado')
    })
  },

  async addConfig(configName: string, value: string){
    const index = this.configs.indexOf(configName);

    if(index < 0){
      console.log('Por favor digite o nome da configuração corretamente');
      this.printConfig();
      return
    }
    
    config[configName] = value;

    fs.writeFileSync(configPath, JSON.stringify(config));

    console.log("Configuração adicionada");

  }, 

  getConfig(configName: string) {
    if(!config[configName]){
      console.log(`Por favor configure o ${configName}`)
      return {
        config: null,
        erro: true
      }
    } else{
      console.log("'Deu bom -> ", configName)
      return {
        config: config[configName],
        erro: false
      }
    }
  }
}

export default Config;