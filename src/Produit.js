import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Produit({produit, onAjouterAuPanier}){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={produit.image} alt={produit.nom} />
        <Card.Body>
          <Card.Title>{produit.nom}</Card.Title>
          <Card.Text>{produit.description}</Card.Text>
          <Card.Text>{produit.prix} $</Card.Text>
          <Button variant="primary" onClick={() => onAjouterAuPanier(produit)} >
            Ajouter au panier
          </Button>
        </Card.Body>
    </Card>
  );
}

export default Produit;
