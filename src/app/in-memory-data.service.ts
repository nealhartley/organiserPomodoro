import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { task: 'Zero' },
      { task: 'Mr. Nice' },
      { task: 'Narco' },
      { task: 'Bombasto' },
      { task: 'Celeritas' },
      { task: 'Magneta' },
      { task: 'RubberMan' },
      { task: 'Dynama' },
      { task: 'Dr IQ' },
      { task: 'Magma' },
      { task: 'Tornado' }
    ];
    return {tasks};
  }
}
