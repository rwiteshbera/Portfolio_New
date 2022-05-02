import React from 'react';
import { ChakraProvider, VStack} from '@chakra-ui/react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import {theme} from "./Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack bg="brand.100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
