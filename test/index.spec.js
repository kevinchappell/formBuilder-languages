const assert = require('assert')
const langFiles = require('../index')

const languageCount = 28

describe('langFiles', function () {
  it(`should contain ${languageCount} languages`, function () {
    assert.equal(Object.keys(langFiles).length, languageCount)
  })
  it('should contain specific languages', function () {
    const expected = [
      'ar-SA',
      'ar-TN',
      'cs-CZ',
      'da-DK',
      'de-DE',
      'en-US',
      'es-ES',
      'fa-IR',
      'fi-FI',
      'fr-FR',
      'he-IL',
      'hu-HU',
      'it-IT',
      'ja-JP',
      'my-MM',
      'nb-NO',
      'nl-NL',
      'pl-PL',
      'pt-BR',
      'qz-MM',
      'ro-RO',
      'ru-RU',
      'sl-SI',
      'tr-TR',
      'uk-UA',
      'vi-VN',
      'zh-CN',
      'zh-TW'
    ]

    expected.forEach(lang => {
      assert.equal(langFiles.hasOwnProperty(lang), true)
    })
  })
})
