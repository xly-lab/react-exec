import React, { Component } from "react";
import InputRef from "./refSon";

export default class UseUseRef extends Component {
  inputRef = React.createRef();
  componentDidMount() {
    // console.log(this.inputRef.current);
    if (this!.inputRef!.current) {
      //@ts-ignore
      this!.inputRef!.current?.useFocus();
      //@ts-ignore
      // this!.inputRef!.current?.onChange();
    }
  }
  render() {
    return (
      <>
        <InputRef ref={this.inputRef} />
      </>
    );
  }
}
