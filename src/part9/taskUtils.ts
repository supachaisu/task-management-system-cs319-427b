import type { Task } from "../part1-8.ts";

export function calculateTotalCompletedTasks(tasks: Task[]): number {
  return tasks.filter((task) => task.completed).length;
}
