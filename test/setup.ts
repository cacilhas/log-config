/// <reference types='./typings' />
process.env.NODE_ENV = 'test'
process.env.APP_NAME = 'log-config-test'

import { expect } from 'chai'
global.expect = expect
