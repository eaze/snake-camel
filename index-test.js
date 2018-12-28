'use strict'

const expect = require('chai').expect
const casingUtil = require('./index')

describe('toCamelCase', () => {
  it('should convert properties from any case to camelCase', done => {
    const obj = {foo_bar: 'bazz'}
    const obj1 = casingUtil.toCamelCase(obj)
    expect(obj1.fooBar).to.equal('bazz')
    expect(obj.foo_bar).to.equal('bazz')
    done()
  })
})

describe('toSnakeCase', () => {
  it('should convert top level properties from camelCase to snake_case', done => {
    const obj = {fooBar: 'bazz'}
    const obj1 = casingUtil.toSnakeCase(obj)
    expect(obj1.foo_bar).to.equal('bazz')
    expect(obj.fooBar).to.equal('bazz')
    done()
  })
})
