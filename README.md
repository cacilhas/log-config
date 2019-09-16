# Log Config

A simple preconfigured logger.

## Installation

```sh
npm i --save log-config
```

## Use

```typescript
import { LogLevel, logger } from 'log-config'

logger.log(LogLevel.INFO, 'simple log example', { /* some extra data */ })
```

The `logger` object is just a `winston.Logger`.

## Environment variables

- `LOG_LEVEL`: one of the `LogLevel` values
- `NODE_ENV`: the Node.JS environment (`test`, `production`, etc.)

## `LogLevel`

The `LogLevel` is an enumerator. The valid log level keys are:

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
