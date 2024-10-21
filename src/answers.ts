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

// Part 5: Functions and Higher-Order Functions ----------------------

function createTaskUpdater(updateFn: (task: Task) => void) {
  return (task: Task) => {
    updateFn(task);
  };
}

const markAsUrgent = createTaskUpdater((task) => {
  if (task instanceof PriorityTask) {
    task.priority = "high";
  } else {
    throw new Error("Task is not a PriorityTask");
  }
});

// Part 6: Asynchronous Programming ----------------------------------

async function fetchTasks(): Promise<Task[]> {
  try {
    return await fetchTasksFromDb();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchTasksFromDb(): Promise<Task[]> {
  const success = Math.random() > 0.5;

  if (!success) {
    throw new Error("Failed to fetch tasks from database");
  }

  return await Promise.resolve([
    new Task("Task 1", "Description 1"),
    new PriorityTask("Task 2", "Description 2", "medium"),
  ]);
}

// Part 7: Array Methods ---------------------------------------------

const tasks = [
  new Task("Task 1", "Description 1"),
  new PriorityTask("Task 2", "Description 2", "medium"),
  new Task("Task 3", "Description 3", true),
];

const taskTitles = tasks.map((task) => task.title);

const incompleteTasks = tasks.filter((task) => !task.completed);

const completedTasksCount = tasks.reduce((count, task) => {
  return count + (task.completed ? 1 : 0);
}, 0);
