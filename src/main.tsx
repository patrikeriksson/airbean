import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

// TODO //
// Add products to cart using Redux store - Done? Somewhat.
// Clean up cart
// Remove product from cart

// Send order with fetch, reutrn ETA and orderNr
// When order is sent Redux store clears

// If you placed an order and go to the view to see your order, a request must be made to the API
// to get back how many minutes are left. If the order is delivered, "No active order exists" should be displayed.

// Loading page
// More animations
// Show number of items in cart on cart icon

// EXTRA
// Turn hamburger into X when open
// Hide cart when menu is open and vice versa
