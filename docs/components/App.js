import React from 'react'

class App extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className="mdl-layout mdl-js-layout">
        <main className="mdl-layout__content">
          <div className="page-content">
            { children }
          </div>
        </main>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
