import React from 'react'
import IconBase from 'react-icon-base'

export default class Caret extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M451.876 346.376l-178.436 178.436c-11.253 11.253-11.253 29.497 0 40.749s29.497 11.253 40.749 0l178.436-178.436c11.235-11.235 29.514-11.233 40.749 0l176.075 176.075c11.253 11.253 29.497 11.253 40.749 0s11.253-29.497 0-40.749l-176.077-176.075c-16.852-16.852-38.99-25.276-61.123-25.276-22.135 0-44.27 8.427-61.122 25.276z" /></g>
      </IconBase>
    )
  }
}
