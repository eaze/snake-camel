# snake-camel
Utils for converting objects to `snake_case` or `camelCase`

How to use

`toSnakeCase`
```javascript
const casingUtil = require('@eaze/snake-camel')

const camelObj = {
  fooBar: 'bazz'
}

// Creates a deep, snake_cased copy
const snakeObj = casingUtil.toSnakeCase(snakeObj)

console.log(snakeObj.foo_bar) // => 'bazz'
console.log(camelObj.foo_bar) // => undefined
console.log(camelObj.fooBar) // => 'bazz'
```


`toCamelCase`
```javascript
const casingUtil = require('@eaze/snake-camel')

const snakeObj = {
  foo_bar: 'bazz'
}

// Creates a deep, camelCased copy
const camelObj = casingUtil.toCamelCase(snakeObj)

console.log(camelObj.fooBar) // => 'bazz'
console.log(snakeObj.fooBar) // => undefined
console.log(snakeObj.foo_bar) // => 'bazz'
```
