const assert = require('assert')
const langFiles = require('../index')
describe('langFiles', function() {
  it('should contain 27 languages', function() {
    assert.equal(Object.keys(langFiles).length, 27)
  })
  it('should contain specific languages', function() {
    const expected = [
      'ar-SA',
      'ar-TN',
      'cs-CZ',
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
      'zh-TW',
    ]

    expected.forEach(lang => {
      assert.equal(langFiles.hasOwnProperty(lang), true)
    })
  })
})
