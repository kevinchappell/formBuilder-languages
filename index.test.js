const { test } = require('node:test')
const assert = require('node:assert')
const { glob } = require('node:fs')

const langFiles = require('./index')

glob('*.lang', (err, matches) => {
  if (err) {
    console.error(err)
    return
  }
  const localeCount = matches.length

  test(`should contain ${localeCount} languages`, () => {
    assert.equal(Object.keys(langFiles).length, localeCount)
  })

  test('should contain specific languages', () => {
    /**
     * Array of expected locales extracted from the matches array.
     * @type {string[]}
     */
    const expectedLocales = matches.map((lang) => lang.substring(0, lang.indexOf('.')))

    for (const lang of expectedLocales) {
      assert.equal(Object.hasOwn(langFiles, lang), true)
    }
  })
})
