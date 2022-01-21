import { GluegunCommand } from 'gluegun'
import * as functions from '../modules/commands/osint/functions'


const osint: GluegunCommand = {
  name: 'osint',
  run: async toolbox => {
    const { parameters } = toolbox;

    const { 
      init, URL, time, 
      add,
      ...args 
    } = parameters.options
  
    if (init) {
      functions.initScan(time, URL, args)
    } else if (add) {
      console.log("adiciona")
    }
  }
}

module.exports = osint
