import { GluegunCommand } from 'gluegun'
import * as path from 'path'
import { Database } from 'sqlite3'
import * as dotenv from 'dotenv'

dotenv.config()

import { asyncForEach } from '../modules/functions'
import logger from '../logger'
import getClient from '../database/elasticsearch'

const databasePath = path.join(__dirname, '..', '..', '..', 'spiderfoot', 'spiderfoot.db')
const database = new Database(process.env.SPIDERFOOT_DB || databasePath);
const sql = "SELECT * FROM tbl_scan_instance AS I JOIN tbl_scan_results AS R ON R.scan_instance_id=I.guid JOIN tbl_event_types AS T ON R.type=T.event"

const Sync: GluegunCommand = {
  name: 'sync', 
  run: async toolbox => { 
    database.all(sql, (err, rows) => {
      const total = rows.length
      const barLength = 25

      asyncForEach(rows, async (row, index) => {
        const porcent = (index/total) * 100

        const dots = ".".repeat( porcent / 4)
        const left = barLength - (porcent / 4)
        const empty = " ".repeat(left)

      process.stdout.clearLine(1)
      process.stdout.write(`\r[${dots}${empty}] ${porcent.toFixed(2)}%   ${index} of ${total}`)

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

        if(result._shards.successful == 1)logger.info(result)
        else logger.warn(result)
      })
    })

  }
}

export default Sync