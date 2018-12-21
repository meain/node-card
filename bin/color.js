const chalk = require('chalk')

// figure way to get this from shell
const dark = true
const light = !dark

const codeRed = (light ? 'a10' : dark ? 'd43' : 'b21')
const codeOrange = (light ? 'b50' : dark ? 'e83' : 'c61')
const codeYellow = (light ? 'c90' : dark ? 'dc3' : 'ba1')
const codeGreen = (light ? '380' : dark ? '87ff5f' : '491')
const codeBlue = (light ? '07a' : dark ? '5fd7ff' : '18b')
const codePurple = (light ? '62c' : dark ? '95f' : '73d')
const codeGrey = (light ? '777' : dark ? 'aaa' : '888')

const red = hex(codeRed)
const orange = hex(codeOrange)
const yellow = hex(codeYellow)
const green = hex(codeGreen)
const blue = hex(codeBlue)
const purple = hex(codePurple)
const gray = hex(codeGrey)
const grey = hex(codeGrey)
const black = hex('000')
const white = hex('fff')

module.exports = {
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  gray,
  grey,
  black,
  white,
  hex,
  key,
}

function hex (code) {
  const color = chalk.hex(code)
  color.bg = chalk.bgHex(code)
  return color
}

function key (name) {
  const color = chalk.keyword(name)
  color.bg = chalk.bgKeyword(name)
  return color
}
