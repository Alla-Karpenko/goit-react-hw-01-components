import React from 'react';
import PropTypes from 'prop-types';
import styles from'./TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.transactionHistory}>
        <thead>
            <tr className={styles.title}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
         </thead>
        <thead> 
           {items.map((transactions) => (
            <tr className={styles.transactionList} key={transactions.id}>
                <th>{transactions.type}</th>
                <th>{transactions.amount}</th>
                <th>{transactions.currency}</th>
            </tr>
              ))}
        </thead>
    </table>
);


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;