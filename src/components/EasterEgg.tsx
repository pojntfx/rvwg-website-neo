import * as React from "react";
import { Component } from "react";
import { Modal } from "react-bootstrap";
import Konami from "react-konami-code";

class EasterEgg extends Component {
  state = { easterEggIsVisible: false };

  activateEasterEgg = () =>
    this.setState({
      easterEggIsVisible: true
    });

  deactivateEasterEgg = () =>
    this.setState({
      easterEggIsVisible: false
    });

  render() {
    return (
      <>
        <Modal centered show={this.state.easterEggIsVisible}>
          <Modal.Header onHide={this.deactivateEasterEgg} closeButton>
            <Modal.Title>You are a H@ck3r, join the SWAG!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This is going to be the SWAG H@ck3r 1337 b@z@r some day!</p>
          </Modal.Body>
        </Modal>
        <Konami action={this.activateEasterEgg} />
      </>
    );
  }
}

export { EasterEgg };
