import { Snippet } from '../Model/Snippet';
import { LANGAGES } from './mock-langages';

export const SNIPPETS: Snippet [] = [
  {
    id: 1, title: 'Create angular class', keywords: 'angular class',
    langage: LANGAGES.find(x => x.code === 'ang'), code: 'code snippet', isPublic: false
  },
  {
    id: 2, title: 'Javascript class', keywords: 'javascript',
    langage: LANGAGES.find(x => x.code === 'js'), code: 'js code snippet', isPublic: true
  }
];

