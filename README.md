# Learn Python: The Interactive Desktop App

![Learn Python Banner](./assets/banner.svg)

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg" alt="Version">
  <img src="https://img.shields.io/badge/framework-Electron-47848f.svg" alt="Framework">
  <img src="https://img.shields.io/badge/language-Python-3776ab.svg" alt="Language">
</p>

An interactive desktop application for Arch Linux (Gnome) designed to make learning the Python programming language fast, fun, and effective.

---

## ✨ Core Features

*   **Interactive Learning Modules:** Bite-sized lessons that combine theory with immediate coding practice.
*   **Built-in Code Editor:** A lightweight yet powerful code editor so you can write and test Python code without leaving the app.
*   **Guided Curriculum:** A structured learning path that takes you from "Hello, World!" to more advanced topics in a logical progression.
*   **Visually Engaging:** A "Cyber Glow" theme with animated backgrounds for each lesson to make learning more fun.
*   **Project-Based Learning:** Apply your skills by building small, real-world projects guided by the app.

# 🛠️ Technical Architecture

The application is built with Electron and uses a simple but effective architecture to provide an interactive learning experience.

```mermaid
graph TD
    A[User Interface (Renderer Process)] -->|Code to Run| B[Electron Main Process]
    B -->|Executes Python Script| C[Python Child Process]
    C -->|Output (stdout/stderr)| B
    B -->|Result| A
    A -->|Displays Output| D[Output Console]

```

## 🚀 Getting Started

### Prerequisites

*   An Arch Linux system with Gnome Desktop Environment.
*   `npm` / `yarn` for building from source.
*   `python3` installed and available in your PATH.

### Running the Application

There are two ways to run the application:

**1. Running from the AppImage (Recommended)**

The AppImage is a portable package that can be run on most Linux distributions. You can find it in the [Releases](https://github.com/ravisairockey/Learn-Python/releases) section.

1.  Download the `Learn-Python-1.0.0.AppImage` file.
2.  Make the AppImage executable:
    ```bash
    chmod +x "Learn Python-1.0.0.AppImage"
    ```
3.  Run the application:
    ```bash
    ./"Learn Python-1.0.0.AppImage"
    ```

**2. Running from Source**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ravisairockey/Learn-Python.git
    cd Learn-Python
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm start
    ```

## ✍️ Author

This application was created by **Ravi Sai Vigneswara**.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
