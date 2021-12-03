import client from '../../../database/mongoClient';

function testMongo(){
  client.connect(async err => {
    const collection = await client.db("security").collections();
    // perform actions on the collection object
    console.log("Connected")
    if(err) console.error(err);

    collection.forEach(console.log)
    client.close();
  });
}

export { testMongo }