import {GluegunCommand} from 'gluegun';

import Config from '../modules/config';

const config: GluegunCommand = {
  name: "config",
  run: async toolbox => {
    
    const { parameters } = toolbox;

    const { print, add } = parameters.options;

    if(print){
      Config.printConfig();
    }else if(add) {
      if (parameters.first){
        Config.addConfig(add, parameters.first);
      } else {
        toolbox.print.error('Parâmetros faltando, por favor coloque primeiro o nome da configuração e em seguida seu valor');
      }
    }else {
      console.log('Por favor digite a opção desejada')
    }
    
  }
}

export default config;