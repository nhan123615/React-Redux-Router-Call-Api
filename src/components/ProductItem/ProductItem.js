import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure to delete ?')) {
      this.props.onDelete(id)
    }

  }
  render() {
    var { product, index } = this.props
    var statusName = product.status ? 'In-stock' : 'Out-of-stock';
    var statusClass = product.status ? 'warning' : 'default';


    return (

      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`}  className="btn btn-success">Edit</Link>
          &nbsp; &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >Delete</button>
        </td>
      </tr>


    );
  }

}

export default ProductItem;
