import PropTypes from 'prop-types';
import css from './Transaction.module.css'

export const Transactions = ({items}) =>{
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th className={css.title}>Type</th>
                <th className={css.title}>Amount</th>
                <th className={css.title}>Currency</th>
                </tr>
            </thead>
             <tbody>
         {items.map(item=>{
            return(
              <tr className={css.itemList} key={item.id}>
              <td className={css.item}>{item.type}</td>
              <td className={css.item}>{item.amount}</td>
              <td className={css.item}>{item.currency}</td>
             </tr>
            );
         })}
        </tbody>
         </table>    
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };