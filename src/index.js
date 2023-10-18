
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Produit from './Produit';
import Panier from './Panier';


//la liste de produits (la Base de données)
const produits = [
  {
    id: 1,
    nom: 'Écran 24"',
    image: 'images/ecran-asus.webp',
    description: 'Écran Asus 24"',
    prix: 109.99
  },
  {
    id: 2,
    nom: 'Ordinateur',
    image: 'images/hp.webp',
    description: 'Ordinateur de bureau HP',
    prix: 399.99
  },
  {
    id: 3,
    nom: 'SSD Nvme',
    image: 'images/ssd.jpg',
    description: 'SSD Nvme Kingston 1TB KC3000',
    prix: 139.99
  }
];



function App() {
  
  // les états:
  //1) le tableux 'listeProduits' est formé au moment d'ajout du produit au panier qui est vide par défaut
  const [listeProduits, setListeProduits] = useState([]);
  //2) la variable booléen 'estPanierCache' est un interrupteur à bascule qui est true par défaut
  const [estPanierCache, setEstPanierCache] = useState(true);

  return (
    <Container>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><img src="images/logo.webp" alt="logo.webp" width="200"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="primary" className='mx-5' onClick={() => setEstPanierCache(!estPanierCache)}>
                {
                  estPanierCache ? 
                  'Afficher le panier (' + listeProduits.length + ')' : 
                  'Masquer le panier'
                }
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main>
        <h1 className='my-3'>Mon catalogue</h1>
        <Row>
          {produits.map((produit) =>
            <Col className='colonne' key={produit.id}>
              <Produit produit = {produit} onAjouterAuPanier = {(produit) => {setListeProduits([...listeProduits, produit])}} />
            </Col>
          )}
        </Row>
        {!estPanierCache && 
          <div>
            <h2 className='my-3'>Mon panier</h2>
            <Panier produits={listeProduits} onViderPanier={()=>setListeProduits([])}/>
          </div>
        }
        </main>
    </Container>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);