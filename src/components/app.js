import React, { Component } from 'react';
import LocationList from "../containers/location_list";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          Placeholder
        </div>
        <div className="col-sm-4">
          <LocationList />
        </div>
      </div>
    );
  }
}
