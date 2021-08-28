import { GluegunCommand } from 'gluegun'

const Sync: GluegunCommand = {
  name: 'sync', 
  run: async toolbox => { 
    const { paramenters } = toolbox

    const { path, p } = paramenters.options
    console.log(path, p)
  }
}

export default Sync