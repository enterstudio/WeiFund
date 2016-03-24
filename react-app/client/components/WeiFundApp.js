import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../lib/actions/index';
import {Header, Footer, EthereumSettings, IPFSSettings, Body} from './index';

class WeiFundAppComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    // dispatch(Actions.NETWORK());
  }

  render(){
    // let { Network, Providers } = this.props;
    // console.log(this.props);
    // console.log(Providers);
    // !this.props.Views.bodyView.includes('campaign')

    return (
      <div>
        <Header />
        <Body />
        <Footer />

        <EthereumSettings />
        <IPFSSettings />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Network : state.Network,
    Views : state.Views,
    Providers : state.Providers
  }
}

const WeiFundApp = connect(mapStateToProps)(WeiFundAppComponent);

export default WeiFundApp;
