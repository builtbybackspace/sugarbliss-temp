import React, { useContext, useRef } from 'react';
import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

import Layout from '../components/layout';

import styled from '@emotion/styled';
import { fonts } from '../design-system';
import { sizing, colors } from '../utils';
import { Cupcake } from '../sharedTypes';

type FluidImage = { childImageSharp: {fluid: FluidObject} };

type OrderQueryProps = {
  allShopifyProduct: {
    nodes: any;
  };
};

type OrderProps = PageProps<OrderQueryProps>;

const OrderPage = ({data}: OrderProps) => {
  const { state, addItem } = useContext(SnipcartContext);
  const { userStatus, cartQuantity } = state;

  const testingRef = useRef(null);

  const addItemToCart = (item) => {
      addItem({
        id: 'PRODUCT_ID',
        name: 'Product 1',
        price: 20.00,
        alternatePrices: {
          vip: 10.00
        },
        url: '/order',
        quantity: 1,
      });
  }

  const applyDiscount = (productId) => {
    // client.checkout.addDiscount(checkoutId, discountCode);
  }

  const handleOnClick = () => {
    if (testingRef !== null) {
      testingRef.current.click();
    }
  }

  return (
    <Layout>
        {userStatus === 'SignedOut' ? (
          <button className="snipcart-customer-signin">
            <span>Login</span>
          </button>
        ) : (
          <button className="snipcart-customer-signin">
            <span>My account</span>
          </button>
        )}
        <button onClick={addItemToCart}>hi</button>
        <button className="snipcart-checkout">Click here to checkout</button>
        <button
          hidden
          ref={testingRef}
          className="snipcart-add-item"
          data-item-id="silver-stacking-ring"
          data-item-price="19.99"
          data-item-url="/order"
          data-item-name="Silver Stacking Ring"
          data-item-custom1-name="Size"
          data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
          data-item-custom1-value="7"
        >
          Add to cart
        </button>

      <button
        className="snipcart-add-item"
        data-item-id="pickup-from-store"
        data-item-price="0.00"
        data-item-url="/order"
        data-item-name="Pickup from Store"
        data-item-custom1-name="Time"
        data-item-custom1-options="9am - 10am|10am - 11am"
        data-item-custom1-value="10am - 11am"
      >
        Add Pickup
      </button>
      <button onClick={handleOnClick}>test!!!</button>
    </Layout>
  )
}

export default OrderPage;
