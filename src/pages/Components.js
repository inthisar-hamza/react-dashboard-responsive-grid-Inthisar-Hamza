import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import { withSize } from "react-sizeme";
import CardComponent from "../components/CardComponent";
import "./Co.css";

/* 
const style = {
  display: "grid",
  justifyContent: "start",
  alignContent: "start",
  alignItems: "start",
  gridTemplateColumns: "2fr 1fr 1fr",
  gridGap: "10px"
};

const CardWrapper = styled.div`
  display: "grid";
  justify-content: "start";
  align-content: "start";
  align-items: "start";
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;
 */
class Components extends Component {
  onSize = (size) => {
    console.log("MyMessageComponent has a width of", size.width);
  };

  render() {
    const { width, height } = this.props.size;
    return (
      <>
        <div>
          <h1>
            Reusable component that fits to parent component's grid height/width
            automatically.
          </h1>
          <p>each card is a component that fits to parents grid layout.</p>
          <p>
            Parent grid layout is Responsive and card component was set to its
            position and size.
          </p>
        </div>
        <div className="grid-container">
          <CardComponent className="item1" onSize={this.onSize} name="1" />
          <CardComponent className="item2" onSize={this.onSize} name="2" />
          <CardComponent className="item3" onSize={this.onSize} name="3" />
          <CardComponent className="item4" onSize={this.onSize} name="4" />
          <CardComponent className="item5" onSize={this.onSize} name="5" />
          <CardComponent className="item6" onSize={this.onSize} name="6" />
          <CardComponent className="item7" onSize={this.onSize} name="7" />
        </div>
      </>
    );
  }
}

export default withSize({ monitorHeight: true, refreshRate: 25 })(Components);
