import {GluegunCommand} from 'gluegun';

const getInstances: GluegunCommand = {
  name: "instances",
  run: async toolbox => {
    const { print, parameters} = toolbox;

    const {} = toolbox.options

    print.success(`Deu bom até aqui`);

    console.log(parameters)
  }
}

module.exports = getInstances;