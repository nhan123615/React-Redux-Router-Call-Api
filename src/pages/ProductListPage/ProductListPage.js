import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../actions/index";

class ProductListPage extends Component {

  componentDidMount() {
      this.props.fetchAllProducts()
  }

  render() {
    var { products } = this.props;

    return (

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info">Add Product</Link>
        <ProductList>
          {this.showProducts(products)}
        </ProductList >
      </div>

    );
  }

  onDelete = id => {
    this.props.onDeleteProduct(id);
  }


  showProducts = products => {
    var rs = null;
    if (products.length > 0) {
      rs = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            index={index}
            product={product}
            onDelete={this.onDelete}
          />

        );
      })
    }
    return rs;
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return{
    fetchAllProducts:()=>{
      dispatch(actions.fetchProductsRequest())
    },
    onDeleteProduct:(id)=>{
      dispatch(actions.deleteProductRequest(id))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
