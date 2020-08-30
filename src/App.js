import React from 'react';
import {GlobalStyle} from './Components/GlobalStyle';
import {Navbar} from './Components/Navbar';
import {Menu} from './Components/Menu';
import {ModalItem} from './Components/ModalItem';

function App() {

  const [openItem,setOpenItem]=React.useState(null);


  return (
    <>
    <GlobalStyle/> 
   
<Navbar></Navbar>
<Menu setOpenItem={setOpenItem}></Menu>
 <ModalItem openItem={openItem} setOpenItem={setOpenItem}></ModalItem>
</>
  );
};

export default App;
