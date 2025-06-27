# Learn Python: The Interactive Desktop App

![Learn Python App Banner](https://via.placeholder.com/800x200.png?text=Learn+Python+App)

**An interactive desktop application for Arch Linux (Gnome) designed to make learning the Python programming language fast, fun, and effective.**

This project was born out of the idea that learning to code should be an engaging, hands-on experience. Instead of passively reading tutorials, this app provides an interactive environment where you can learn, code, and see results instantly.

## ✨ Core Features

*   **Interactive Learning Modules:** Bite-sized lessons that combine theory with immediate coding practice.
*   **Built-in Code Editor:** A lightweight yet powerful code editor powered by Monaco Editor, so you can write and test Python code without leaving the app.
*   **Guided Curriculum:** A structured learning path that takes you from "Hello, World!" to more advanced topics in a logical progression.
*   **Gamified Experience:** Track your progress, earn achievement badges, and tackle daily coding challenges to stay motivated.
*   **Project-Based Learning:** Apply your skills by building small, real-world projects guided by the app.

## 💻 Technology Stack

*   **Framework:** [Electron](https://www.electronjs.org/)
*   **Frontend:** HTML, CSS, JavaScript (Potentially with [Vue.js](https://vuejs.org/))
*   **Code Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)
*   **Backend Code Execution:** A sandboxed Python interpreter.

## 🚀 Getting Started

### Prerequisites

*   An Arch Linux system with Gnome Desktop Environment.
*   `npm` / `yarn` for building from source.
*   `python3` installed and available in your PATH.

### Running the Application

There are two ways to run the application:

**1. Running from the AppImage (Recommended)**

The AppImage is a portable package that can be run on most Linux distributions.

1.  Navigate to the `dist` directory:
    ```bash
    cd Learn-Python/dist
    ```
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

## 🗺️ Features Implemented

*   **Full Curriculum:** All 19 lessons are implemented with content and code examples.
*   **Interactive Code Editor:** An in-app code editor allows you to run the lesson's code and experiment with your own.
*   **Live Python Execution:** Code is executed in a sandboxed environment, and the output is displayed in the app.
*   **Dynamic UI:** The app features a "Cyber Glow" theme with animated backgrounds for each lesson, creating an immersive learning experience.
*   **Cross-platform:** Built with Electron, this app can be packaged for other operating systems as well.

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
