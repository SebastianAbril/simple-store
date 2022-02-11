import React from "react";
import { Card } from "../components/card/Card";
import { Header } from "../components/header/Header";
import { Label } from "../components/label/Label";
import { Button } from "../components/button/Button";
import { Column } from "../components/column/Column";
import { Row } from "../components/row/Row";

export const ComponentScreen = () => {
  return (
    <div>
      <Header />
      <Label text={"sebastian"}></Label>
      <Card>
        <Label text={"sebastian"}></Label>
        <Button text={"Hola mundo"} />
      </Card>
      <Label text={"button type property"}></Label>
      <Card>
        <Button text={"default button"}></Button>
        <Button text={"fill button"} type={"fill"}></Button>
        <Button text={"outline button"} type={"outline"}></Button>
        <Button text={"link button"} type={"link"}></Button>
      </Card>
      <Label text={"button size property"}></Label>
      <Card>
        <Button text={"default button"}></Button>
        <Button text={"small button"} size={"small"}></Button>
        <Button text={"normal button"} size={"normal"}></Button>
        <Button text={"large button"} size={"large"}></Button>
      </Card>
      <Label text={"button shape property"}></Label>
      <Button text={"circular normal button"} shape={"circular"}></Button>
      <Button
        text={"Circular small"}
        size={"small"}
        shape={"circular"}
      ></Button>
      <Button
        text={"Circular large"}
        size={"large"}
        shape={"circular"}
      ></Button>
      <Label text={"Column component"}></Label>
      <Column
        className="firstColumn"
        style={{
          backgroundColor: "red",
          border: "5px solid black",
          padding: "5px",
        }}
      >
        <Button size={"small"} />
        <Button shape={"circular"} />
        <Button shape={"circular"} />
        <Button shape={"circular"} />
        <Button shape={"circular"} />
      </Column>

      <Label text={"Row component"}></Label>
      <Row
        className="firstRow"
        style={{
          backgroundColor: "blue",
          border: "3px solid green",
          padding: "5px",
        }}
      >
        <Button size={"small"} />
        <Button shape={"circular"} />
        <Button shape={"circular"} />
        <Button shape={"circular"} />
        <Button shape={"circular"} />
      </Row>

      <Label text={"Footer component"}></Label>
    </div>
  );
};
