---
title: How to Install Bun on Windows - Multiple Ways
author: Dev Gaurav Jatt
pubDatetime: 2025-01-04T07:43:26Z
modDatetime: 2025-01-04T07:43:26Z
slug: how-to-install-bun-on-windows-multiple-ways
featured: true
draft: false
tags:
  - windows
  - node
  - bun
description: A comprehensive guide on how to install Bun on Windows using various methods including npm, curl, Scoop, Chocolatey, and GitHub releases. Learn the easiest way to set up Bun and enhance your JavaScript/TypeScript development.
---

## Table of contents

# How to Install Bun on Windows: Multiple Ways

Bun is an incredibly fast all-in-one JavaScript runtime, bundler, transpiler, and package manager. If you're developing web applications or working with modern JavaScript/TypeScript projects, Bun can speed up your workflow. In this post, we'll explore several ways to install Bun on Windows, including using npm, curl, Scoop, and more.

---

## 1. Installing Bun via npm

If you already have Node.js installed on your system, installing Bun via npm is straightforward.

```bash
npm install -g bun
```

After the installation completes, you can verify that Bun is installed correctly by running:

```bash
bun --version
```

### Advantages:

- Quick and easy if you already use Node.js.
- No need for additional tools.

### Disadvantages:

- May not always be the latest version of Bun.

---

## 2. Installing Bun using curl

Bun's official installation script can be executed using `curl` to download and set it up.

```bash
curl -fsSL https://bun.sh/install | bash
```

This command downloads and runs Bun's installation script, which handles everything for you.

After installation, add Bun to your PATH by adding the following to your profile file (`.bashrc`, `.zshrc`, or `.profile` depending on your shell):

```bash
export PATH="$HOME/.bun/bin:$PATH"
```

Once done, verify the installation by running:

```bash
bun --version
```

### Advantages:

- Directly fetches the latest version from Bun's official source.

### Disadvantages:

- Requires `curl` to be installed.

---

## 3. Installing Bun with Scoop

Scoop is a popular command-line installer for Windows. If you don't have Scoop installed, first install it by running:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

Once Scoop is installed, you can install Bun with:

```powershell
scoop install bun
```

Verify the installation:

```powershell
bun --version
```

### Advantages:

- Scoop ensures easy updates and uninstallation.
- Seamless integration with other developer tools managed via Scoop.

### Disadvantages:

- Requires Scoop to be installed first.

---

## 4. Installing Bun with Chocolatey

Chocolatey is another popular Windows package manager. To install Bun using Chocolatey, run:

```powershell
choco install bun
```

After the installation, confirm Bun is working:

```bash
bun --version
```

### Advantages:

- Simple installation and update process.
- Well-integrated with Windows.

### Disadvantages:

- Requires Chocolatey to be installed.

---

## 5. Installing Bun via GitHub Releases

If you prefer manual installation or want a specific version of Bun, you can download pre-built binaries from the [Bun GitHub Releases](https://github.com/oven-sh/bun/releases).

### Steps:

1. Download the latest Windows release.
2. Extract the binary to a folder.
3. Add the folder to your system PATH.
4. Verify the installation:
   ```bash
   bun --version
   ```

### Advantages:

- Complete control over the version and installation location.

### Disadvantages:

- Manual process; updates need to be handled manually.

---

## Conclusion

Bun is a powerful tool for JavaScript and TypeScript developers, and installing it on Windows is easy with several options to suit different preferences. Whether you prefer using npm, curl, Scoop, Chocolatey, or downloading directly from GitHub, this guide has you covered.

Happy coding with Bun!
