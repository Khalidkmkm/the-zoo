import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";
import AnimalList from "../components/AnimalList";

function Home() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnimals();
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    };

    fetchData();
  }, []);

  return <AnimalList animals={animals} />;
}

export default Home;
