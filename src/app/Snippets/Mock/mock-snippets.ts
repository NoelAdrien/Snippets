import { Snippet } from '../Model/Snippet';
import { LANGAGES } from './mock-langages';

export const SNIPPETS: Snippet[] = [
  {
    id: 1, title: 'Create angular class', keywords: 'angular class',
    langage: LANGAGES.find(x => x.code === 'ang'), code: 'code snippet', isPublic: false
  },
  {
    id: 2, title: 'Javascript class', keywords: 'javascript',
    langage: LANGAGES.find(x => x.code === 'js'), code: 'js code snippet', isPublic: true
  },
  {
    id: 3, title: 'Javascript class power', keywords: 'javascript class power',
    langage: LANGAGES.find(x => x.code === 'js'), code: 'js code snippet 1', isPublic: true
  },
  {
    id: 4, title: 'Javascript declaration variable', keywords: 'javascript',
    langage: LANGAGES.find(x => x.code === 'js'), code: 'var test = "my variable";', isPublic: true
  },
  {
    id: 5, title: 'angular @Ngmodule declaration', keywords: 'javascript angular',
    langage: LANGAGES.find(x => x.code === 'js'), code: '@NgModule({  imports: [        CommonModule,        FormsModule,        RouterModule.forChild(snippetRoutes)      ],      exports: [],      declarations: [        UserSnippetComponent,        AddSnippetComponent,        SnippetDetailsComponent,        SearchSnippetsComponent      ],      providers: [SnippetService]    })'
    , isPublic: true
  },
  {
    id: 6, title: 'Angular tab declaration', keywords: 'javascript tab',
    langage: LANGAGES.find(x => x.code === 'js'), code: 'stringTab: string[]', isPublic: true
  },
];

