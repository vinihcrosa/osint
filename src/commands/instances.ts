import {GluegunCommand} from 'gluegun';
import * as readline from 'readline-sync';

import Instances from '../modules/instances';

import {Instance} from '../types'

function askForTags(): string[] {
  console.log("Digite as tags separadamente, quando terminar, digite 'break'")
  const tags =  [];
  let _continue = true;
  do{
    const tag = readline.question("Tag -> ");
    if(tag === "break") _continue = false;
    else tags.push(tag);
  }while(_continue)
  return tags
}

const instances: GluegunCommand = {
  name: "instances",
  run: async toolbox => {
    const { parameters} = toolbox;

    const { get, post } = parameters.options;

    if(get){
      const instances = await Instances.getInstances()
      console.log(instances);
    } else if(post){
      console.log("Insira os valores da Instance que quer criar")

      const instance: Instance = {
        name: readline.question("Name ->"),
        target: readline.question("Target ->"),
        tags: askForTags()
      };

     Instances.postInstance(instance);      
    }
  }
}

module.exports = instances;