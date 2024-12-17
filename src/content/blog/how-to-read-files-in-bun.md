---
title: "How to Read Files in Bun.js: A Complete Guide"
author: Dev Gaurav Jatt
pubDatetime: 2023-07-21T10:11:06.130Z
modDatetime: 2024-01-03T14:53:25Z
slug: how-to-read-files-in-bun
featured: false
draft: false
tags:
  - bun
  - file
description: Learn how to read files in Bun.js with examples. Discover how to use Bun's efficient Bun.file() API to read text, streams, and binary data from files.
---

## Table of contents

**How to Read Files in Bun.js: A Simple Guide**

Bun.js is an ultra-fast JavaScript runtime that has been gaining traction for its speed and simplicity. One of the standout features of Bun is its ability to handle file system operations efficiently. If you're coming from Node.js or another JavaScript environment, Bun makes file handling both intuitive and lightning-fast.

In this post, we’ll explore how to read files in Bun.js using its built-in file API and walk through a few examples to demonstrate its capabilities.

## What is `Bun.file()`?

In Bun, the `Bun.file()` method allows you to create a reference to a file without loading its contents right away. This lazy-loading mechanism helps conserve memory and improves performance, especially when working with large files. Once a `BunFile` instance is created, you can read the file's contents in various formats like text, stream, or even binary.

## Key Features of `Bun.file()`

- **Lazy-loaded**: `Bun.file()` doesn’t immediately load the file from disk, which makes it more memory-efficient.
- **Multiple Formats**: You can read the file's contents as text, a stream, an ArrayBuffer, or a Uint8Array.
- **File properties**: Access file properties like size, MIME type, and existence.

## Basic Usage of `Bun.file()`

#### Step 1: Creating a `BunFile` Instance

The first step is to create a `BunFile` instance using the `Bun.file(path)` method. This doesn’t read the file yet but creates a reference to it.

```javascript
const foo = Bun.file("foo.txt");
```

#### Step 2: Checking File Properties

You can check some basic properties of the file, such as its size and MIME type:

```javascript
console.log(foo.size); // Output the size of the file in bytes
console.log(foo.type); // Output the MIME type (default: text/plain)
```

#### Step 3: Reading File Contents

Once you have a `BunFile` instance, you can read the file’s contents in several formats:

- **Text**: Use `.text()` to get the file’s contents as a string.

```javascript
const content = await foo.text();
console.log(content);
```

- **Stream**: Use `.stream()` to get the contents as a `ReadableStream`. This is useful for processing large files without loading everything into memory at once.

```javascript
const stream = await foo.stream();
stream.pipeTo(
  new WritableStream({
    write(chunk) {
      console.log("Chunk:", chunk);
    },
  })
);
```

- **ArrayBuffer**: Use `.arrayBuffer()` if you need the contents in binary format.

```javascript
const buffer = await foo.arrayBuffer();
console.log(new Uint8Array(buffer));
```

- **Bytes (Uint8Array)**: For direct byte access, you can use `.bytes()`.

```javascript
const bytes = await foo.bytes();
console.log(bytes);
```

## Handling Non-Existing Files

Bun's `Bun.file()` can also reference files that don't exist on disk. You can check whether the file exists using the `.exists()` method.

```javascript
const nonExistentFile = Bun.file("notreal.txt");
const exists = await nonExistentFile.exists();
console.log(exists); // Output: false
```

If the file doesn't exist, the `size` property will return `0` and the MIME type will default to `"text/plain;charset=utf-8"`.

### Custom MIME Types

You can also override the MIME type when creating the `BunFile` instance:

```javascript
const jsonFile = Bun.file("data.json", { type: "application/json" });
console.log(jsonFile.type); // Output: application/json;charset=utf-8
```

## Using Bun’s Standard Input and Output

Bun provides easy access to standard input, output, and error streams as `BunFile` instances:

```javascript
const stdin = Bun.stdin; // Read from standard input
const stdout = Bun.stdout; // Write to standard output
const stderr = Bun.stderr; // Write to standard error
```

These can be used just like any other file reference in Bun, providing a simple interface for working with terminal I/O.

## Conclusion

Reading files in Bun.js is both efficient and flexible, thanks to its lazy-loading mechanism and support for various data formats. Whether you're handling small text files or large binary files, Bun's file API provides the tools you need to read, stream, and manipulate file contents easily.

## Why Choose Bun for File Operations?

Bun stands out for its blazing-fast performance, reduced memory overhead, and its promise of faster startup times compared to other JavaScript runtimes. If you're working with files or streams in your JavaScript projects, Bun is definitely worth considering.
