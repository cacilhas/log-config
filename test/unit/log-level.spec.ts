import _ from 'lodash'
import winston from 'winston'
import { LogLevel } from '../../index'

describe('LogLevel', () => {
  const { levels } = winston.config.syslog

  it('should reflect Syslog config set levels', () => {
    const expected =
      Object.keys(levels)
        .map(key => ({ [key.toUpperCase()]: key }))
        .reduce(_.merge)
    expected.WARN = expected.WARNING // WARNING alias
    expected.CRITICAL = expected.CRIT // CRIT alias
    expect(LogLevel).to.deep.equal(expected)
  })
})
