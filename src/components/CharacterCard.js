import React from "react";
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

export default function CharacterCard(props) {
  return(
    <Card>
    <CardImg top width="100%" src={props.img} alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.name}</CardTitle>
    </CardBody>
  </Card>
  )
}
