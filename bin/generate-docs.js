import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from '../docs/components/App'
import IconPack from '../docs/components/IconPack'
import icons from './info'

global.React = React

const indexFile = path.join(__dirname, '..', 'docs', 'sample.html')
const indexHtml = fs.readFileSync(indexFile, 'utf-8')
const pubDir = 'docs'

function writeFile (content) {
  const page = indexHtml.replace('{{#content}}', content)
  const destFile = path.join(__dirname, '..', pubDir, 'index.html')
  if (!fs.existsSync(pubDir)) {
    fs.mkdirSync(pubDir)
  }
  fs.writeFileSync(destFile, page, 'utf-8')
}

const iconsList = require('../particles')

icons.pack = { ...iconsList }
delete icons.pack.__esModule

const content = renderToStaticMarkup(<App><IconPack icons={ icons } /></App>)
writeFile(content)
