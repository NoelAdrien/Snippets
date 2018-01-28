
import { Langages } from '../Model/Langages';

// Snippet global class
export class Snippet {
  id: number;
  title: string;
  keywords: string;
  langage: Langages;
  code: string;
  isPublic: boolean;
}
