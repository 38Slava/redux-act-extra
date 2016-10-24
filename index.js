import { createAction } from 'redux-act'
import R from 'ramda'
import {
  length,
  map,
  compose,
  without,
  split
} from 'ramda'

export function createActions (x) {
  if (R.length(x) === 1) return applyTypes(x)
  return R.map(applyTypes, x)
}

export const createTypes = R.compose(R.without(' '), R.split(/\s/))

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
