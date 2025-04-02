import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import styles from "../styles/AnimalCard.module.scss";

interface AnimalCardProps {
  animal: IAnimal;
}

function AnimalCard({ animal }: AnimalCardProps) {
  const navigate = useNavigate();

  const storedAnimal: IAnimal = JSON.parse(localStorage.getItem(`animal_${animal.id}`) || "null") || animal;

  
  const hoursSinceFed = storedAnimal.lastFed
    ? (Date.now() - new Date(storedAnimal.lastFed).getTime()) / 3600000
    : Infinity;

  let hungerStatus = styles.fed;
  if (hoursSinceFed >= 3) {
    hungerStatus = styles.hungry;
  } else if (hoursSinceFed >= 2) {
    hungerStatus = styles.warning;  
  }

  return (
    <div className={`${styles.animalCard} ${hungerStatus}`} onClick={() => navigate(`/animal/${animal.id}`)}>
      <h3>{animal.name}</h3>
      <div className={styles.imageContainer}>
        <img src={animal.imageUrl} alt={animal.name} className={styles.animalImage} />
      </div>
    </div>
  );
}

export default AnimalCard;
