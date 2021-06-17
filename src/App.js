import React, { useState } from "react";

import Icon from "./Component/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, Container, Button, Col, Row, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const itemArr = new Array(9).fill("empty");

function App() {
  const [crossed, setCrossed] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setCrossed(false);
    setWinMessage("");
    itemArr.fill("empty");
  };
  const checkWinner = () => {
    if (
      itemArr[0] === itemArr[1] &&
      itemArr[0] === itemArr[2] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} wins`);
    } else if (
      itemArr[3] === itemArr[4] &&
      itemArr[3] === itemArr[5] &&
      itemArr[3] !== "empty"
    ) {
      setWinMessage(`${itemArr[3]} wins`);
    } else if (
      itemArr[6] === itemArr[7] &&
      itemArr[7] === itemArr[8] &&
      itemArr[6] !== "empty"
    ) {
      setWinMessage(`${itemArr[5]} wins`);
    } else if (
      itemArr[0] === itemArr[4] &&
      itemArr[4] === itemArr[8] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} wins`);
    } else if (
      itemArr[2] === itemArr[4] &&
      itemArr[4] === itemArr[6] &&
      itemArr[2] !== "empty"
    ) {
      setWinMessage(`${itemArr[2]} wins`);
    } else if (
      itemArr[0] === itemArr[3] &&
      itemArr[3] === itemArr[6] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} wins`);
    } else if (
      itemArr[1] === itemArr[4] &&
      itemArr[4] === itemArr[7] &&
      itemArr[1] !== "empty"
    ) {
      setWinMessage(`${itemArr[1]} wins`);
    } else if (
      itemArr[2] === itemArr[5] &&
      itemArr[5] === itemArr[8] &&
      itemArr[2] !== "empty"
    ) {
      setWinMessage(`${itemArr[2]} wins`);
    } else if (
      itemArr[1] !== "empty" &&
      itemArr[2] !== "empty" &&
      itemArr[3] !== "empty" &&
      itemArr[4] !== "empty" &&
      itemArr[5] !== "empty" &&
      itemArr[6] !== "empty" &&
      itemArr[7] !== "empty" &&
      itemArr[8] !== "empty" &&
      itemArr[9] !== "empty"
    ) {
      setWinMessage(`Game is Drawn`);
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArr[itemNumber] === "empty") {
      itemArr[itemNumber] = crossed ? "cross" : "circle";
      setCrossed(!crossed);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkWinner();
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className=" text-center text-uppercase text-success ">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                reload game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {crossed ? "cross" : "circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArr.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
