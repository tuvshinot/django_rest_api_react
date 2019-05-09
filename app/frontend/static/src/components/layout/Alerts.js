import {withAlert} from 'react-alert';

import React, { Component, Fragment } from 'react'

export class Alerts extends Component {
    componentDidMount() {
        this.props.alert.show('it works');
    }

  render() {
    return <div />
  }
}

export default withAlert(Alerts);
