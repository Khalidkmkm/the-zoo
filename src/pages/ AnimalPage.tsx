import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalById } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";
import AnimalDetails from "../components/AnimalDetails";

function AnimalPage() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<IAnimal | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchAnimal = async () => {
      try {
        const storedAnimal = localStorage.getItem(`animal_${id}`);
        const data = storedAnimal ? JSON.parse(storedAnimal) : await getAnimalById(id);
        setAnimal(updateHungerStatus(data));
      } catch (error) {
        console.error("Error fetching animal:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  const feedAnimal = () => {
    if (!animal) return;

    const updatedAnimal = { ...animal, isFed: true, lastFed: new Date().toISOString() };
    setAnimal(updatedAnimal);
    localStorage.setItem(`animal_${id}`, JSON.stringify(updatedAnimal));
  };

  const updateHungerStatus = (animal: IAnimal): IAnimal => {
    if (!animal.lastFed) return { ...animal, isFed: false };

    const hoursSinceFed = (Date.now() - new Date(animal.lastFed).getTime()) / 3600000;
    return { ...animal, isFed: hoursSinceFed < 3 };
  };

  if (!animal) return <p>Hämtar djurinfo...</p>;

  return <AnimalDetails animal={animal} onFeed={feedAnimal} />;
}

export default AnimalPage;
