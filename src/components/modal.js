import React from "react";
import "./modal.css";

class Modal extends React.Component {
  render = props => {
    if (this.props.condition) {
      return this.props.children;
    }
    return null;
  };
}

export default Modal;
