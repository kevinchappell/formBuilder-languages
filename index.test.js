const { test } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')
const { I18N: mi18n } = require('@draggable/i18n')

const langFiles = require('./index')

const langFileNames = fs.readdirSync(__dirname).filter((fileName) => fileName.endsWith('.lang'))
const expectedLocales = langFileNames.map((fileName) => path.basename(fileName, '.lang'))

test(`contains ${langFileNames.length} languages`, () => {
  assert.equal(Object.keys(langFiles).length, langFileNames.length)
})

test('contains an entry for each language file', () => {
  for (const locale of expectedLocales) {
    assert.equal(Object.hasOwn(langFiles, locale), true)
  }
})

test('does not expose non-language files as locales', () => {
  assert.equal(Object.hasOwn(langFiles, 'index'), false)
  assert.equal(Object.hasOwn(langFiles, 'package'), false)
})

test('exports parsed contents for every language file', () => {
  for (const fileName of langFileNames) {
    const locale = path.basename(fileName, '.lang')
    const langFile = fs.readFileSync(path.resolve(__dirname, fileName), 'utf8')

    assert.deepEqual(langFiles[locale], mi18n.processFile(langFile))
  }
})

test('preserves representative translated values', () => {
  assert.equal(langFiles['sv-SE'].NATIVE_NAME, 'Svenska')
  assert.equal(langFiles['sv-SE']['placeholders.email'], 'Ange din e-post')
  assert.equal(Object.hasOwn(langFiles['sv-SE'], 'placeholders.text'), false)
})
