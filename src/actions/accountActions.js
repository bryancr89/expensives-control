export const GET_ACCOUNTS = 'GET_ACCOUNTS';

export const getAccounts = () => {
  return {
    type: GET_ACCOUNTS,
    accounts: [{
      title: 'BV',
      balance: 100,
      currency: '$'
    }, {
      title: 'Credit Card',
      balance: 150,
      currency: '$'
    }]
  };
}