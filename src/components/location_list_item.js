import React, {Component} from "react";

export default class LocationListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };

    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.isActive;
    this.setState({
      isActive: !currentState
    });
  };
  render() {
    return (
      <li className={this.state.isActive
          ? "active list-group-item list-group-item-action pointer"
          : "list-group-item list-group-item-action pointer"} onClick={this.toggleClass}>
          {this.props.location}
        </li>
    );
  }
}
