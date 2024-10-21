import { PriorityTask, Task } from "../part1-8.ts";
import { calculateTotalCompletedTasks } from "./taskUtils.ts";

const tasks: Task[] = [
  new Task("Task 1", "Description 1"),
  new PriorityTask("Task 2", "Description 2", "medium"),
  new Task("Task 3", "Description 3", true),
  new PriorityTask("Task 4", "Description 4", "low", true),
];

const totalCompletedTasks = calculateTotalCompletedTasks(tasks);

console.log(`Total completed tasks: ${totalCompletedTasks}`);
