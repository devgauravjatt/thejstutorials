---
title: What's New in Bun v1.2 - Faster, More Reliable, and Packed with Features
author: Dev Gaurav Jatt
pubDatetime: 2025-01-22T15:34:00Z
modDatetime: 2025-01-22T15:34:00Z
slug: whats-new-in-bun-v1-2
featured: true
draft: false
tags:
  - Bun
  - runtime
description: Discover the latest updates in Bun v1.2! Explore improved performance, enhanced Windows support, new shell features, and TypeScript parsing fixes. Perfect for developers seeking a faster JavaScript runtime.
---

## Table of contents

## 😎 What's New in Bun v1.2

Bun continues to innovate with **v1.2**, bringing enhancements that focus on performance, reliability, and usability for developers. Whether you're building modern web apps or optimizing workflows, Bun v1.2 is designed to make your development process faster and easier.

### Key Features and Updates

#### 🚀 **Performance Boosts**

- **5x Faster Object Spread (`{ ...obj }`)**
  The spread operator performance has been significantly improved, offering lightning-fast execution.

  ```javascript
  const obj = { a: 1, b: 2, c: 3 };
  const clone = { ...obj };

  console.log(clone);
  // Output: { a: 1, b: 2, c: 3 }
  ```

  Microbenchmarks show this runs **5x faster**, particularly in scenarios involving empty object literals and single spreads.

#### 🛠 **Improved Windows Support**

1. **Rewritten `fs.watch`**:

   - Enhances speed and reliability.
   - Deduplicates watched paths to reduce memory usage.

   ```javascript
   import { watch } from "bun";

   watch("src", (event, filePath) => {
     console.log(`${event}: ${filePath}`);
   });
   ```

2. **Error Fixes**:
   - **EBUSY**: Resolved for `vite dev` and `next dev`.
   - **ENOENT/EEXIST**: Improved handling of tarball extraction for npm packages.

#### 🐚 **Bun Shell Enhancements**

Bun Shell now supports popular GNU Coreutils commands:

- `seq`: Generates a sequence of numbers.
- `yes`: Repeats input until interrupted.
- `basename` & `dirname`: Extracts file and directory names.

Example:

```javascript
import { $ } from "bun";

await $`seq 1 5`;
// Output:
// 1
// 2
// 3
// 4
// 5

await $`basename /path/to/file.js`;
// Output: file.js

await $`dirname /path/to/file.js`;
// Output: /path/to
```

#### 📦 **Enhanced Package Management**

1. **`bun install --production` Without Lockfile**:
   Perfect for CI environments.

   ```bash
   bun install --production
   ```

2. **Fixed Crashes in Tarball Downloads**:
   Improved error handling ensures smoother installs for edge cases.

#### 🖋 **TypeScript Parsing Fixes**

Complex TypeScript edge cases are now parsed correctly:

```typescript
type Example = Bar extends string | (infer Baz extends string) ? Baz : never;
```

These fixes provide seamless compatibility for advanced TypeScript patterns.

### Upgrade to Bun v1.2

To get started or upgrade to the latest version:

```bash
bun upgrade
```

For fresh installs:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Conclusion

Bun v1.2 is a game-changer for developers seeking speed, reliability, and simplicity. With improved performance, enhanced Windows support, and new features, it's the ultimate toolkit for JavaScript development.
