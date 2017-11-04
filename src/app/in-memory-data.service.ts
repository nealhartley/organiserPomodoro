import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 0, task: 'Pomodoro app' },
      { id: 1, task: 'Runescape' },
      { id: 2, task: 'Reids Site' },
      { id: 3, task: 'Moes calcs' }
    ];
    return {tasks};
  }
}
