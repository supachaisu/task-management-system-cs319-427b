export class Task {
  static taskCount = 0;

  title: string;
  description: string;
  completed: boolean;

  constructor(title: string, description: string, completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;

    Task.taskCount++;
  }

  markCompleted(): void {
    this.completed = true;
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
  }

  static totalTasks(): number {
    return Task.taskCount;
  }
}
