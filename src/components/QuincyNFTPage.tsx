import React, { MouseEventHandler, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const QuincyNFTPage: React.FC = () => {

  // define navigation
  const navigate = useNavigate();

  // set state
  const [geraldoRound, setGeraldoRound] = useState<number | null>(null);
  const [NFTRound, setNFTRound] = useState<number | null>(null);


  return (
    <Container className="content-container">
      <Form className="form">
        <Form.Group className="form-group">
          <Form.Label className="form-label">
            Geraldo Hero Bought Round
          </Form.Label>
          <Form.Control 
          className="form-control"
          type="number" 
          placeholder="Enter Round" 
          value={geraldoRound || ""}
          onChange={(e) => setGeraldoRound(parseInt(e.target.value))}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label className="form-label">
            Quincy NFT Bought Round
          </Form.Label>
          <Form.Control 
          className="form-control" 
          type="number" 
          placeholder="Enter Round" 
          value={NFTRound || ""}
          onChange={(e) => setNFTRound(parseInt(e.target.value))}
          />
        </Form.Group>
        <Button onClick={()=>{navigate('/displayresults', {state:{geraldoRound, NFTRound}})}}>Calculate</Button>
      </Form>
    </Container>
  );
};

export default QuincyNFTPage;
