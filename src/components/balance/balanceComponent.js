import React from 'react';
import AccountCardComponent from '../accounts/accountCardComponent';
import './balanceComponent.css';

const accountA = {
  title: 'BV',
  balance: 100
}
const accountB = {
  title: 'Credit Card',
  balance: -200
}

const BalanceComponent = () => (
  <div className="balance-component">
    <AccountCardComponent account={accountA}/>
    <AccountCardComponent account={accountB}/>
  </div>
);

export default BalanceComponent;