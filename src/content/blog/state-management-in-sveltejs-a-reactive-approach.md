---
author: Dev Gaurav Jatt
pubDatetime: 2024-12-17T18:21:00Z
modDatetime: 2024-12-17T18:21:00Z
title: State Management in Svelte.js - A Reactive Approach
slug: state-management-in-sveltejs-a-reactive-approach
featured: true
draft: false
tags:
  - svelte
  - sveltekit
description: Discover how to manage state in Svelte.js using reactive variables, stores, and derived stores for building performant and maintainable web applications.
---

## Table of contents

# Effective State Management in Svelte.js

State management is a crucial aspect of application development, allowing you to track and update application data as it changes. Efficient state management can lead to better performance, scalability, and maintainability. In this post, we will explore the benefits of effective state management and dive into several key concepts in Svelte.js, such as Props, the Context API, and Svelte stores.

## Benefits of Effective State Management

There are numerous benefits to effectively managing your application state, including the following:

- **Improved Performance**: Efficient state management optimizes rendering and minimizes unnecessary re-renders, enhancing overall performance.
- **Enhanced Scalability**: A well-organized state management approach makes the application scalable, enabling it to handle increasing complexity and user interactions.
- **Maintainability**: Effective state management promotes clean, maintainable code, making it easier to debug and maintain over time.
- **Reusable Components**: Proper state management allows components to be decoupled from specific data dependencies, making them more flexible and reusable.

## Creating a New Svelte Project

Let’s get started by creating a new Svelte project. Open your terminal, navigate to your working directory, and run the following commands:

```bash
npx degit sveltejs/template svelte-project
cd svelte-project
npm install
```

## Using Svelte Props and Context API

In Svelte applications, **props** and the **Context API** are powerful tools for managing state and data flow.

### Passing State Down to Child Components with Props

Props are values passed from a parent component to a child component, allowing parent components to communicate with their children.

Let’s consider an example where we want to accept a username as input in our main component and pass it to a child component using props.

` file:// ChildComponent.svelte`

```svelte
<script>
  export let username;
</script>

<div>
  <h2>Child Component</h2>
  <h3>User Info</h3>
  <p>Username: {username}</p>
</div>
```

` file:// App.svelte`

```svelte
<script>
  import ChildComponent from "./ChildComponent.svelte";
  let username = "";

  function handleChange(event) {
    username = event.target.value;
  }
</script>

<body>
  <div>
    <h1>Parent Component</h1>
    <input type="text" placeholder="Enter your username" on:input="{handleChange}" />
    <ChildComponent username="{username}" />
  </div>
</body>

<style>
  body {
    background-color: darkcyan;
  }
</style>
```

In this example:

1. The `ChildComponent` accepts the `username` prop.
2. The parent component updates the `username` variable through an input field and passes it to the child component.

### Using Context API to Share State Across Components

The **Context API** allows you to share state between components without passing it down through props at every level of the component tree.

Let’s share user information (full name, username, email, and gender) from the main component to the child component using the Context API.

` file:// App.svelte`

```svelte
<script>
  import { setContext } from "svelte";
  import ChildComponent from "./ChildComponent.svelte";

  let user = {
    fullName: "Felicia Oke",
    username: "Felicia123",
    email: "Felicia123@gmail.com",
    gender: "Female",
  };

  setContext("userInfo", user);
</script>

<div>
  <h1>Parent Component</h1>
  <ChildComponent />
</div>
```

` file:// ChildComponent.svelte`

```svelte
<script>
  import { getContext } from "svelte";
  let user = getContext("userInfo");
</script>

<div>
  <h2>Child Component</h2>
  <h3>User Info</h3>
  <p>Fullname: {user.fullName}</p>
  <p>Username: {user.username}</p>
  <p>Email: {user.email}</p>
  <p>Gender: {user.gender}</p>
</div>
```

In this example:

- The `App.svelte` component shares the user information using `setContext`.
- The `ChildComponent.svelte` accesses the user information using `getContext`.

