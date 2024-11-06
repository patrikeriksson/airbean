import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Coffee } from "../../types/types";
import { fetchCoffees } from "../../api/coffeeApi";
import { addToCart } from "../../store/slices/cartSlice";
import { AppDispatch } from "../../store/store";

const CoffeeList: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getCoffees = async () => {
      try {
        const data = await fetchCoffees();
        setCoffees(data.menu);
      } catch (error) {
        console.error("Error loading coffees:", error);
        setError("Failed to load coffees.");
      }
    };
    getCoffees();
  }, []);

  const handleAddToCart = (coffee: Coffee) => {
    dispatch(addToCart({ coffee, quantity: 1 }));
  };

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {coffees.map((coffee) => (
        <li className="coffee" key={coffee.id}>
          <button
            className="add-button"
            onClick={() => handleAddToCart(coffee)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84781 7.06156L8.84781 1.41023C8.84781 0.896475 8.42521 0.473868 7.91145 0.473868C7.39769 0.473868 6.97509 0.896474 6.97509 1.41023L6.97508 7.06156L1.32375 7.06156C0.809997 7.06156 0.38739 7.48417 0.387389 7.99793C0.387389 8.25481 0.49097 8.49097 0.660841 8.66084C0.830712 8.83071 1.06688 8.93429 1.32375 8.93429L6.97508 8.93429L6.97508 14.5856C6.97508 14.8425 7.07866 15.0787 7.24853 15.2485C7.41841 15.4184 7.65457 15.522 7.91145 15.522C8.4252 15.522 8.84781 15.0994 8.84781 14.5856L8.84781 8.93429L14.4991 8.93429C15.0129 8.93429 15.4355 8.51168 15.4355 7.99792C15.4355 7.48417 15.0129 7.06156 14.4991 7.06156L8.84781 7.06156Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="coffee__wrapper">
            <div className="coffee__content">
              <h2 className="coffee__title">{coffee.title}</h2>
              <h2 className="coffee__price">{coffee.price} kr</h2>
            </div>
            <p className="coffee__description">{coffee.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CoffeeList;
