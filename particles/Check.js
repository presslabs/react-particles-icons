import React from 'react'
import IconBase from 'react-icon-base'

export default class Check extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M398.18 216.324c-22.136 0-44.271 8.427-61.123 25.276l-158.436 158.436c-11.253 11.253-11.253 29.497 0 40.749s29.497 11.253 40.749 0l158.436-158.436c11.235-11.235 29.514-11.233 40.749 0l386.075 386.075c11.253 11.253 29.497 11.253 40.749 0s11.253-29.497 0-40.749l-386.077-386.075c-16.852-16.852-38.99-25.276-61.123-25.276z" /></g>
      </IconBase>
    )
  }
}
