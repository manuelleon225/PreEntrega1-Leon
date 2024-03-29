import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
    <div style={cardWidgetStyle}>
      <div style={notificationBadgeStyle}>1</div>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
    )
}

const notificationBadgeStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    borderRadius: '50%',
    padding: '0.2em 0.5em', 
    marginLeft: '0.5em',
    fontSize: '0.8em',
  };

  const cardWidgetStyle = {
    display: 'flex',
    alignItems: 'center',
  };

export default CartWidget;