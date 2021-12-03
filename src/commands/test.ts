import { GluegunCommand } from 'gluegun'
import client from '../database/mongoClient'

const Test: GluegunCommand = {
  name: 'test',
  run: async toolbox => {
    const { parameters } = toolbox;
    const { mongo } = parameters.options;

    if(mongo){
      client.connect(async err => {
        const collection = await client.db("security").collections();
        // perform actions on the collection object
        console.log("Connected")
        if(err) console.error(err);
  
        collection.forEach(console.log)
        client.close();
      });
    }
    
  }
}

export default Test
