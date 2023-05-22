import PropTypes from 'prop-types';

export const Transactions = ({items}) =>{
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
             <tbody>
         {items.map(item=>{
            return(
              <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
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