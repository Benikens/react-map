import React, {Component} from "react";
import LocationListItem from "../components/location_list_item";

export default class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'geelong',
    };
  }
  render() {
    return (<ul className="list-group">
        <LocationListItem location={this.state.location}/>
        <LocationListItem location={this.state.location}/>
        <LocationListItem location={this.state.location}/>

    </ul>);
  }
}
