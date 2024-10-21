# Task Management System

The system allows the team to manage tasks, assign tasks to team members, and track completion status.

## Supachai Suwanthip 1660708619 CS319/ 427B

The part 1–8 answers are in [/src/part1-8.ts](src/part1-8.ts).

The part 9 answers are in [/src/part9/index.ts](src/part9/index.ts) and [/src/part9/taskUtils.ts](src/part9/taskUtils.ts).

## Part 1: Classes and Object-Oriented Programming

Use the `static` keyword to create the **class property** [`taskCount`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L4) that counts the number of tasks created.

In the class constructor, [increment the `taskCount` property by 1](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L15) to track the number of tasks created.

Then create the **static method** [`totalTasks()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L26) to return the total number of tasks.

## Part 2: Inheritance and Polymorphism

Create a new class `PriorityTask` that extends `Task` and adds a new property [`priority`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L34). Use the [`override` keyword to override the `markCompleted()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L46) method to log a message when a priority task is completed.

## Part 3: Type Annotations and Interfaces

In the [`assignTask()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L60) function, I use type annotations to ensure that the `member` argument is of type `TeamMember` and the `task` argument is of type `Task`. Then use the `push()` method to add the task to the team member's tasks array.

## Part 4: Generics

Use `<T>` syntax to create a generic [`Queue`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L66) class that can store any type of data.

I use the `Array` type to store the items in the `Queue` class.

I use the [`private`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L67) keyword so that the `items` array can only be accessed within the `Queue` class.

I use the [`readonly`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L67) keyword so that the `items` array cannot be re-assigned.

I use the [`push()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L70) method to add an item to the `items` array.

I use the [`shift()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L74) method to remove the first item from the `items` array.

## Part 5: Functions and Higher-Order Functions

In the [`markAsUrgent`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L86) implementation, I use a higher-order function to create a new function that updates the priority of a task to "high".

In the passed `updateFn`, I use the [`instanceof`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L87) keyword to check if the task is an instance of the [`PriorityTask`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L33) class. If it is, the function updates the priority to "high". If it is not, the function [throws an error](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L90).

## Part 6: Asynchronous Programming

I use the `async` keyword to create an asynchronous function [`fetchTasks()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L96).

I use the [`await`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L98) keyword to wait for the `fetchTasksFromDb()` function to resolve.

I use the `try...catch` statement to handle any errors that occur in the `fetchTasks()` function.

If there is an error, [log the error message to the console and return an empty array](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L100-L101).

I use the [`Math.random()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L106) method to randomly create a success or failure scenario.

To simulate a database call, I use [`Promise.resolve()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L112) to return a promise that resolves to an array of tasks.

## Part 7: Array Methods

I use the [`map()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L126) method to create a new array of tasks with the `isCompleted` property set to `true`.

I use the [`filter()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L128) method to create a new array of tasks that are not completed.

I use the [`reduce()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L130) method to count the number of completed tasks.
In the reduce callback function, I use the [ternary operator](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L131) to check if a task is completed and return `1` if it is, otherwise return `0`.

## Part 8: Error Handling

I use the [`try...catch`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L137) statement to handle any errors that occur in the `parseTaskData()` function.

I use the `console.error()` method to log the error message.

I use the `return` statement to [return an error message](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L147) if an error occurs.

## Part 9: Modules and Imports/Exports

In the [`calculateTotalCompletedTasks()`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part9/taskUtils.ts#L3) function, I use the `filter()` method to create a new array of tasks that are completed, then use the `length` property to count the number of completed tasks.

I use the `export` keyword to export the `calculateTotalCompletedTasks()` function so that it can be imported in the `index.ts` file.

In the [`index.ts`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part9/index.ts) file, I use the `import` keyword to import the `calculateTotalCompletedTasks()` function from the `taskUtils.ts` file.

I also import the [`Task`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L3) and [`PriorityTask`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts#L33) classes from the [`part1-8.ts`](https://github.com/supachaisu/task-management-system-cs319-427b/blob/64717298da3fed7ac2ffe13850850b4ba332fbc9/src/part1-8.ts) file to create instances of tasks.
