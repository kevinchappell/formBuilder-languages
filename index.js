const fs = require('fs')
const path = require('path')
const { default: mi18n } = require('mi18n')

const langFiles = fs
  .readdirSync(__dirname)
  .filter(file => /.lang$/.test(file))
  .reduce((acc, lang) => {
    const langFile = fs.readFileSync(lang).toString()
    const fileName = path.basename(lang)
    const locale = fileName.substr(0, fileName.indexOf('.'))
    acc[locale] = mi18n.processFile(langFile)
  }, {})

module.exports = langFiles
