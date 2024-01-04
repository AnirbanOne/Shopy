const express = require("express");
require('dotenv').config();
const router = express.Router();
const stripe = require("stripe")(process.env.SECRET_KEY);


router.post("/", async (req, res) => {
  const { cart, total } = req.body;

  const lineItems = cart.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: { 
        name:item.title,
        images:[item.image],
      },
      unit_amount: Math.round((item.price * item.amount) * 100),
    },
    quantity: item.amount,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.SUCCESS_URL}/success`,
    cancel_url: `${process.env.SUCCESS_URL}/fail`,
  });

  res.json({ id: session.id });
});

module.exports = router;