## Using Svelte Stores

Svelte stores provide a way to manage and share state across components in a more global fashion. You can use **writable**, **readable**, and **derived** stores to handle different types of data.

### Writable Store

A **writable** store holds a mutable state that can be updated from anywhere in the application.

` file:// store.js`

```js
import { writable } from "svelte/store";

export const WeekDay = writable("sunday");
```

` file:// Component.svelte`

```svelte
<script>
  import { WeekDay } from "./store.js";
</script>

<p>The current day is {$WeekDay}</p>

<button on:click={() => WeekDay.set('Friday')}>Change to Friday</button>
```

### Readable Store

A **readable** store holds an immutable state that cannot be modified directly.

` file:// user.js`

```js
import { readable } from "svelte/store";

export const user = readable({ name: "John", age: 30 });
```

` file:// Component.svelte`

```svelte
<script>
  import { user } from "./user.js";
</script>

<p>The user's name is {$user.name} and the age is {$user.age}.</p>
```

### Derived Store

A **derived** store computes a value based on one or more other stores.

` file:// store.js`

```js
import { readable, derived } from "svelte/store";

export const user = readable({ name: "John", age: 30 });

export const formattedUser = derived(user, $user => {
  return {
    fullName: $user.name,
    birthYear: new Date().getFullYear() - $user.age,
  };
});
```

` file:// Component.svelte`

```svelte
<script>
  import { formattedUser } from "./store.js";
  let userInformation;
  formattedUser.subscribe((value) => {
    userInformation = value;
  });
</script>

<div>
  <p>Full Name: {userInformation.fullName}</p>
  <p>Birth Year: {userInformation.birthYear}</p>
</div>
```

## Building a Todo-list with Svelte Store

Let’s create a simple todo list and manage the state using Svelte stores.

` file:// todos.js`

```js
import { writable } from "svelte/store";

export const todos = writable([
  { id: 1, text: "Learn Svelte state management", completed: false },
  { id: 2, text: "Build a Todo-list with state management", completed: false },
]);
```

` file:// TodoList.svelte`

```svelte
<script>
  import { todos } from "./todos.js";
  import TodoItem from "./TodoItem.svelte";
  $: todoList = $todos;
</script>

<div>
  <h1>Todo List</h1>
  {#each todoList as todo}
    <TodoItem {todo} />
  {/each}
</div>
```

` file:// TodoItem.svelte`

```svelte
<script>
  export let todo;
</script>

<div>
  <input type="checkbox" bind:checked="{todo.completed}" />
  <span style="text-decoration: {todo.completed ? 'line-through' : 'none'}">
    {todo.text}
  </span>
</div>
```

` file:// AddTodo.svelte`

```svelte
<script>
  import { todos } from "./todos.js";
  let newTodo = "";

  function addTodo() {
    todos.update((existingTodos) => [
      ...existingTodos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    newTodo = "";
  }
</script>

<div>
  <input type="text" bind:value="{newTodo}" placeholder="Enter new todo" />
  <button on:click="{addTodo}">Add</button>
</div>
```

` file:// App.svelte`

```svelte
<script>
  import TodoList from "./TodoList.svelte";
  import AddTodo from "./AddTodo.svelte";
</script>

<body>
  <main>
    <TodoList />
    <AddTodo />
  </main>
</body>

<style>
  body {
    background-color: darkcyan;
  }
  main {
    padding: 20px;
    margin-left: 30%;
  }
</style>
```

Now, open your browser at `http://localhost:8080/` to see the application in action!

## Conclusion

State management is crucial for building efficient and maintainable applications. In Svelte, you can manage state effectively using reactive variables, props, the Context API, and Svelte stores. By leveraging these techniques, you can handle global state and local component data with ease, improving performance, scalability, and maintainability in your application.

We demonstrated these concepts by building a simple todo list app, showing how to use Svelte's built-in tools for efficient state management. Happy coding!

```

This Markdown file is ready to be used for a blog post. Feel free to adjust any part to match your specific needs!
```
