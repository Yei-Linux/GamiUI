/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const { twinTheme } = require('./src/styles/theme')

module.exports = twinTheme(defaultTheme)