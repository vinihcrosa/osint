import { GluegunCommand } from 'gluegun'

function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

const Test: GluegunCommand = {
  name: 'test',
  run: async toolbox => {
    const barLength = 20

    for (let i = 0; i <= barLength; i++) {
      const dots = ".".repeat(i)
      const left = barLength - i
      const empty = " ".repeat(left)

      process.stdout.clearLine(1)
      process.stdout.write(`\r[${dots}${empty}] ${i * 100/barLength}%`)

      await wait(1000)
    }
  }
}

export default Test
