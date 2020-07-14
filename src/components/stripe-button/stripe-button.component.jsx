import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey='pk_test_51H4l4YGvXEvDEvFniGjTU4e62PZVQg5gdRtBFrLZdLIjfrKn5HF8bPlGuJ7sDKxa4DnJZgLtBhstSEvGwGDNm3aE00uYVONnkk'
const onToken = token =>{
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton