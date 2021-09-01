import asyncHandler from 'express-async-handler'
import Stripe from 'stripe'
import { uuid } from 'uuidv4';

const stripe = new Stripe('sk_test_51Ix0jGDU4maXsdFIcPHEEuvRS7kHr3uOpfQuUUDbX3psyxQyr4gEPWbEpGts0Mh8B9cWC8ppH21YqRJRrMQEgnN800TK1e8G9O')


const createCheckout = asyncHandler( async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { paymentPlan, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: paymentPlan.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${paymentPlan.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
})

export {createCheckout}