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

export class PriorityTask extends Task {
  priority: "low" | "medium" | "high";

  constructor(
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    completed = false
  ) {
    super(title, description, completed);
    this.priority = priority;
  }

  override markCompleted(): void {
    super.markCompleted();
    console.log(`Priority task "${this.title}" completed.`);
  }
}
