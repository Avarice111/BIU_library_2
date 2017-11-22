import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CategoryData implements InMemoryDbService
{
    createDb()
    {
        const categories = [
          {id: 1, name: 'Nauka', subCateogry: ['Programowanie', 'Chemia']},
          {id: 2, name: 'Historia', subCateogry: ['Średniowiecze', 'Renesans', 'Współczesność']},
          {id: 3, name: 'Sztuka', subCateogry: ['Średniowiecze', 'Renesans', 'Współczesność']}
        ];

        return {categories};
    }
}