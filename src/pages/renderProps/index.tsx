import React, { Component } from "react";
import { withRouter } from "react-router-dom";
interface State {
  x: number;
  y: number;
}

interface CatProps {
  mouse: State;
}
interface MouseProps {
  render: any;
}
//@ts-ignore
@withRouter
class Mouse extends Component<MouseProps, State> {
  state: State = {
    x: 0,
    y: 0,
  };
  //@ts-ignore
  mouseChange = (value: MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({ x: value.clientX, y: value.clientY });
  };
  componentDidMount() {}
  render() {
    return (
      <>
        <div
          style={{ width: "100%", height: "100vh" }}
          onMouseMove={this.mouseChange}
          //@ts-ignore
          onClick={this.props.history.goBack}
        >
          {this.props.render(this.state)}
        </div>
      </>
    );
  }
}
class Cat extends Component<CatProps> {
  render() {
    return (
      <>
        <img
          src="./logo192.png"
          alt=""
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            left: this.props.mouse.x,
            top: this.props.mouse.y,
          }}
        />
      </>
    );
  }
}

export default class RenderProps extends Component {
  render() {
    return (
      <>
        <Mouse render={(mouse: State) => <Cat mouse={mouse} />} />
      </>
    );
  }
}
