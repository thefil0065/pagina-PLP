// import './App.css';
// import MyButtonGroup from './Components/Button.js';
// import BasicTextFields from './Components/Search.js';
import BasicGrid from './Components/Header.js';
// import BasicGrid2 from './Components/Header2.js';
import MediaCard from './Components/Cards.js';
import Footer from './Components/footer.js';
import products from './data.json';
import MediaCard2 from './Components/MyCard.js';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {

  const [searchTerm, setTerm] = useState(""); // stato dei dati iniziale
  const [arrProds, setArrProds] = useState(products); // stato dei dati iniziale


  function Cerca(text) {

    setTerm(text);
    console.log(searchTerm);
      // const results = Data.filter(el => ( el.toLowerCase().includes(searchTerm) ));
  }

  const toggle = (value) => {
    var newArr = [];
    products.map((prodx)=> {
      if (value == "in") {
        if (prodx.availability.stock > 0 ) {
          newArr.push(prodx);
        }
      }
      if (value == "out") {
        if (prodx.availability.stock <= 0) {
          newArr.push(prodx);
        }
      }
      setArrProds(newArr);
    });
  }

  return (
    <div className="App">
      <header className="App-header">

        <BasicGrid content="text" toggle={(value) => toggle(value)} Cerca={(text) => {Cerca(text)}}/>

        <Grid container spacing={2}>
          {arrProds.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase())).map((produ) => (

          <MediaCard2 
          nome={produ.name}
          prezzo={produ.price.current.value}
          stock={produ.availability.stock}
          />
          ))}
            {/* {Data.map((el, index) => {
              return <MediaCard2 nome={el.name} prezzo={el.price.current.value} stock={el.availability.stock}/>
            })} */}
        </Grid>
        
        <Footer />

      </header>
    </div>
  );
}
    
export default App;