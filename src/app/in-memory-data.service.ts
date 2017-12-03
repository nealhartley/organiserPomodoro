import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 0, task: 'Leisure' },
    ];
    return {tasks};
  }
}
