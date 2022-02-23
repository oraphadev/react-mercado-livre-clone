import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../partials/Header';
import Product from '../Product';
import Footer from '../partials/Footer';

export default function Layout() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>

      <Footer />
    </Container>
  );
}
