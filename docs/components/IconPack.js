import React from 'react'

export default class IconPack extends React.Component {
  render () {
    const { icons } = this.props
    return (
      <div className="icon-pack">
        <h1>{ icons.particles.name }</h1>
        <h4>{ icons.particles.githubUrl }</h4>
        <h4>{ icons.particles.attribution }</h4>
        <code>import <strong>{ `{ AcmeIconName }` }</strong> from 'react-particles-icons'</code>
        <div className="mdl-grid">
          { Object.keys(icons.pack).map((iconName, index) => {
            const Icon = icons.pack[iconName]
            return (
              <div className="icon-box mdl-cell mdl-cell--2-col" key={ index }>
                <Icon size={ 50 } />
                <div className="icon-location">
                  <code>{ iconName }</code>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

IconPack.propTypes = {
  icons: React.PropTypes.object.isRequired
}
