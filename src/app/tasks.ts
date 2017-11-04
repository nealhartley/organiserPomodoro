export class Task {
  id: number;
  task: string;

  constructor(text) {
    this.task = text;
  }

  public print() {
    console.log('1');
  }
}
