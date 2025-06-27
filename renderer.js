const lessons = {
  'introduction': {
    title: 'Welcome to Python!',
    text: 'Python is a powerful, versatile programming language. This course will take you from the basics to building real applications. Select a lesson to begin!',
    background: 'url("https://media.giphy.com/media/3o7TKSxR4g73R6P2oM/giphy.gif")',
    code: '# Welcome to the interactive code editor!\nprint("Hello, Python World!")'
  },
  'strings': {
    title: 'Lesson 1: Strings',
    text: 'Strings are used to represent text. They are enclosed in single or double quotes. You can combine strings using the + operator.',
    background: 'url("https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif")',
    code: 'first_name = "John"\nlast_name = "Doe"\n\nfull_name = first_name + " " + last_name\nprint(full_name)'
  },
  'math': {
    title: 'Lesson 2: Math',
    text: 'Python can perform all the standard mathematical operations. Try it out!',
    background: 'url("https://media.giphy.com/media/xT9C259B7btG26dC8w/giphy.gif")',
    code: 'addition = 10 + 5\nsubtraction = 10 - 5\nmultiplication = 10 * 5\ndivision = 10 / 5\n\nprint(f"10 + 5 = {addition}")\nprint(f"10 - 5 = {subtraction}")'
  },
  'variables': {
    title: 'Lesson 3: Variables and Methods',
    text: 'Variables are containers for storing data values. Python has no command for declaring a variable.',
    background: 'url("https://media.giphy.com/media/l0HlNaQ6gWfllwA4U/giphy.gif")',
    code: 'x = 5\ny = "John"\nprint(x)\nprint(y)'
  },
  'functions': {
    title: 'Lesson 4: Functions',
    text: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.',
    background: 'url("https://media.giphy.com/media/3orieO9sZMFY2r26oU/giphy.gif")',
    code: 'def my_function(name):\n  print(f"Hello, {name}!")\n\nmy_function("Ravi")'
  },
  'booleans': {
    title: 'Lesson 5: Boolean Expressions',
    text: 'Booleans represent one of two values: True or False. In programming you often need to know if an expression is True or False.',
    background: 'url("https://media.giphy.com/media/l0HlV5ebA2rhd0A4U/giphy.gif")',
    code: 'print(10 > 9)\nprint(10 == 9)\nprint(10 < 9)'
  },
  'conditionals': {
    title: 'Lesson 6: Conditional Statements',
    text: 'Python supports the usual logical conditions from mathematics: Equals: a == b, Not Equals: a != b, Less than: a < b, etc.',
    background: 'url("https://media.giphy.com/media/3o6Zt6ML6BDBbB8b9m/giphy.gif")',
    code: 'a = 200\nb = 33\nif b > a:\n  print("b is greater than a")\nelif a == b:\n  print("a and b are equal")\nelse:\n  print("a is greater than b")'
  },
  'lists': {
    title: 'Lesson 7: Lists',
    text: 'Lists are used to store multiple items in a single variable. Lists are one of 4 built-in data types in Python used to store collections of data.',
    background: 'url("https://media.giphy.com/media/l0HlMZrXA2H75IChG/giphy.gif")',
    code: 'thislist = ["apple", "banana", "cherry"]\nprint(thislist)\nthislist.append("orange")\nprint(thislist)'
  },
  'tuples': {
    title: 'Lesson 8: Tuples',
    text: 'A tuple is a collection which is ordered and unchangeable. Tuples are written with round brackets.',
    background: 'url("https://media.giphy.com/media/3o6Zt2ZDJt4e9g3aOA/giphy.gif")',
    code: 'thistuple = ("apple", "banana", "cherry")\nprint(thistuple)\nprint(len(thistuple))'
  },
  'looping': {
    title: 'Lesson 9: Looping',
    text: 'Python has two primitive loop commands: while loops and for loops.',
    background: 'url("https://media.giphy.com/media/l0HlK9A7uN4S9JgDm/giphy.gif")',
    code: 'print("For loop:")\nfruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n  print(x)\n\nprint("\\nWhile loop:")\ni = 1\nwhile i < 6:\n  print(i)\n  i += 1'
  },
  'adv-strings': {
    title: 'Lesson 10: Advanced Strings',
    text: 'Python has a set of built-in methods that you can use on strings. All string methods returns new values. They do not change the original string.',
    background: 'url("https://media.giphy.com/media/3o6Zt2ZDJt4e9g3aOA/giphy.gif")',
    code: 'txt = " Hello World "\nprint(f"Original: \'{txt}\'")\nprint(f"Upper case: \'{txt.upper()}\'")\nprint(f"Lower case: \'{txt.lower()}\'")\nprint(f"Stripped: \'{txt.strip()}\'")'
  },
  'dictionaries': {
    title: 'Lesson 11: Dictionaries',
    text: 'Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered, changeable and does not allow duplicates.',
    background: 'url("https://media.giphy.com/media/3o6Zt6ML6BDBbB8b9m/giphy.gif")',
    code: 'thisdict = {\n  "brand": "Ford",\n  "model": "Mustang",\n  "year": 1964\n}\nprint(thisdict)\nprint(thisdict["brand"])'
  },
  'modules': {
    title: 'Lesson 12: Importing Modules',
    text: 'Consider a module to be the same as a code library. A file containing a set of functions you want to include in your application.',
    background: 'url("https://media.giphy.com/media/l0HlNaQ6gWfllwA4U/giphy.gif")',
    code: 'import math\n\nprint(math.pi)\nprint(math.sqrt(64))'
  },
  'sockets': {
    title: 'Lesson 13: Sockets',
    text: 'Sockets are used for communication between processes on the same or different machines. This is the foundation of network programming.',
    background: 'url("https://media.giphy.com/media/l0HlK9A7uN4S9JgDm/giphy.gif")',
    code: 'import socket\n\nhostname = socket.gethostname()\nIPAddr = socket.gethostbyname(hostname)\n\nprint(f"Your Computer Name is: {hostname}")\nprint(f"Your Computer IP Address is: {IPAddr}")'
  },
  'port-scanner': {
    title: 'Project: Port Scanner',
    text: 'Lets build a simple port scanner to see which ports are open on a target machine. This is a great way to learn about network programming.',
    background: 'url("https://media.giphy.com/media/3o6Zt2ZDJt4e9g3aOA/giphy.gif")',
    code: 'import socket\n\ndef port_scanner(target, port):\n    try:\n        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        s.settimeout(1)\n        con = s.connect((target, port))\n        print(f"Port {port} is open.")\n        s.close()\n    except:\n        pass\n\ntarget = "127.0.0.1"\nfor port in range(1, 1025):\n    port_scanner(target, port)'
  },
  'user-input': {
    title: 'Lesson 14: User Input',
    text: 'Python allows for user input. That means we are able to ask the user for input.',
    background: 'url("https://media.giphy.com/media/l0HlMZrXA2H75IChG/giphy.gif")',
    code: 'username = input("Enter username:")\nprint("Username is: " + username)'
  },
  'files': {
    title: 'Lesson 15: Reading and Writing Files',
    text: 'Python has several functions for creating, reading, updating, and deleting files.',
    background: 'url("https://media.giphy.com/media/3o6Zt6ML6BDBbB8b9m/giphy.gif")',
    code: '# Write to a file\nf = open("demofile.txt", "w")\nf.write("Hello! Welcome to demofile.txt")\nf.close()\n\n# Read from a file\nf = open("demofile.txt", "r")\nprint(f.read())'
  },
  'classes': {
    title: 'Lesson 16: Classes and Objects',
    text: 'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.',
    background: 'url("https://media.giphy.com/media/l0HlNaQ6gWfllwA4U/giphy.gif")',
    code: 'class MyClass:\n  x = 5\n\np1 = MyClass()\nprint(p1.x)'
  },
  'shoe-budget': {
    title: 'Project: Shoe Budget Tool',
    text: 'Lets build a simple tool to help you budget for shoes. This will use classes and objects to keep track of your shoes and budget.',
    background: 'url("https://media.giphy.com/media/3o6Zt2ZDJt4e9g3aOA/giphy.gif")',
    code: 'class Shoe:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass Budget:\n    def __init__(self, budget):\n        self.budget = budget\n        self.shoes = []\n\n    def add_shoe(self, shoe):\n        if self.budget >= shoe.price:\n            self.shoes.append(shoe)\n            self.budget -= shoe.price\n            print(f"Added {shoe.name} to your collection!")\n        else:\n            print(f"Sorry, you can\'t afford the {shoe.name}.")\n\n    def show_collection(self):\n        print("Your shoe collection:")\n        for shoe in self.shoes:\n            print(f"- {shoe.name} (${shoe.price})")\n        print(f"Remaining budget: ${self.budget}")\n\nmy_budget = Budget(500)\nshoe1 = Shoe("Nike Air Force 1", 120)\nshoe2 = Shoe("Adidas Superstar", 90)\nshoe3 = Shoe("Jordan 1", 200)\n\nmy_budget.add_shoe(shoe1)\nmy_budget.add_shoe(shoe2)\nmy_budget.add_shoe(shoe3)\n\nmy_budget.show_collection()'
  },
};

const lessonList = document.getElementById('lesson-list');
const lessonTitle = document.getElementById('lesson-title');
const lessonText = document.getElementById('lesson-text');
const mainContent = document.getElementById('main-content');
const codeEditor = document.getElementById('code-editor');
const runButton = document.getElementById('run-button');
const outputText = document.getElementById('output-text');

runButton.addEventListener('click', () => {
  const code = codeEditor.value;
  outputText.innerText = 'Running...';
  window.electronAPI.runCode(code);
});

window.electronAPI.onCodeResult((_event, result) => {
  outputText.innerText = result;
});

function loadLesson(lessonId) {
  const lesson = lessons[lessonId];
  if (!lesson) return;

  lessonTitle.innerText = lesson.title;
  lessonText.innerText = lesson.text;
  codeEditor.value = lesson.code;
  
  if (lesson.background) {
    mainContent.style.backgroundImage = lesson.background;
  } else {
    mainContent.style.backgroundImage = 'none';
  }
}

lessonList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const lessonId = event.target.dataset.lesson;
    loadLesson(lessonId);
  }
});

// Load the introduction by default
loadLesson('introduction');
