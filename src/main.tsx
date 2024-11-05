import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// TODO //
// Cart component
// Loading page

// Add products to cart using Redux store
// Send order with fetch, reutrn ETA and orderNr
// When order is sent Redux store clears
// If you placed an order and go to the view to see your order, a request must be made to the API
// to get back how many minutes are left. If the order is delivered, "No active order exists" should be displayed.

// Aniamtions (and turn hamburger into X when open)
// Number of items in cart on cart icon
// Clean up Header component and break it up into multiple components

// EXTRA
// Option to add multiple of the same product to cart
// Remove product from cart
