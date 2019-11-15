import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {igKey}:{props.ingredients[igKey]}
        </span>
      </li>
    )
  })

  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  )
}

export default orderSummary