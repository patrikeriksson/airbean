import { CoffeeResponse } from "../types/Coffee";

export const fetchCoffees = async (): Promise<CoffeeResponse> => {
  const response = await fetch(
    "https://airbean-9pcyw.ondigitalocean.app/api/beans/"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coffees");
  }
  return response.json();
};
