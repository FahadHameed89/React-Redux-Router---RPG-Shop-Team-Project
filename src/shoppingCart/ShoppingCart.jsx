import React, { useState } from "react";
import { useSelector } from 'react-redux';

import CartItem from './ShoppingCartItem';

export default () => {
  const products = useSelector(state => state.prodcuts);
  const cart = useSelector(state => state.cart);

  return (
    <main>
      <table>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Remove</th>
        </tr>

      </table>
    </main>
  )
}
