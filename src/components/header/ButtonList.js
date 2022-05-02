import React from 'react';
import {
  HStack,
  Button,
  Link as LinkChakra,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div className="button_list">
      <HStack mt="4" mr="2">
        <Link to="/">
          <Button colorScheme="pink">Home</Button>
        </Link>
        <Link to="/projects">
          <Button colorScheme="pink">Projects</Button>
        </Link>
        <LinkChakra href="https://rwiteshbera.me/" isExternal>
          {' '}
          <Button colorScheme="pink">Blogs</Button>
        </LinkChakra>
        <Button colorScheme="pink">Resume</Button>
        <Link to="/contact">
          <Button colorScheme="pink">Contact</Button>
        </Link>
      </HStack>
    </div>
  );
};

export default ButtonList;
