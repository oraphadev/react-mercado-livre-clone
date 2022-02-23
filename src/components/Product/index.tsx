import React from 'react';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';
import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

function Product() {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

function WarrantySection() {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">
            Compra garantida com o Lorem Ipsum
          </p>

          <p className="description">
            Receba o produto que está esperando ou devolvemos o seu dinheiro
          </p>
        </span>

        <span>
          <p className="title">
            Garantia do vendedor
          </p>

          <p className="description">
            Sem garantia
          </p>
        </span>
      </div>

      <a href="/">Saiba mais sobre a garantia</a>
    </Section>
  );
}

function Info() {
  return (
    <Description>
      <h2>
        Descrição
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempora debitis nemo culpa quasi nostrum provident,
        quas corrupti maiores blanditiis id perspiciatis,
        quibusdam quo dolorem mollitia,
        minus asperiores vero autem nobis?
        <br />
        <br />
        Itens inclusos: <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ab, sequi atque? Maxime molestiae praesentium eos.
        Cumque temporibus repellendus vel cupiditate perferendis ex,
        minima facere consectetur inventore ipsam aspernatur dolores vitae similique.
        Natus soluta quam porro aliquid labore! Natus, nemo voluptas?
      </p>
    </Description>
  );
}

export default Product;
