import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      
      <div className="panel panel-primary" style={{ marginTop: 30 }}>
        <div className="panel-heading">
          <h3 className="panel-title">List of Product</h3>
        </div>
        <div className="panel-body">

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>


    );
  }

}

export default ProductList;
