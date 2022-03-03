/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { green } = require('chalk')

const path = require('path')
const fse = require('fs-extra')

const targets = process.argv.slice(2)

const srcRoot = path.join(__dirname, '../src')

const libRoot = path.join(__dirname, '../lib')
const cjsRoot = path.join(libRoot, 'cjs')
const esRoot = path.join(libRoot, 'esm')

const step = require('./utils').step
const shell = require('./utils').shell
const error = require('./utils').error

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot)

const has = (t) => !targets.length || targets.includes(t)

const buildTypes = step('generating .d.ts', () => shell(`npm run build:types`))

const babel = (outDir, envName) => {
  shell(
    `npx babel ${srcRoot} -x .js,.jsx,.ts,.tsx --out-dir ${outDir} --env-name "${envName} && tscpaths -p tsconfig.json -s ./src -o ./lib/${envName}"`
  )
}

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildLib = step('commonjs modules', async () => {
  await babel(cjsRoot, 'cjs')
})

/**
 * Run babel over the src directory and output
 * compiled es modules (but otherwise es5) to /es
 */
const buildEsm = step('es modules', async () => {
  await babel(esRoot, 'esm')
})

console.log(
  green(`Building targets: ${targets.length ? targets.join(', ') : 'all'}\n`)
)

clean()

Promise.resolve(true)
  .then(buildTypes)
  .then(() => Promise.all([has('lib') && buildLib(), has('es') && buildEsm()]))
  .catch(error)
