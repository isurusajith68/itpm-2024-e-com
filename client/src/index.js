import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51LMEvTC05RrpHY1zUINiBb70Oue9TVmbH9LoKTZKKa0Ra3a8J188Ph3kouCpSeLJUr7qCgndpWlAXwt5GVlZOLIY00SkMj6avh"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
