import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../store/allOrders';

export class OrderHistory extends React.Component {
  async componentDidMount() {
    await this.props.getOrders();
  }

  render() {
    const orders = this.props.orders;
    return (
      <div className="order-section">
        <h3 style={{ marginLeft: '2rem' }}>Order History</h3>
        {orders && orders.length !== 0 ? (
          <div className="all-order-container">
            {orders.map((order) => (
              <div order={order} key={order.id} className="order-container">
                <h4 style={{ marginLeft: '2rem' }}>Order number: {order.id}</h4>
                <div className="order-item-container">
                  <div></div>
                  <div className="name-header" style={{ fontWeight: 'bold' }}>
                    Name
                  </div>
                  <div className="price-header" style={{ fontWeight: 'bold' }}>
                    Price
                  </div>
                  <div
                    className="quantity-header"
                    style={{ fontWeight: 'bold' }}
                  >
                    Quantity
                  </div>
                  <div style={{ fontWeight: 'bold' }}>Total</div>
                </div>
                {order.products.map((item) => {
                  return (
                    <div key={item.id} className="order-item-container">
                      <img className="order-img" src={item.imageURL} />{' '}
                      {/* CHANGE TO imageURL for pic to load */}
                      <div>
                        <Link to={`/products/${item.id}`}>
                          <span>{item.name}</span>
                        </Link>
                      </div>
                      <span style={{ fontSize: '.8rem' }}>
                        $ {item.price / 100}
                      </span>
                      <span style={{ fontSize: '.8rem' }}>
                        {item.cartItem.quantity}
                      </span>
                      <span style={{ fontSize: '.8rem' }}>
                        {(item.price / 100) * item.cartItem.quantity}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="div-container">No recent orders found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(fetchOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
