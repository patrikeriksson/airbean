import CoffeeList from "../../components/CoffeeList";
import Header from "../../components/Header";
import "../../styles/CoffeeMenu.css";

export default function CoffeeMenu() {
  return (
    <>
      <Header />
      <main>
        <h1 className="coffee-menu-title">Meny</h1>
        <CoffeeList />
      </main>
      <footer />
    </>
  );
}
