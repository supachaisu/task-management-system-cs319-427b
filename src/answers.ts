// Part 1: Classes and Object-Oriented Programming -------------------

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

// Part 2: Inheritance and Polymorphism ------------------------------

export class PriorityTask extends Task {
  priority: "low" | "medium" | "high";

  constructor(
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    completed = false,
  ) {
    super(title, description, completed);
    this.priority = priority;
  }

  override markCompleted(): void {
    super.markCompleted();
    console.log(`Priority task "${this.title}" completed.`);
  }
}

// Part 3: Type Annotations and Interfaces ---------------------------

interface TeamMember {
  name: string;
  role: string;
  tasks: Task[];
}

export function assignTask(member: TeamMember, task: Task): void {
  member.tasks.push(task);
}

// Part 4: Generics --------------------------------------------------

class Queue<T> {
  private readonly items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}
