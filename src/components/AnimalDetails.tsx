import { IAnimal } from "../models/IAnimal";
import styles from "../styles/AnimalDetails.module.scss";

interface AnimalDetailsProps {
  animal: IAnimal;
  onFeed: () => void;
}

function AnimalDetails({ animal, onFeed }: AnimalDetailsProps) {

  let hoursSinceFed = Infinity;
  if (animal.lastFed) {
    const lastFedTime = new Date(animal.lastFed).getTime();
    const now = Date.now();
    hoursSinceFed = (now - lastFedTime) / 3600000;
  }

  
  let hungerStatus = styles.fed; 
  if (hoursSinceFed >= 3) {
    hungerStatus = styles.hungry;
  } else if (hoursSinceFed >= 2) {
    hungerStatus = styles.warning; 
  }

  return (
    <div className={`${styles.animalDetails} ${hungerStatus}`}>
      <h1 className={styles.title}>{animal.name}</h1>

      <div className={styles.imageContainer}>
        <img src={animal.imageUrl} alt={animal.name} className={styles.animalImage} />
      </div>

      <p><strong>Latinskt namn:</strong> {animal.latinName}</p>
      <p><strong>Födelseår:</strong> {animal.yearOfBirth}</p>
      <p><strong>Beskrivning:</strong> {animal.longDescription}</p>
      <p><strong>Senast matad:</strong> {animal.lastFed ? new Date(animal.lastFed).toLocaleString() : "Ingen data"}</p>

      
      {hoursSinceFed >= 2 ? (
        <button onClick={onFeed} className={styles.feedButton}>Mata djur</button>
      ) : (
        <p className={styles.fedMessage}>✅ Djuret är fortfarande mätt!</p>
      )}
    </div>
  );
}

export default AnimalDetails;
