---
title: Mastering Async Fetching in Svelte 5 - A Practical Guide
author: Dev Gaurav Jatt
pubDatetime: 2025-01-15T12:35:00Z
modDatetime: 2025-01-15T12:35:00Z
slug: async-fetching-in-svelte-5
featured: true
draft: false
tags:
  - svelte
  - sveltekit
  - fetching
description: Learn how to handle asynchronous data fetching outside the load function in Svelte 5 using a custom resource function, with full control over reactivity and error handling.
---

## Table of contents

## Introduction

When building web applications, handling asynchronous data fetching efficiently is crucial for creating a seamless user experience. In SvelteKit, it’s common practice to use the `load` function for fetching data. While `load` works well for most server-side rendering (SSR) scenarios, there are instances where fetching data outside of it provides better control over race conditions, error handling, and client-side interactions. This guide explores how you can implement async fetching in Svelte 5 using a custom resource function, empowering you to manage dynamic data outside the `load` function.

### Why Fetch Outside the `load` Function?

The `load` function in SvelteKit is designed to handle SSR and initial data fetching. However, when SSR isn’t required, or when you want more granular control over how data is fetched and displayed, using a custom approach outside the `load` function is preferable. This approach ensures flexibility in managing data updates, retries, and user-triggered fetches without tightly coupling them to the app’s lifecycle.

### Creating a Custom Resource Function

The custom resource function in Svelte 5 allows you to wrap asynchronous calls and create reactive signals. Here's how you can build one:

```javascript
// resource.svelte.ts

export let resource = <T>(
    fn: () => Promise<T>,     // Function to fetch data
    initialValue?: T          // Optional initial value
) => {
    const _rune = $state<{ value: T | undefined }>({
        value: initialValue
    });

    $effect(() => {
        fn().then((data) => {
            _rune.value = data;  // Update value once data is fetched
        });
    });

    return _rune;
};
```

### How It Works

- **Parameter `fn`**: A function that returns a promise for fetching data asynchronously.
- **Initial Value**: An optional initial value that can be used to show placeholder content while fetching.
- **Reactive Updates**: The `$effect` hook ensures that the data is updated automatically once the promise resolves, making it simple to handle reactivity.

### Using the Resource Function in a Component

Here’s how you can use the `resource` function in your Svelte component to fetch and display data:

```javascript
import { resource } from "$lib/resource.svelte";

const todo =
  resource <
  Todo >
  (() =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response =>
      response.json()
    ));
```

In your component’s markup, you can display the fetched data like this:

```svelte
{#if todo.value}
  <p>{todo.value.title}</p>
{/if}
```

### Comparison with Other Frameworks

- **React**: Libraries like React Query provide similar functionality by creating hooks for data fetching.
- **Vue**: The `watch` API in Vue allows reactive handling of async calls.
- **SolidJS**: The `createResource` function in SolidJS serves a purpose similar to the `resource` function in this guide.
- **Angular**: Angular 19 introduces a resource-based approach with better async handling in components.

### Conclusion

By fetching data outside the `load` function in Svelte 5, you gain better control over reactivity, error management, and dynamic updates. This approach, inspired by patterns from other modern frameworks, enhances flexibility in building interactive client-side applications. While the `load` function is perfect for SSR-centric apps, this method shines when SSR is not a requirement. Hopefully, a built-in `$resource` feature will be part of Svelte’s future versions to simplify async data handling further.

Ready to level up your Svelte development? Try implementing this resource function and experience smoother async fetching!
