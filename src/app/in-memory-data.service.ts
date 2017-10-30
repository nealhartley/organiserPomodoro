import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { task: 'Pomodoro app' },
      { task: 'Runescape' },
      { task: 'Reids Site' },
      { task: 'Moes calcs' }
    ];
    return {tasks};
  }
}
