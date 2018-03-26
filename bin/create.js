import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import particles from 'presslabs-particles-icons/dist/icons/particles-data.json'

const DEST_FOLDER = 'particles'

const components = []
const rootDir = path.join(__dirname, '..')

if (!fs.existsSync(DEST_FOLDER)) {
  fs.mkdirSync(DEST_FOLDER)
}

_.map(particles, (icon, key) => {
  const className = key.replace(/_\w/g, m => {
    const n = m.toUpperCase()
    return n[1]
  })

  const name = `${_.startCase(className).replace(/ /g, '')}Icon`
  const iconSvg = `<path d="${icon[0]}" transform="matrix(1 0 0 -1 0 512)" />`
  const viewBox = '0 0 512 512'

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
  fs.writeFileSync(
    path.join(rootDir, `${DEST_FOLDER}/${key}.js`),
    component,
    'utf-8',
  )

  components.push({
    name,
    file: `${key}`,
  })
})

const component = `import React from 'react'
import PropTypes from 'prop-types'
import iconsData from 'presslabs-particles-icons/dist/icons/particles-data.json'

const Particle = (props) => {
  const { size, name, children } = props
  const particle = name && name || children
  const particleData = iconsData[particle] || null
  if (particleData === null) console.error('Particle "' + particle + '" not found!')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ size }
      width={ size }
      viewBox="0 0 64 64"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >
      <path d={ particleData } transform="matrix(1 0 0 -1 0 512)" />
    </svg>
  )
}

Particle.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.string,
}

Particle.defaultProps = {
  size: 16,
}

export default Particle

`
fs.writeFileSync(
  path.join(rootDir, `${DEST_FOLDER}/particle.js`),
  component,
  'utf-8',
)

const imports = _.map(
  components,
  component => `export ${component.name} from './${component.file}'`,
)
imports.push("export Particle from './particle'")
fs.writeFileSync(
  path.join(rootDir, DEST_FOLDER, 'index.js'),
  `${imports.join('\n')}\n`,
  'utf-8',
)
