# redux-act-extra

Helpers for redux-act

## Installation

`npm i 38Slava/redux-act-extra --save`
or
`yarn add 38Slava/redux-act-extra`

## Usage

```javascript
import { createActions } from 'redux-act-extra'
import { createReducer } from 'redux-act'

export const startp = createActions(`
  STARTUP
`)

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

export const [ startup, login ] = createActions(`
  STARTUP
  LOGIN
`)
```
## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
