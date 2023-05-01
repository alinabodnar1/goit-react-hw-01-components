import PropTypes from 'prop-types';
import cssModule from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    const renderStyled = (item) => {
         return (item.type.includes('invoice') && cssModule['type-invoice']) || 
                (item.type.includes('payment') && cssModule['type-payment']) ||
                (item.type.includes('withdrawal') && cssModule['type-withdrawal']) ||
                (item.type.includes('deposit') && cssModule['type-deposit'])
        }
        
    return (
        <table className={cssModule['transaction-history']}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id} className={renderStyled(item)}  >
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>    
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}