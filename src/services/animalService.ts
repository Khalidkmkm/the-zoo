import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async (): Promise<IAnimal[]> => {
  try {
    return await get<IAnimal[]>(BASE_URL);
  } catch (error) {
    console.error("Fel vid hämtning av djur:", error);
    return [];
  }
};

export const getAnimalById = async (id: string): Promise<IAnimal | null> => {
  try {
    const animal = await get<IAnimal>(`${BASE_URL}/${id}`);
    console.log("Fetched animal:", animal);
    return animal;
  } catch (error) {
    console.error(`Fel vid hämtning av djur med ID ${id}:`, error);
    return null;
  }
};
