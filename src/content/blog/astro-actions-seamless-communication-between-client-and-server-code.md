---
title: Astro Actions - Seamless Communication Between Client and Server Code
author: Dev Gaurav Jatt
pubDatetime: 2025-01-15T12:35:00Z
modDatetime: 2025-01-15T12:35:00Z
slug: astro-actions-seamless-communication-between-client-and-server-code
featured: true
draft: false
tags:
  - astro
  - react
  - actions
description: Astro Actions are a powerful feature in Astro that allows you to define and call backend functions with type-safety, including how to define and call actions, handle returned data, and error handling.
---

## Table of contents

## Introduction

Astro Actions are a powerful feature in Astro that allows you to define and call backend functions with type-safety, reducing the amount of boilerplate code needed compared to using API endpoints. In this blog post, we will explore the basics of Astro Actions, including how to define and call actions, handle returned data, and error handling.

### Basic Usage

Astro Actions are defined in a `server` object exported from `src/actions/index.ts`. Your actions are available as functions from the `astro:actions` module. To call an action, import `actions` and use the `actions` module to call the desired action.

### Defining an Action

To define an action, follow these steps:

1. Create a `src/actions/index.ts` file and export a `server` object.
2. Import the `defineAction()` utility from `astro:actions`, and the `z` object from `astro:schema`.
3. Use the `defineAction()` utility to define a new action. The `input` property will be used to validate input parameters with a Zod schema, and the `handler()` function includes the backend logic to run on the server.

### Handling Returned Data

Actions return an object containing either `data` with the type-safe return value of your `handler()`, or an `error` with any backend errors. Errors may come from validation errors on the `input` property or thrown errors within the `handler()`.

### Error Handling

To handle errors, check if an `error` property is present before using the `data` property. This allows you to handle errors in advance and ensures `data` is defined without an `undefined` check.

### Accepting Form Data

Actions accept JSON data by default. To accept form data from an HTML form, set `accept: 'form'` in your `defineAction()` call.

### Validating Form Data

Actions will parse submitted form data to an object, using the value of each input's `name` attribute as the object keys. Your action's `input` schema will be used to validate this object.

### Example Use Case

Here is an example of a validated newsletter registration form that accepts a user's email and requires a "terms of service" agreement checkbox:

```typescript
// src/actions/index.ts
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  newsletter: defineAction({
    input: z.object({
      email: z.string().email(),
      terms: z.boolean(),
    }),
    handler({ input }) {
      // Handle form submission logic here
    },
  }),
};
```

```html
<!-- src/components/NewsletterForm.tsx -->
<form action="/newsletter" method="post">
  <input type="email" name="email" required />
  <input type="checkbox" name="terms" required />
  <button type="submit">Submit</button>
</form>
```

```javascript
// src/components/NewsletterForm.tsx
import { actions } from 'astro:actions';
import { navigate } from 'astro:navigate';

export default function NewsletterForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await actions.newsletter(event.formData);
    if (result.error) {
      // Handle error here
    } else {
      navigate('/confirmation');
    }
  };

  return (
    <form action="/newsletter" method="post" onSubmit={handleSubmit}>
      <input type="email" name="email" required>
      <input type="checkbox" name="terms" required>
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, we define a `newsletter
