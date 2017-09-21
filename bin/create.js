require('dotenv').config()
const fs = require('fs')
const cheerio = require('cheerio')
const camelcase = require('camelcase')
const capitalize = require('capitalize')
const _ = require('underscore')
const glob = require('glob')
const path = require('path')

const components = []
const rootDir = path.join(__dirname, '..')
const attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill']
const cleanAtrributes = ($el, $) => {
  _.each(attrs, (attr) => {
    $el.removeAttr(attr)
  })
  if ($el.children().length === 0) {
    return false
  }
  $el.children().each((index, el) => {
    cleanAtrributes($(el), $)
  })
}

const DEST_FOLDER = 'particles'

if (!fs.existsSync(DEST_FOLDER)) {
  fs.mkdirSync(DEST_FOLDER)
}

const PARTICLES_PATH = process.env.PARTICLES_PATH || 'node_modules/presslabs-particles-icons/SVG'

glob(path.join(rootDir, `${PARTICLES_PATH}/*.svg`), (err, icons) => {
  icons.forEach((iconPath) => {
    const filename = path.basename(iconPath, '.svg')

    // Process SVG file
    const svg = fs.readFileSync(iconPath, 'utf-8')
    const $ = cheerio.load(svg, { xmlMode: true })
    const $svg = $('svg')
    cleanAtrributes($svg, $)
    $($svg).find('title').remove()
    const iconSvg = $svg.html()
    const viewBox = $svg.attr('viewBox')

    const name = `${capitalize(camelcase(filename))}Icon`
    components.push({
      component: name,
      file: `./${filename}`
    })
    const component = `import React from 'react'

const ${name} = (props) => {
  const computedSize = props.size || '1em'
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      viewBox="${viewBox}"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >${iconSvg}</svg>
  )
}

export default ${name}

`
    fs.writeFileSync(path.join(rootDir, `${DEST_FOLDER}/${filename}.js`), component, 'utf-8')
  })
  const imports = _.map(components, (component) => `export ${component.component} from '${component.file}'`)
  fs.writeFileSync(path.join(rootDir, DEST_FOLDER, 'index.js'), `${imports.join('\n')}\n`, 'utf-8')
})
