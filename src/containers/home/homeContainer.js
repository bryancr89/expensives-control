import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as actions from '../../actions/accountActions';
import AccountBalance from '../../components/accounts/balance';
import TransactionComponent from '../../components/transactions/transactionCardComponent';
import './home.css';

const mapAccountBalances = (account) => <AccountBalance {...account}/>;

class Home extends Component {
  componentWillMount() {
    this.props.getAccounts();
  }
  render() {
    const accountBalances = this.props.accounts.map(mapAccountBalances);
    return (
      <div className="app-container">
        <div>
          {accountBalances}
        </div>
        Transactions
        <TransactionComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
