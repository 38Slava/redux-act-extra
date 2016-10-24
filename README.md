# redux-act-extra

Helpers for redux-act

## Installation

`npm i redux-act-extra --save`
or
`yarn add redux-act-extra`

## Usage

```javascript
import { createTypes, createActions } from 'redux-act-extra'
import { createReducer } from 'redux-act'

const Types = createTypes(`
  STARTUP
`)

export const startup = createActions(Types)

export default createReducer({
  [startup.request]: (state) => state,
  [startup.success]: (state, payload) => {
    return payload
  },
  [startup.failure]: (state, payload) => {
    return payload
  }
}, {})
```

If you have multi types just use this syntax:
```javascript
const Types = createTypes(`
  STARTUP
  LOGIN
`)

export const [startup, login] = createActions(Types)
```
## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
