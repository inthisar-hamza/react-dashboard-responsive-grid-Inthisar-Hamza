import React from "react";
import { withSize } from "react-sizeme";
import "./cardstyle.css";

class CardComponent extends React.Component {
  constructor(props) {
    super(
      props
    ); /* 
    this.state = {
      componentSize: { width: props.width, height: props.height }
    }; */
  }

  render() {
    return (
      <div /* style={this.state.componentSize} */>
        <div className="uni">
          <div className="cardHeader">
            <h3 className="H1">Card no {this.props.name}</h3>
          </div>
          <div className="cardBody">
            <h3 className="H1">Card Description</h3>
          </div>
          <div className="cardFooter">
            <h3 className="H1">Card Footer</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withSize()(CardComponent);
