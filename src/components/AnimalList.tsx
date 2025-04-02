import { IAnimal } from "../models/IAnimal";
import AnimalCard from "./AnimalCard";
import styles from "../styles/AnimalList.module.scss";

interface AnimalListProps {
  animals: IAnimal[];
}

function AnimalList({ animals }: AnimalListProps) {
  return (
    <div className={styles["animal-list"]}>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}

export default AnimalList;
