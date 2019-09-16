# Log Config

A simple preconfigured logger.

## Installation

```sh
npm i --save log-config
```

## Use

```typescript
import { LogLevel, logger } from 'log-config'

log.log(LogLevel.INFO, 'simple log example')
```

## Environment variables

- `LOG_LEVEL`: one of the `LogLevel` values
- `NODE_ENV`: the Node.JS environment (`test`, `production`, etc.)

## `LogLevel`

The valid log levels are:

- `ALERT`
- `CRIT` or `CRITICAL`
- `ERROR`
- `WARN` or `WARNING`
- `NOTICE`
- `INFO`
- `DEBUG`

**Do not** use `EMERG`, it’s just for internal use.

## License

[The 3-Clause BSD License](https://opensource.org/licenses/BSD-3-Clause)
