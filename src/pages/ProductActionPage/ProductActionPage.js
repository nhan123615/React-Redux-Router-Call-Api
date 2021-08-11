import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actions from "./../../actions/index";
import { connect } from "react-redux";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      status: '',
    }
  }

  componentDidMount() {
    var { match } = this.props
    if (match) {
      var id = match.params.id
      this.props.onGetEditProduct(id);
    }
  }


  componentDidUpdate(prevProps) {
    if (prevProps.editingItem !== this.props.editingItem && this.props.editingItem !== null) {
      let { editingItem } = this.props
      this.setState({
        id: editingItem.id,
        name: editingItem.name,
        price: editingItem.price,
        status: editingItem.status,
      })
    }
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    var { id, name, price, status } = this.state;
    var { history } = this.props
    price = parseFloat(price);

    var product = {
      id:id,
      name: name,
      price: price,
      status: status
    }

    if (id) {
      this.props.onUpdateProduct(product)
      history.push("/product-list");
    } else {
      this.props.onAddProduct(product)
      history.push("/product-list");

    }

  }

  render() {
    var { name, price, status } = this.state;
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label >Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label >Price: </label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={price}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label >Status: </label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="status"
                value={status}
                onChange={this.onChange}
                checked={status}
              />
              In-stock
            </label>
          </div>

          <button type="submit"
            className="btn btn-primary">Save</button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/product-list" className="btn btn-danger">Go back</Link>
        </form>

      </div>

    );
  }

}

const mapStateToProps = state => {
  return {
    editingItem: state.editingItem
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actions.addProductRequest(product))
    },
    onGetEditProduct: (id) => {
      dispatch(actions.getEditProductRequest(id))
    },
    onUpdateProduct: product => {
      dispatch(actions.updateProductRequest(product))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
