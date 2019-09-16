import _ from 'lodash'
import sinon from 'sinon'
import winston from 'winston'
import { LogLevel, logger } from '../../index'

describe('logger', () => {
  it('should be silent', () =>
  expect(logger.level).to.equal(LogLevel.EMERG)
)

it('should use syslog levels', () =>
  expect(logger.levels).to.equals(winston.config.syslog.levels)
)

it('should show service', () => {
  const stub = sinon.stub(_.first(logger.transports), 'log')
  stub.returns(undefined)
  logger.log(LogLevel.EMERG, 'test', {})
  stub.restore()
  sinon.assert.calledWith(stub, {
    level: LogLevel.EMERG,
    message: 'test',
    service: 'log-config-test',
  })
})
})
