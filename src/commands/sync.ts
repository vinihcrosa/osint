import { GluegunCommand } from 'gluegun'
import * as path from 'path'
import { Database } from 'sqlite3'

import logger from '../logger'
import getClient from '../database/elasticsearch'

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

const databasePath = path.join(__dirname, '..', '..', '..', 'spiderfoot', 'spiderfoot.db')
const database = new Database(databasePath);
const sql = "SELECT * FROM tbl_scan_instance AS I JOIN tbl_scan_results AS R ON R.scan_instance_id=I.guid JOIN tbl_event_types AS T ON R.type=T.event"



const Sync: GluegunCommand = {
  name: 'sync', 
  run: async toolbox => { 
    database.all(sql, (err, rows) => {
      asyncForEach(rows, async row => {
        await waitFor(1000)

        const body = {
          name: row.name,
          seed_target: row.seed_target,
          created: row.created,
          started: row.started,
          ended: row.ended,
          status: row.status,
          type: row.type,
          generated: row.generated,
          confidence: row.confidence,
          visibility: row.visibility,
          risk: row.risk,
          module: row.module,
          data: row.data,
          false_positive: row.false_positive,
          event: row.event,
          event_descr: row.event_descr,
          event_raw: row.event_raw,
          event_type: row.event_type
        }

        const result = await getClient().index({
          index: 'spiderfoot',
          type: '_doc',
          body: body
        })

        if(result._shards.successful == 1 )  logger.info(result)
        else logger.warn(result)
      })
    })

  }
}

export default Sync