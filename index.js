import { createAction } from 'redux-act'
import {
  length,
  map,
  compose,
  without,
  split
} from 'ramda'

export function createActions (x) {
  if (length(x) === 1) return applyTypes(x)
  return map(applyTypes, x)
}

export const createTypes = compose(without(' '), split(/\s/))

function applyTypes (x) {
  return {
    request: createAction(`${x}_REQUEST`),
    success: createAction(`${x}_SUCCESS`),
    failure: createAction(`${x}_FAILURE`)
  }
}

export default {
  createActions,
  createTypes
}
