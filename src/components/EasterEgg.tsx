import * as React from "react";
import { Component } from "react";
import { Modal, Table, Row, Col, Card, Collapse } from "react-bootstrap";
import Konami from "react-konami-code";
import Tetris from "react-tetris";
import "../css/tetris.css";
import { Button } from "./Button";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

class EasterEgg extends Component {
  state = { easterEggIsVisible: false, tetrisIsStarted: false };

  activateEasterEgg = () =>
    this.setState({
      easterEggIsVisible: true
    });

  deactivateEasterEgg = () =>
    this.setState({
      easterEggIsVisible: false
    });

  toggleTetris = () =>
    this.setState({
      tetrisIsStarted: !this.state.tetrisIsStarted
    });

  render() {
    return (
      <>
        <Modal size="lg" centered show={this.state.easterEggIsVisible}>
          <Modal.Header onHide={this.deactivateEasterEgg} closeButton>
            <Modal.Title>You are a H@ck3r, join the SWAG!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This is going to be the SWAG H@ck3r 1337 b@z@r some day!</p>

            <Button
              icon={faGamepad}
              content={
                this.state.tetrisIsStarted
                  ? "Tetris schließen und die Welt retten"
                  : "Etwas Tetris spielen"
              }
              onClick={this.toggleTetris}
            />
            <Collapse in={this.state.tetrisIsStarted}>
              <Card body className="mt-3">
                <Card.Text>
                  Dieses kleine Tetris is als freie Software auf GitHub
                  verfügbar:{" "}
                  <a href="https://github.com/brandly/react-tetris">
                    react-tetris
                  </a>
                  !
                </Card.Text>
                <Tetris>
                  {({
                    HeldPiece,
                    Gameboard,
                    PieceQueue,
                    points,
                    linesCleared
                  }) => {
                    // Render it however you'd like
                    return (
                      <>
                        <h5>Status</h5>
                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Punkte</th>
                              <th>Geclearte Reihen</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{points}</td>
                              <td>{linesCleared}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <Row>
                          <Col xs={12} sm="auto">
                            <h5>Letztes Teil</h5>
                            <HeldPiece />
                            <h5 className="mt-3">Teilereihe</h5>
                            <PieceQueue />
                          </Col>
                          <Col xs={12} sm="auto">
                            <h5>Spielbrett</h5>
                            <Gameboard />
                          </Col>
                        </Row>
                      </>
                    );
                  }}
                </Tetris>
              </Card>
            </Collapse>
          </Modal.Body>
        </Modal>
        <Konami action={this.activateEasterEgg} />
      </>
    );
  }
}

export { EasterEgg };
