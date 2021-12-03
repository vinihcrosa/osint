import { GluegunCommand } from 'gluegun'
import { testMongo } from '../modules/commands/test/mongo';

const Test: GluegunCommand = {
  name: 'test',
  run: async toolbox => {
    const { parameters } = toolbox;
    const { mongo } = parameters.options;

    if(mongo){
      testMongo();
    }
    
  }
}

export default Test
