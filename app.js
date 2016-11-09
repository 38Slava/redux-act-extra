import { createAction } from 'redux-act'
import {
  length,
  map,
  compose,
  without,
  split
} from 'ramda'

export function createActions (x) {
  const types = createTypes(x)
  if (length(types) === 1) return applyTypes(types)
  return map(applyTypes, types)
}

const createTypes = compose(without(' '), split(/\s/))

function applyTypes (x) {
  return {
    request: createAction(`${x}_REQUEST`),
    success: createAction(`${x}_SUCCESS`),
    failure: createAction(`${x}_FAILURE`)
  }
}

export default {
  createActions
}
