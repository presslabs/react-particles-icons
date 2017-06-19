"use strict"

const fs = require('fs')
const cheerio = require('cheerio')
const camelcase = require('camelcase')
const capitalize = require('capitalize')
const _ = require('underscore')
const glob = require('glob')
const path = require('path')

const components = {}
const types = {}
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

glob(rootDir + '/icons/particles/*.svg', (err, icons) => {
  icons.forEach((iconPath) => {
    const id = path.basename(iconPath, '.svg')
    const svg = fs.readFileSync(iconPath, 'utf-8')
    const $ = cheerio.load(svg, { xmlMode: true })
    const $svg = $('svg')
    cleanAtrributes($svg, $)
    $($svg).find('title').remove()
    const iconSvg = $svg.html()
    const viewBox = $svg.attr('viewBox')
    const folder = iconPath.replace(
      path.join(rootDir, 'icons') + '/', ''
    ).replace('/' + path.basename(iconPath), '')
    const name = capitalize(camelcase(id)) + 'Icon'
    const location = iconPath.replace(path.join(rootDir, 'icons'), '').replace('.svg', '.js')
    components[name] = location.toLowerCase()
    if (!types[folder]) {
      types[folder] = {}
    }
    types[folder][name] = location
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder)
    }
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
    >
      <g>${iconSvg}</g>
    </svg>
  )
}

export default ${name}

`
    fs.writeFileSync(path.join(rootDir, location), component, 'utf-8')
  })
  _.each(types, (cmps, folder) => {
    const iconsModule = _.map(cmps, (locatio, name) => {
      let loc = locatio.replace('.js', '')
      loc = loc.replace('/' + folder, '')
      loc = '.' + loc
      return `export ${name} from '${loc}'`
    }).join('\n') + '\n'
    fs.writeFileSync(path.join(rootDir, folder, 'index.js'), iconsModule, 'utf-8')
  })
})
