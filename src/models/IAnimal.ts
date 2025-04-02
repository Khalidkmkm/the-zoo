export interface IAnimal {
  id: string;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  isFed: boolean;
  lastFed?: string | null;
  
}

