import { GluegunCommand } from 'gluegun'

const osint: GluegunCommand = {
  name: 'osint',
  run: async toolbox => {
    const { parameters } = toolbox;

    const { init, URL, time } = parameters.options
  
    if (init) {
      console.log(`URL => ${URL} - time => ${time}`)
    }
  }
}

module.exports = osint
