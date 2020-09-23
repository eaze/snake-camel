'use strict'

const camelCase = require('camelcase-keys')
const snakeCase = require('snakecase-keys')
const deepClone = require('lodash').cloneDeep

module.exports = {
  toCamelCase,
  toSnakeCase
}

function toCamelCase (o) {
  const obj = deepClone(o)
  return camelCase(obj, { deep: true })
}

function toSnakeCase (o) {
  const obj = deepClone(o)
  return snakeCase(obj, { deep: true })
}
