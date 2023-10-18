import React from 'react';
import { Table, Button } from 'react-bootstrap';

function Panier({produits, onViderPanier}){

  let index = 0; /* note: clé artificielle pour React pour inserer les produits au panier, 
                    on ne peut pas utiliser {produit.id} car on a une erreur au console
                    quand on choit le même produit quelques fois */
  
  //le calcul du prix total du panier
  let prixTotal = 0;
  produits.forEach(produit => { prixTotal += produit.prix});

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => 
            <tr key={index++}>  
              <td>{produit.nom}</td>
              <td>{produit.prix} $</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className='my-3'>Prix total: {prixTotal.toFixed(2)} $</div>
      <Button variant="danger" onClick={() => onViderPanier()}>Vider le panier</Button>
    </div>
  );
}
export default Panier;