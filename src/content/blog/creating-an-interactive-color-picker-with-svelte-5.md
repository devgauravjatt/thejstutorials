---
title: Creating an Interactive Color Picker with Svelte 5
author: Dev Gaurav Jatt
pubDatetime: 2023-07-21T10:11:06.130Z
modDatetime: 2024-01-03T14:53:25Z
slug: creating-an-interactive-color-picker-with-svelte-5
featured: true
draft: false
tags:
  - svelte
  - sveltekit
description: In this blog post, we'll explore how to create an interactive color picker using Svelte 5, focusing on a simple yet functional code snippet.
---

## Table of contents

## Creating an Interactive Color Picker with Svelte 5

Svelte 5 offers an elegant and efficient way to build interactive web applications, and a color picker is a perfect example to demonstrate its capabilities. In this blog post, we’ll explore how to create an interactive color picker using Svelte 5, focusing on a simple yet functional code snippet.

## full code

```svelte
<script>
 import Svg from "../lib/assets/circle.svg";
 let colors = $state(["#BBFF00", "#06F586", "#ff3e00", "#8D462E", "#FF0037"]);

 let fillings = $state(0);

 $effect(() => {
  console.log(fillings);
 });
</script>

<div>
 <div class="flex gap-2 mb-4">
  {#each colors as color, index}
   <div class="flex flex-col gap-2">
    <button onclick={() => (fillings = index)} style:background={colors[index]} class="w-24 h-24 mb-3 rounded-full">
     {#if index === fillings}
      <img src={Svg} alt={index.toString()} />
     {/if}
    </button>
    <span>
     <code>
      {colors[index]}
     </code>
    </span>
   </div>
  {/each}
 </div>
 <input bind:value={colors[fillings]} type="color" name="color" />
</div>
```

> Full code url --- https://www.sveltelab.dev/sz2qatme9a8hjb5

## Understanding the Code Structure

The provided code creates a color picker interface where users can select from a set of predefined colors. Here’s how it works:

1. **SVG Image Import**: The component starts by importing an SVG file, which will be displayed next to the selected color. This visual cue enhances the user experience.

   ```javascript
   import Svg from "../lib/assets/circle.svg";
   ```

2. **Color Array**: An array of colors is defined using `$state`, which allows for reactive state management in Svelte.

   ```javascript
   let colors = $state(["#BBFF00", "#06F586", "#ff3e00", "#8D462E", "#FF0037"]);
   ```

3. **Current Filling State**: Another state variable `fillings` keeps track of the currently selected color index.

   ```javascript
   let fillings = $state(0);
   ```

4. **Effect Hook**: The `$effect` function logs the current value of `fillings` to the console, allowing developers to track changes in real-time.

   ```svelte
   $effect(() => {
    console.log(fillings);
   });
   ```

5. **Rendering the UI**: The UI is built using a combination of `each` blocks and conditional rendering. For each color in the array, a button is created. When a button is clicked, it updates the `fillings` state to reflect the selected index. The selected color is highlighted with an SVG icon.

   ```svelte
   {#each colors as color, index}
    <button onclick={() => (fillings = index)} style:background={colors[index]} class="w-24 h-24 mb-3 rounded-full">
     {#if index === fillings}
      <img src={Svg} alt={index.toString()} />
     {/if}
    </button>
   {/each}
   ```

6. **Color Input**: A color input element allows users to customize the selected color. It is bound to the currently selected color, ensuring that changes reflect immediately in the UI.

   ```svelte
   <input bind:value={colors[fillings]} type="color" name="color" />
   ```

## Enhancing User Experience

With this simple setup, users can easily choose a color, and the real-time feedback enhances engagement. The SVG icon provides a visual representation of the selected color, making the interface more intuitive.

## Conclusion

Creating an interactive color picker in Svelte 5 is a straightforward process that showcases the framework's strengths in reactivity and simplicity. This example can serve as a foundation for more complex applications, allowing developers to build on this basic functionality with additional features, such as saving color preferences or integrating with design tools. With Svelte, the possibilities are endless, making it a fantastic choice for modern web development.
