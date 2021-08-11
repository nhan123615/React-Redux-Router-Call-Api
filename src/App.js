import React, { Component } from "react";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />


          <div className="container">
            <div className="row">
        
              {this.showContent(routes)}
            </div>
          </div>
        </div>

      </Router>


    );
  }

  showContent = (routes) => {
    var rs = null;
    if (routes.length > 0) {
      rs = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />)
      })
    }

    return <Switch>{rs}</Switch>
  }

}

export default App;
