const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  // try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
      // statement_descriptor_suffix : "Payment using Stripe",
      automatic_payment_methods:{
        enabled:true
      },
    });

    response.status(202).send({
      clientSecret: paymentIntent.client_secret,
    });
  // } catch (error) {
  //   console.error("Error creating Payment Intent:", error);
  //   response.status(500).json({error: "Failed to create Payment Intent"});
  // }
});

// - Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api//