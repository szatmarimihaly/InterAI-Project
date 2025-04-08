const questionsData = {
    javascript : {
        beginner : [
            {
                id : 1,
                question : "What is JavaScript?",
                options : [
                    "A database language",
                    "A web server",
                    "A programming language for web development",
                    "A design tool"
                ],
                correctAnswer : 2,
                explanation : "Due to a legacy bug in JavaScript, typeof null returns 'object'."
            },
            {
                id : 2,
                question : "Which of the following is a correct way to declare a variable?",
                options : [
                    "variable x = 5;",
                    "int x = 5;",
                    "let x = 5;",
                    "define x = 5;"
                ],
                correctAnswer : 2,
                explanation : "Use let, const, or var to declare variables."
            },
            {
                id : 3,
                question : "Which symbol is used for single-line comments in JavaScript?",
                options : [
                    "<!-- comment -->",
                    "// comment",
                    "# comment",
                    "/* comment */"
                ],
                correctAnswer : 1,
                explanation : "Single-line comments start with a specific symbol."
            },
            {
              id : 4,
              question : "What does === mean in JavaScript?",
              options : [
                "Only value comparison",
                "Only type comparison",
                "Value and type comparison",
                "Assigning a value"
              ],
              correctAnswer : 2,
              explanation : "It checks both value and type."  
            },
            {
                id : 5,
                question : "How do you write an array in JavaScript?",
                options : [
                    "let arr = (1, 2, 3);",
                    "let arr = {1, 2, 3};",
                    "let arr = [1, 2, 3];",
                    "let arr = <1, 2, 3>;"
                ],
                correctAnswer : 2,
                explanation : "Arrays hold multiple values."
            },
            {
                id : 6,
                question : "What is the output of console.log(typeof 42)?",
                options : [
                    "number",
                    "string",
                    "object",
                    "undefined"
                ],
                correctAnswer : 0,
                explanation : "typeof returns the data type"
            },
            {
                id : 7,
                question : "Which loop is used to repeat a block of code a specific number of times?",
                options : [
                    "while",
                    "do-while",
                    "repeat",
                    "for"
                ],
                correctAnswer : 3,
                explanation : "Use for when you know how many times to loop."
            },
            {
                id : 8,
                question : "What does NaN stand for?",
                options : [
                    "Not a Number",
                    "No Answer Needed",
                    "Not a Null",
                    "None of the Above"
                ],
                correctAnswer : 0,
                explanation : "NaN indicates an invalid number."
            },
            {
                id : 9,
                question : "How do you create a function in JavaScript?",
                options : [
                    "function myFunction() {}",
                    "create myFunction() {}",
                    "function:myFunction() {}",
                    "myFunction() = function {}"
                ],
                correctAnswer : 0,
                explanation : "Use the function keyword to define a function."
            },
            {
                id : 10,
                question : "What is the purpose of the 'this' keyword in JavaScript?",
                options : [
                    "Refers to the global object",
                    "Refers to the current function",
                    "Refers to the current object",
                    "Refers to the previous object"
                ],
                correctAnswer : 2,
                explanation : "'this' refers to the current context."
            },
            {
                id: 11,
                question: "What is the purpose of the 'use strict' directive?",
                options: [
                    "To make JavaScript run faster",
                    "To enable strict mode, which catches common coding mistakes",
                    "To disable certain JavaScript features",
                    "To make the code more readable"
                ],
                correctAnswer: 1,
                explanation: "'use strict' enables strict mode, which helps catch common coding mistakes and prevents the use of potentially problematic features."
            },
            {
                id: 12,
                question: "How do you access an object's property?",
                options: [
                    "object.property",
                    "object[property]",
                    "Both of the above",
                    "None of the above"
                ],
                correctAnswer: 2,
                explanation: "You can access object properties using either dot notation (object.property) or bracket notation (object['property'])."
            },
            {
                id: 13,
                question: "What is the purpose of the return statement?",
                options: [
                    "To stop the execution of a function",
                    "To specify the value to be returned by a function",
                    "To print something to the console",
                    "To create a new variable"
                ],
                correctAnswer: 1,
                explanation: "The return statement specifies the value to be returned by a function when it is called."
            },
            {
                id: 14,
                question: "What is the correct way to write a conditional statement?",
                options: [
                    "if (condition) { code }",
                    "if condition { code }",
                    "if condition then { code }",
                    "if: condition { code }"
                ],
                correctAnswer: 0,
                explanation: "The correct syntax for an if statement is if (condition) { code }."
            },
            {
                id: 15,
                question: "What is the purpose of the break statement?",
                options: [
                    "To stop the execution of a loop",
                    "To continue to the next iteration of a loop",
                    "To create a new line in the console",
                    "To end the program"
                ],
                correctAnswer: 0,
                explanation: "The break statement is used to exit a loop before its normal termination."
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is a closure in JavaScript?",
                options: [
                    "A function that returns another function",
                    "A combination of a function and its lexical environment",
                    "A way to close a browser window",
                    "A method to terminate a loop"
                ],
                correctAnswer: 1,
                explanation: "A closure is a function that has access to its outer function's variables, even after the outer function has returned."
            },
            {
                id: 2,
                question: "What is the difference between let, const, and var?",
                options: [
                    "They are all the same",
                    "let and const are block-scoped, var is function-scoped",
                    "var is block-scoped, let and const are function-scoped",
                    "const is block-scoped, let and var are function-scoped"
                ],
                correctAnswer: 1,
                explanation: "let and const are block-scoped, while var is function-scoped. const cannot be reassigned, while let can."
            },
            {
                id: 3,
                question: "What is the output of: console.log(1 + '2' + 3)?",
                options: [
                    "6",
                    "123",
                    "15",
                    "Error"
                ],
                correctAnswer: 1,
                explanation: "JavaScript performs type coercion, converting numbers to strings when concatenating with strings."
            },
            {
                id: 4,
                question: "What is the purpose of the bind() method?",
                options: [
                    "To create a new array",
                    "To bind an event listener",
                    "To create a new function with a specific 'this' value",
                    "To bind two objects together"
                ],
                correctAnswer: 2,
                explanation: "bind() creates a new function that, when called, has its 'this' keyword set to the provided value."
            },
            {
                id: 5,
                question: "What is the difference between == and ===?",
                options: [
                    "== checks value, === checks value and type",
                    "== checks type, === checks value",
                    "They are identical",
                    "== is newer syntax"
                ],
                correctAnswer: 0,
                explanation: "== performs type coercion before comparison, while === checks both value and type without coercion."
            },
            {
                id: 6,
                question: "What is a Promise in JavaScript?",
                options: [
                    "A way to make synchronous code",
                    "An object representing the eventual completion of an asynchronous operation",
                    "A type of loop",
                    "A way to declare variables"
                ],
                correctAnswer: 1,
                explanation: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation."
            },
            {
                id: 7,
                question: "What is the purpose of the async/await syntax?",
                options: [
                    "To make code run faster",
                    "To handle synchronous operations",
                    "To write asynchronous code in a synchronous style",
                    "To create new variables"
                ],
                correctAnswer: 2,
                explanation: "async/await allows writing asynchronous code in a more synchronous-looking way, making it easier to read and maintain."
            },
            {
                id: 8,
                question: "What is the prototype chain in JavaScript?",
                options: [
                    "A way to chain multiple functions",
                    "A mechanism for inheritance",
                    "A type of array",
                    "A way to create new objects"
                ],
                correctAnswer: 1,
                explanation: "The prototype chain is JavaScript's way of implementing inheritance, where objects can inherit properties and methods from other objects."
            },
            {
                id: 9,
                question: "What is the difference between map() and forEach()?",
                options: [
                    "map() modifies the original array, forEach() doesn't",
                    "map() returns a new array, forEach() doesn't return anything",
                    "forEach() is faster than map()",
                    "They are identical"
                ],
                correctAnswer: 1,
                explanation: "map() creates a new array with the results of calling a function on every element, while forEach() just executes the function for each element."
            },
            {
                id: 10,
                question: "What is the event loop in JavaScript?",
                options: [
                    "A type of loop in the code",
                    "A mechanism that handles asynchronous operations",
                    "A way to create events",
                    "A debugging tool"
                ],
                correctAnswer: 1,
                explanation: "The event loop is what allows JavaScript to handle asynchronous operations by continuously checking the call stack and message queue."
            },
            {
                id: 11,
                question: "What is the difference between null and undefined?",
                options: [
                    "They are the same",
                    "null is assigned by the programmer, undefined is assigned by JavaScript",
                    "undefined is assigned by the programmer, null is assigned by JavaScript",
                    "They are both assigned by JavaScript"
                ],
                correctAnswer: 1,
                explanation: "null is an assignment value that represents no value or no object, while undefined means a variable has been declared but not assigned a value."
            },
            {
                id: 12,
                question: "What is hoisting in JavaScript?",
                options: [
                    "A way to lift variables to the top of their scope",
                    "A way to create new variables",
                    "A way to delete variables",
                    "A way to modify variables"
                ],
                correctAnswer: 0,
                explanation: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution."
            },
            {
                id: 13,
                question: "What is the difference between call() and apply()?",
                options: [
                    "call() takes arguments as an array, apply() takes them individually",
                    "apply() takes arguments as an array, call() takes them individually",
                    "They are identical",
                    "call() is newer syntax"
                ],
                correctAnswer: 1,
                explanation: "call() takes arguments individually, while apply() takes them as an array."
            },
            {
                id: 14,
                question: "What is a generator function?",
                options: [
                    "A function that generates random numbers",
                    "A function that can be paused and resumed",
                    "A function that creates other functions",
                    "A function that runs in parallel"
                ],
                correctAnswer: 1,
                explanation: "A generator function can be paused and resumed, allowing for more control over the execution flow."
            },
            {
                id: 15,
                question: "What is the purpose of the Symbol data type?",
                options: [
                    "To create unique identifiers",
                    "To store numbers",
                    "To store strings",
                    "To create arrays"
                ],
                correctAnswer: 0,
                explanation: "Symbols are used to create unique identifiers that can be used as property keys in objects."
            }
        ],
        expert: [
            {
                id: 1,
                question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
                options: [
                    "A period where variables are inaccessible before their declaration",
                    "A time when the JavaScript engine is not running",
                    "A zone where memory is temporarily unavailable",
                    "A period when the event loop is blocked"
                ],
                correctAnswer: 0,
                explanation: "The TDZ is the period between entering scope and the actual declaration of let/const variables, where accessing them results in a ReferenceError."
            },
            {
                id: 2,
                question: "What is the difference between WeakMap and Map?",
                options: [
                    "WeakMap is faster than Map",
                    "WeakMap keys must be objects and are garbage collected",
                    "Map is for primitive types, WeakMap for objects",
                    "WeakMap has more methods than Map"
                ],
                correctAnswer: 1,
                explanation: "WeakMap keys must be objects and are garbage collected when there are no other references to them, unlike Map which holds strong references."
            },
            {
                id: 3,
                question: "What is the purpose of the Proxy object in JavaScript?",
                options: [
                    "To create network proxies",
                    "To intercept and customize operations on objects",
                    "To handle HTTP requests",
                    "To manage memory allocation"
                ],
                correctAnswer: 1,
                explanation: "Proxy objects allow you to intercept and customize operations performed on objects, such as property access, assignment, enumeration, etc."
            },
            {
                id: 4,
                question: "What is the difference between microtasks and macrotasks in the event loop?",
                options: [
                    "Microtasks run before macrotasks",
                    "Macrotasks are more important than microtasks",
                    "Microtasks are faster than macrotasks",
                    "They are the same thing"
                ],
                correctAnswer: 0,
                explanation: "Microtasks (like Promise callbacks) run before macrotasks (like setTimeout), and the event loop processes all microtasks before moving to the next macrotask."
            },
            {
                id: 5,
                question: "What is the purpose of the Reflect API?",
                options: [
                    "To reflect light in 3D graphics",
                    "To provide methods for interceptable JavaScript operations",
                    "To create mirrors of objects",
                    "To handle HTTP reflection attacks"
                ],
                correctAnswer: 1,
                explanation: "The Reflect API provides methods for interceptable JavaScript operations, working in conjunction with Proxy objects."
            },
            {
                id: 6,
                question: "What is the difference between Object.freeze() and Object.seal()?",
                options: [
                    "freeze() prevents property changes, seal() allows value changes",
                    "seal() is stronger than freeze()",
                    "They are identical",
                    "freeze() is newer syntax"
                ],
                correctAnswer: 0,
                explanation: "Object.freeze() makes an object immutable, while Object.seal() prevents adding/removing properties but allows modifying existing ones."
            },
            {
                id: 7,
                question: "What is the purpose of the Intl object in JavaScript?",
                options: [
                    "To handle international phone calls",
                    "To provide language-sensitive string comparison",
                    "To manage internet connections",
                    "To create international variables"
                ],
                correctAnswer: 1,
                explanation: "The Intl object provides language-sensitive string comparison, number formatting, and date and time formatting."
            },
            {
                id: 8,
                question: "What is the difference between ArrayBuffer and TypedArray?",
                options: [
                    "ArrayBuffer is faster than TypedArray",
                    "TypedArray provides a view of an ArrayBuffer",
                    "They are identical",
                    "ArrayBuffer is newer syntax"
                ],
                correctAnswer: 1,
                explanation: "ArrayBuffer represents raw binary data, while TypedArray provides a view of that data with specific types (like Int32Array, Float64Array, etc.)."
            },
            {
                id: 9,
                question: "What is the purpose of the Web Workers API?",
                options: [
                    "To create web servers",
                    "To run JavaScript in background threads",
                    "To handle HTTP requests",
                    "To manage DOM elements"
                ],
                correctAnswer: 1,
                explanation: "Web Workers allow running JavaScript in background threads, preventing UI blocking during heavy computations."
            },
            {
                id: 10,
                question: "What is the difference between SharedArrayBuffer and ArrayBuffer?",
                options: [
                    "SharedArrayBuffer is faster",
                    "SharedArrayBuffer can be shared between threads",
                    "ArrayBuffer is newer",
                    "They are identical"
                ],
                correctAnswer: 1,
                explanation: "SharedArrayBuffer can be shared between multiple threads, while ArrayBuffer is thread-specific."
            },
            {
                id: 11,
                question: "What is the purpose of the Atomics object?",
                options: [
                    "To handle atomic operations in shared memory",
                    "To create atomic bombs",
                    "To manage atomic variables",
                    "To handle HTTP atomic requests"
                ],
                correctAnswer: 0,
                explanation: "The Atomics object provides atomic operations as static methods for working with SharedArrayBuffer."
            },
            {
                id: 12,
                question: "What is the difference between WeakSet and Set?",
                options: [
                    "WeakSet is faster than Set",
                    "WeakSet can only store objects and doesn't prevent garbage collection",
                    "Set is for primitive types, WeakSet for objects",
                    "WeakSet has more methods than Set"
                ],
                correctAnswer: 1,
                explanation: "WeakSet can only store objects and doesn't prevent them from being garbage collected when there are no other references."
            },
            {
                id: 13,
                question: "What is the purpose of the FinalizationRegistry?",
                options: [
                    "To register final variables",
                    "To handle object finalization",
                    "To create final objects",
                    "To manage HTTP finalization"
                ],
                correctAnswer: 1,
                explanation: "FinalizationRegistry lets you request a callback when an object is garbage collected."
            },
            {
                id: 14,
                question: "What is the difference between import() and import statements?",
                options: [
                    "import() is faster",
                    "import() is dynamic, import statements are static",
                    "import statements are newer",
                    "They are identical"
                ],
                correctAnswer: 1,
                explanation: "import() is a dynamic import that returns a promise, while import statements are static and must be at the top level."
            },
            {
                id: 15,
                question: "What is the purpose of the BigInt type?",
                options: [
                    "To handle big integers",
                    "To create big arrays",
                    "To manage big objects",
                    "To handle big strings"
                ],
                correctAnswer: 0,
                explanation: "BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1."
            }
        ]
    },

    nextjs : {
        beginner: [
            {
                id: 1,
                question: "What is Next.js?",
                options: [
                    "A JavaScript framework",
                    "A React framework for production",
                    "A database management system",
                    "A CSS framework"
                ],
                correctAnswer: 1,
                explanation: "Next.js is a React framework that enables server-side rendering and static site generation for React applications."
            },
            {
                id: 2,
                question: "What is the purpose of the pages directory in Next.js?",
                options: [
                    "To store CSS files",
                    "To define the routing of the application",
                    "To store images",
                    "To store configuration files"
                ],
                correctAnswer: 1,
                explanation: "The pages directory is used to define the routes of your application. Each file in this directory becomes a route."
            },
            {
                id: 3,
                question: "What is the purpose of the public directory in Next.js?",
                options: [
                    "To store public API routes",
                    "To store static assets",
                    "To store public components",
                    "To store public styles"
                ],
                correctAnswer: 1,
                explanation: "The public directory is used to store static assets like images, fonts, etc. that can be publicly accessed."
            },
            {
                id: 4,
                question: "What is the purpose of the _app.js file in Next.js?",
                options: [
                    "To define the main application component",
                    "To store API routes",
                    "To store styles",
                    "To store utilities"
                ],
                correctAnswer: 0,
                explanation: "The _app.js file is used to override the default App component and is useful for persisting layouts between page changes."
            },
            {
                id: 5,
                question: "What is the purpose of the _document.js file in Next.js?",
                options: [
                    "To define the HTML document structure",
                    "To store API routes",
                    "To store styles",
                    "To store utilities"
                ],
                correctAnswer: 0,
                explanation: "The _document.js file is used to customize the HTML document structure, such as adding meta tags or external scripts."
            },
            {
                id: 6,
                question: "What is the purpose of the getStaticProps function in Next.js?",
                options: [
                    "To fetch data at build time",
                    "To fetch data at request time",
                    "To fetch data at client-side",
                    "To fetch data at runtime"
                ],
                correctAnswer: 0,
                explanation: "getStaticProps is used to fetch data at build time, which is useful for static site generation."
            },
            {
                id: 7,
                question: "What is the purpose of the getServerSideProps function in Next.js?",
                options: [
                    "To fetch data at build time",
                    "To fetch data at request time",
                    "To fetch data at client-side",
                    "To fetch data at runtime"
                ],
                correctAnswer: 1,
                explanation: "getServerSideProps is used to fetch data at request time, which is useful for server-side rendering."
            },
            {
                id: 8,
                question: "What is the purpose of the Image component in Next.js?",
                options: [
                    "To display images",
                    "To optimize images automatically",
                    "To create image galleries",
                    "To store images"
                ],
                correctAnswer: 1,
                explanation: "The Image component in Next.js automatically optimizes images for better performance and user experience."
            },
            {
                id: 9,
                question: "What is the purpose of the Link component in Next.js?",
                options: [
                    "To create external links",
                    "To create internal navigation",
                    "To create buttons",
                    "To create forms"
                ],
                correctAnswer: 1,
                explanation: "The Link component is used for client-side navigation between pages in a Next.js application."
            },
            {
                id: 10,
                question: "What is the purpose of the Head component in Next.js?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "The Head component is used to modify the head of the HTML document, such as adding meta tags or changing the title."
            },
            {
                id: 11,
                question: "What is the purpose of the API routes in Next.js?",
                options: [
                    "To create serverless API endpoints",
                    "To store API keys",
                    "To create client-side API calls",
                    "To store API documentation"
                ],
                correctAnswer: 0,
                explanation: "API routes in Next.js allow you to create serverless API endpoints within your Next.js application."
            },
            {
                id: 12,
                question: "What is the purpose of the next.config.js file in Next.js?",
                options: [
                    "To configure the Next.js application",
                    "To store API routes",
                    "To store styles",
                    "To store utilities"
                ],
                correctAnswer: 0,
                explanation: "The next.config.js file is used to configure various aspects of your Next.js application, such as environment variables or webpack configuration."
            },
            {
                id: 13,
                question: "What is the purpose of the next/link module in Next.js?",
                options: [
                    "To create external links",
                    "To create internal navigation",
                    "To create buttons",
                    "To create forms"
                ],
                correctAnswer: 1,
                explanation: "The next/link module provides the Link component for client-side navigation between pages."
            },
            {
                id: 14,
                question: "What is the purpose of the next/image module in Next.js?",
                options: [
                    "To display images",
                    "To optimize images automatically",
                    "To create image galleries",
                    "To store images"
                ],
                correctAnswer: 1,
                explanation: "The next/image module provides the Image component for automatic image optimization."
            },
            {
                id: 15,
                question: "What is the purpose of the next/head module in Next.js?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "The next/head module provides the Head component for modifying the document head."
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is the difference between Static Generation and Server-Side Rendering in Next.js?",
                options: [
                    "Static Generation is faster but less flexible",
                    "Server-Side Rendering is faster but less flexible",
                    "They are identical",
                    "Static Generation is newer"
                ],
                correctAnswer: 0,
                explanation: "Static Generation pre-renders pages at build time, while Server-Side Rendering generates pages on each request. Static Generation is faster but less flexible for dynamic content."
            },
            {
                id: 2,
                question: "What is the purpose of the getStaticPaths function in Next.js?",
                options: [
                    "To define dynamic routes for static generation",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "getStaticPaths is used to define which paths should be pre-rendered at build time for dynamic routes."
            },
            {
                id: 3,
                question: "What is the purpose of the next/dynamic module?",
                options: [
                    "To create dynamic routes",
                    "To load components dynamically",
                    "To handle dynamic imports",
                    "To manage dynamic state"
                ],
                correctAnswer: 1,
                explanation: "next/dynamic allows you to load components dynamically, which is useful for code splitting and lazy loading."
            },
            {
                id: 4,
                question: "What is the purpose of the next/router module?",
                options: [
                    "To handle client-side routing",
                    "To handle server-side routing",
                    "To handle API routing",
                    "To handle static routing"
                ],
                correctAnswer: 0,
                explanation: "next/router provides the useRouter hook for programmatic navigation and route information in client-side code."
            },
            {
                id: 5,
                question: "What is the purpose of the next/script module?",
                options: [
                    "To create scripts",
                    "To optimize third-party scripts",
                    "To handle server-side scripts",
                    "To manage client-side scripts"
                ],
                correctAnswer: 1,
                explanation: "next/script allows you to optimize the loading of third-party scripts with various loading strategies."
            },
            {
                id: 6,
                question: "What is the purpose of the next/amp module?",
                options: [
                    "To create AMP pages",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/amp allows you to create AMP (Accelerated Mobile Pages) versions of your pages."
            },
            {
                id: 7,
                question: "What is the purpose of the next/error module?",
                options: [
                    "To create error pages",
                    "To handle API errors",
                    "To manage state errors",
                    "To handle authentication errors"
                ],
                correctAnswer: 0,
                explanation: "next/error provides components for creating custom error pages."
            },
            {
                id: 8,
                question: "What is the purpose of the next/head module?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "next/head allows you to modify the head of the HTML document, such as adding meta tags or changing the title."
            },
            {
                id: 9,
                question: "What is the purpose of the next/config module?",
                options: [
                    "To configure the Next.js application",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/config allows you to access runtime configuration values in your Next.js application."
            },
            {
                id: 10,
                question: "What is the purpose of the next/i18n module?",
                options: [
                    "To handle internationalization",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/i18n provides utilities for handling internationalization in your Next.js application."
            },
            {
                id: 11,
                question: "What is the purpose of the next/amp module?",
                options: [
                    "To create AMP pages",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/amp allows you to create AMP (Accelerated Mobile Pages) versions of your pages."
            },
            {
                id: 12,
                question: "What is the purpose of the next/error module?",
                options: [
                    "To create error pages",
                    "To handle API errors",
                    "To manage state errors",
                    "To handle authentication errors"
                ],
                correctAnswer: 0,
                explanation: "next/error provides components for creating custom error pages."
            },
            {
                id: 13,
                question: "What is the purpose of the next/head module?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "next/head allows you to modify the head of the HTML document, such as adding meta tags or changing the title."
            },
            {
                id: 14,
                question: "What is the purpose of the next/config module?",
                options: [
                    "To configure the Next.js application",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/config allows you to access runtime configuration values in your Next.js application."
            },
            {
                id: 15,
                question: "What is the purpose of the next/i18n module?",
                options: [
                    "To handle internationalization",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/i18n provides utilities for handling internationalization in your Next.js application."
            }
        ],
        expert: [
            {
                id: 1,
                question: "What is the purpose of the next/amp module?",
                options: [
                    "To create AMP pages",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/amp allows you to create AMP (Accelerated Mobile Pages) versions of your pages."
            },
            {
                id: 2,
                question: "What is the purpose of the next/error module?",
                options: [
                    "To create error pages",
                    "To handle API errors",
                    "To manage state errors",
                    "To handle authentication errors"
                ],
                correctAnswer: 0,
                explanation: "next/error provides components for creating custom error pages."
            },
            {
                id: 3,
                question: "What is the purpose of the next/head module?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "next/head allows you to modify the head of the HTML document, such as adding meta tags or changing the title."
            },
            {
                id: 4,
                question: "What is the purpose of the next/config module?",
                options: [
                    "To configure the Next.js application",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/config allows you to access runtime configuration values in your Next.js application."
            },
            {
                id: 5,
                question: "What is the purpose of the next/i18n module?",
                options: [
                    "To handle internationalization",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/i18n provides utilities for handling internationalization in your Next.js application."
            },
            {
                id: 6,
                question: "What is the purpose of the next/amp module?",
                options: [
                    "To create AMP pages",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/amp allows you to create AMP (Accelerated Mobile Pages) versions of your pages."
            },
            {
                id: 7,
                question: "What is the purpose of the next/error module?",
                options: [
                    "To create error pages",
                    "To handle API errors",
                    "To manage state errors",
                    "To handle authentication errors"
                ],
                correctAnswer: 0,
                explanation: "next/error provides components for creating custom error pages."
            },
            {
                id: 8,
                question: "What is the purpose of the next/head module?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "next/head allows you to modify the head of the HTML document, such as adding meta tags or changing the title."
            },
            {
                id: 9,
                question: "What is the purpose of the next/config module?",
                options: [
                    "To configure the Next.js application",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/config allows you to access runtime configuration values in your Next.js application."
            },
            {
                id: 10,
                question: "What is the purpose of the next/i18n module?",
                options: [
                    "To handle internationalization",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/i18n provides utilities for handling internationalization in your Next.js application."
            },
            {
                id: 11,
                question: "What is the purpose of the next/amp module?",
                options: [
                    "To create AMP pages",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/amp allows you to create AMP (Accelerated Mobile Pages) versions of your pages."
            },
            {
                id: 12,
                question: "What is the purpose of the next/error module?",
                options: [
                    "To create error pages",
                    "To handle API errors",
                    "To manage state errors",
                    "To handle authentication errors"
                ],
                correctAnswer: 0,
                explanation: "next/error provides components for creating custom error pages."
            },
            {
                id: 13,
                question: "What is the purpose of the next/head module?",
                options: [
                    "To create headers",
                    "To modify the document head",
                    "To create navigation",
                    "To create footers"
                ],
                correctAnswer: 1,
                explanation: "next/head allows you to modify the head of the HTML document, such as adding meta tags or changing the title."
            },
            {
                id: 14,
                question: "What is the purpose of the next/config module?",
                options: [
                    "To configure the Next.js application",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/config allows you to access runtime configuration values in your Next.js application."
            },
            {
                id: 15,
                question: "What is the purpose of the next/i18n module?",
                options: [
                    "To handle internationalization",
                    "To handle API routes",
                    "To manage state",
                    "To handle authentication"
                ],
                correctAnswer: 0,
                explanation: "next/i18n provides utilities for handling internationalization in your Next.js application."
            }
        ]
    },

    google : {
        beginner: [
            {
                id: 1,
                question: "What is the difference between a stack and a queue?",
                options: [
                    "Stack is LIFO, Queue is FIFO",
                    "Stack is FIFO, Queue is LIFO",
                    "They are the same",
                    "Stack is faster than Queue"
                ],
                correctAnswer: 0,
                explanation: "A stack follows Last-In-First-Out (LIFO) principle, while a queue follows First-In-First-Out (FIFO) principle."
            },
            {
                id: 2,
                question: "What is the purpose of a hash function?",
                options: [
                    "To encrypt data",
                    "To map data of arbitrary size to fixed-size values",
                    "To sort data",
                    "To compress data"
                ],
                correctAnswer: 1,
                explanation: "A hash function takes an input (or 'key') and returns a fixed-size string of bytes, typically used for data retrieval."
            },
            {
                id: 3,
                question: "What is recursion?",
                options: [
                    "A way to sort data",
                    "A function that calls itself",
                    "A type of loop",
                    "A way to store data"
                ],
                correctAnswer: 1,
                explanation: "Recursion is a method where a function calls itself to solve a problem by breaking it down into smaller subproblems."
            },
            {
                id: 4,
                question: "What is the difference between an array and a linked list?",
                options: [
                    "Arrays are dynamic, linked lists are static",
                    "Arrays have fixed size, linked lists can grow",
                    "Arrays are faster for insertion",
                    "Linked lists use less memory"
                ],
                correctAnswer: 1,
                explanation: "Arrays have a fixed size and elements are stored contiguously, while linked lists can grow dynamically and elements are connected via pointers."
            },
            {
                id: 5,
                question: "What is a binary tree?",
                options: [
                    "A tree with two roots",
                    "A tree where each node has at most two children",
                    "A tree with binary values",
                    "A tree that can only store numbers"
                ],
                correctAnswer: 1,
                explanation: "A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child."
            },
            {
                id: 6,
                question: "What is the purpose of Big O notation?",
                options: [
                    "To measure code size",
                    "To describe algorithm performance",
                    "To count lines of code",
                    "To measure memory usage"
                ],
                correctAnswer: 1,
                explanation: "Big O notation is used to describe the performance or complexity of an algorithm, specifically its worst-case scenario."
            },
            {
                id: 7,
                question: "What is a graph in computer science?",
                options: [
                    "A way to visualize data",
                    "A collection of nodes connected by edges",
                    "A type of chart",
                    "A way to store images"
                ],
                correctAnswer: 1,
                explanation: "A graph is a data structure that consists of a set of vertices (nodes) connected by edges, used to represent relationships between objects."
            },
            {
                id: 8,
                question: "What is dynamic programming?",
                options: [
                    "A way to write code quickly",
                    "A method to solve problems by breaking them into subproblems",
                    "A type of programming language",
                    "A way to optimize memory usage"
                ],
                correctAnswer: 1,
                explanation: "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing their solutions."
            },
            {
                id: 9,
                question: "What is a greedy algorithm?",
                options: [
                    "An algorithm that always takes the best immediate choice",
                    "An algorithm that uses a lot of memory",
                    "An algorithm that runs slowly",
                    "An algorithm that never makes mistakes"
                ],
                correctAnswer: 0,
                explanation: "A greedy algorithm makes the locally optimal choice at each stage with the hope of finding a global optimum."
            },
            {
                id: 10,
                question: "What is the difference between depth-first search and breadth-first search?",
                options: [
                    "DFS uses a stack, BFS uses a queue",
                    "DFS is faster than BFS",
                    "BFS uses more memory than DFS",
                    "They are the same"
                ],
                correctAnswer: 0,
                explanation: "DFS explores as far as possible along each branch before backtracking, while BFS explores all neighbors at the present depth before moving on."
            },
            {
                id: 11,
                question: "What is a heap?",
                options: [
                    "A type of array",
                    "A complete binary tree with heap property",
                    "A way to store memory",
                    "A type of sorting algorithm"
                ],
                correctAnswer: 1,
                explanation: "A heap is a specialized tree-based data structure that satisfies the heap property: in a max heap, for any given node, its value is greater than or equal to its children."
            },
            {
                id: 12,
                question: "What is the difference between a class and an object?",
                options: [
                    "A class is an instance of an object",
                    "A class is a blueprint, an object is an instance",
                    "They are the same",
                    "An object is a type of class"
                ],
                correctAnswer: 1,
                explanation: "A class is a blueprint or template for creating objects, while an object is an instance of a class."
            },
            {
                id: 13,
                question: "What is polymorphism?",
                options: [
                    "A way to store multiple types of data",
                    "The ability of an object to take many forms",
                    "A type of sorting algorithm",
                    "A way to optimize code"
                ],
                correctAnswer: 1,
                explanation: "Polymorphism allows objects of different types to be treated as objects of a common type, typically through inheritance or interfaces."
            },
            {
                id: 14,
                question: "What is encapsulation?",
                options: [
                    "A way to compress data",
                    "Bundling data and methods that work on that data",
                    "A type of sorting algorithm",
                    "A way to store memory"
                ],
                correctAnswer: 1,
                explanation: "Encapsulation is the bundling of data and methods that operate on that data, restricting direct access to some of an object's components."
            },
            {
                id: 15,
                question: "What is inheritance?",
                options: [
                    "A way to copy code",
                    "A mechanism to derive a class from another class",
                    "A type of sorting algorithm",
                    "A way to store memory"
                ],
                correctAnswer: 1,
                explanation: "Inheritance is a mechanism where a new class is derived from an existing class, inheriting its properties and methods."
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is the difference between Dijkstra's and Bellman-Ford algorithms?",
                options: [
                    "Dijkstra's can't handle negative weights, Bellman-Ford can",
                    "Dijkstra's is faster, Bellman-Ford is more accurate",
                    "They are identical",
                    "Bellman-Ford is newer"
                ],
                correctAnswer: 0,
                explanation: "Dijkstra's algorithm cannot handle negative weight edges, while Bellman-Ford can. However, Dijkstra's is generally faster for graphs with non-negative weights."
            },
            {
                id: 2,
                question: "What is the purpose of the A* algorithm?",
                options: [
                    "To find the shortest path in a weighted graph",
                    "To find the shortest path with heuristics",
                    "To sort arrays",
                    "To compress data"
                ],
                correctAnswer: 1,
                explanation: "A* is a pathfinding algorithm that uses heuristics to find the shortest path between two points, combining the advantages of Dijkstra's and greedy best-first search."
            },
            {
                id: 3,
                question: "What is the difference between B-trees and B+ trees?",
                options: [
                    "B+ trees store data only in leaves",
                    "B-trees are faster",
                    "They are identical",
                    "B+ trees are older"
                ],
                correctAnswer: 0,
                explanation: "In B+ trees, all data is stored in the leaf nodes, while in B-trees, data can be stored in both internal and leaf nodes."
            },
            {
                id: 4,
                question: "What is the purpose of the Floyd-Warshall algorithm?",
                options: [
                    "To find shortest paths between all pairs of vertices",
                    "To sort arrays",
                    "To compress data",
                    "To find minimum spanning trees"
                ],
                correctAnswer: 0,
                explanation: "Floyd-Warshall algorithm finds shortest paths between all pairs of vertices in a weighted graph, handling negative weights but not negative cycles."
            },
            {
                id: 5,
                question: "What is the difference between Prim's and Kruskal's algorithms?",
                options: [
                    "Prim's is for directed graphs, Kruskal's for undirected",
                    "Prim's builds the tree from a start vertex, Kruskal's adds edges in order",
                    "They are identical",
                    "Kruskal's is newer"
                ],
                correctAnswer: 1,
                explanation: "Prim's algorithm builds the minimum spanning tree by growing it from a starting vertex, while Kruskal's algorithm adds edges in order of weight."
            },
            {
                id: 6,
                question: "What is the purpose of the Knuth-Morris-Pratt algorithm?",
                options: [
                    "To sort arrays",
                    "To find patterns in strings",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "KMP algorithm efficiently finds occurrences of a pattern within a text string by using information about the pattern itself."
            },
            {
                id: 7,
                question: "What is the difference between deterministic and non-deterministic finite automata?",
                options: [
                    "DFA has one transition per state/symbol, NFA can have multiple",
                    "DFA is faster, NFA is more accurate",
                    "They are identical",
                    "NFA is newer"
                ],
                correctAnswer: 0,
                explanation: "In a DFA, each state has exactly one transition for each symbol, while in an NFA, a state can have multiple transitions for the same symbol."
            },
            {
                id: 8,
                question: "What is the purpose of the Boyer-Moore algorithm?",
                options: [
                    "To sort arrays",
                    "To find patterns in strings",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "Boyer-Moore algorithm is an efficient string-searching algorithm that skips sections of the text based on the pattern's characteristics."
            },
            {
                id: 9,
                question: "What is the difference between TCP and UDP?",
                options: [
                    "TCP is connectionless, UDP is connection-oriented",
                    "TCP is unreliable, UDP is reliable",
                    "TCP is connection-oriented, UDP is connectionless",
                    "They are identical"
                ],
                correctAnswer: 2,
                explanation: "TCP is connection-oriented and reliable, while UDP is connectionless and unreliable but faster."
            },
            {
                id: 10,
                question: "What is the purpose of the RSA algorithm?",
                options: [
                    "To sort arrays",
                    "To encrypt data",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "RSA is a public-key cryptosystem used for secure data transmission, based on the mathematical properties of large prime numbers."
            },
            {
                id: 11,
                question: "What is the difference between symmetric and asymmetric encryption?",
                options: [
                    "Symmetric uses one key, asymmetric uses two",
                    "Symmetric is faster, asymmetric is slower",
                    "They are identical",
                    "Asymmetric is newer"
                ],
                correctAnswer: 0,
                explanation: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses different keys (public and private)."
            },
            {
                id: 12,
                question: "What is the purpose of the Diffie-Hellman key exchange?",
                options: [
                    "To sort arrays",
                    "To securely exchange cryptographic keys",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "Diffie-Hellman allows two parties to establish a shared secret key over an insecure channel, which can then be used for symmetric encryption."
            },
            {
                id: 13,
                question: "What is the difference between HTTP and HTTPS?",
                options: [
                    "HTTPS is faster than HTTP",
                    "HTTPS is unencrypted, HTTP is encrypted",
                    "HTTPS is encrypted, HTTP is unencrypted",
                    "They are identical"
                ],
                correctAnswer: 2,
                explanation: "HTTPS is the secure version of HTTP, using SSL/TLS encryption to protect data in transit."
            },
            {
                id: 14,
                question: "What is the purpose of the SHA algorithm?",
                options: [
                    "To sort arrays",
                    "To create cryptographic hash functions",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "SHA (Secure Hash Algorithm) is a family of cryptographic hash functions used to create fixed-size hash values from input data."
            },
            {
                id: 15,
                question: "What is the difference between a process and a thread?",
                options: [
                    "Processes share memory, threads don't",
                    "Threads share memory, processes don't",
                    "They are identical",
                    "Threads are newer"
                ],
                correctAnswer: 1,
                explanation: "Threads share the same memory space within a process, while processes have separate memory spaces."
            }
        ],
        expert: [
            {
                id: 1,
                question: "What is the time complexity of the Fibonacci heap's decrease-key operation?",
                options: [
                    "O(1) amortized",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                correctAnswer: 0,
                explanation: "The decrease-key operation in a Fibonacci heap has an amortized time complexity of O(1), making it more efficient than binary heaps for certain applications."
            },
            {
                id: 2,
                question: "What is the purpose of the Hopcroft-Karp algorithm?",
                options: [
                    "To find maximum matchings in bipartite graphs",
                    "To sort arrays",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 0,
                explanation: "Hopcroft-Karp algorithm finds maximum matchings in bipartite graphs in O(√V * E) time, which is more efficient than other matching algorithms."
            },
            {
                id: 3,
                question: "What is the difference between a suffix tree and a suffix array?",
                options: [
                    "Suffix trees use more memory but support faster operations",
                    "Suffix arrays are always better",
                    "They are identical",
                    "Suffix trees are newer"
                ],
                correctAnswer: 0,
                explanation: "Suffix trees use more memory but support faster pattern matching operations, while suffix arrays are more space-efficient but slower for some operations."
            },
            {
                id: 4,
                question: "What is the purpose of the Aho-Corasick algorithm?",
                options: [
                    "To sort arrays",
                    "To find multiple patterns in a text simultaneously",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "Aho-Corasick algorithm efficiently finds all occurrences of multiple patterns in a text simultaneously, using a finite automaton."
            },
            {
                id: 5,
                question: "What is the difference between a red-black tree and an AVL tree?",
                options: [
                    "AVL trees are more strictly balanced",
                    "Red-black trees are always better",
                    "They are identical",
                    "AVL trees are newer"
                ],
                correctAnswer: 0,
                explanation: "AVL trees maintain stricter balance conditions than red-black trees, resulting in faster lookups but potentially more rotations during insertions and deletions."
            },
            {
                id: 6,
                question: "What is the purpose of the Bloom filter?",
                options: [
                    "To sort arrays",
                    "To test set membership with possible false positives",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "Bloom filters are space-efficient probabilistic data structures that test whether an element is a member of a set, with possible false positives but no false negatives."
            },
            {
                id: 7,
                question: "What is the difference between a skip list and a balanced binary search tree?",
                options: [
                    "Skip lists use randomization for balancing",
                    "Skip lists are always better",
                    "They are identical",
                    "Skip lists are newer"
                ],
                correctAnswer: 0,
                explanation: "Skip lists use randomization to achieve balance, while balanced binary search trees use deterministic balancing rules."
            },
            {
                id: 8,
                question: "What is the purpose of the Burrows-Wheeler transform?",
                options: [
                    "To sort arrays",
                    "To compress data by rearranging characters",
                    "To find patterns in strings",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "The Burrows-Wheeler transform rearranges data to make it more compressible, and is used in bzip2 compression."
            },
            {
                id: 9,
                question: "What is the difference between a quadtree and an octree?",
                options: [
                    "Quadtree is 2D, octree is 3D",
                    "Quadtree is faster",
                    "They are identical",
                    "Octree is newer"
                ],
                correctAnswer: 0,
                explanation: "Quadtrees partition 2D space into four quadrants, while octrees partition 3D space into eight octants."
            },
            {
                id: 10,
                question: "What is the purpose of the Lempel-Ziv-Welch (LZW) algorithm?",
                options: [
                    "To sort arrays",
                    "To compress data using dictionary-based compression",
                    "To find patterns in strings",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "LZW is a lossless data compression algorithm that builds a dictionary of repeated sequences in the data."
            },
            {
                id: 11,
                question: "What is the difference between a k-d tree and a R-tree?",
                options: [
                    "k-d trees are for point data, R-trees for spatial objects",
                    "k-d trees are always better",
                    "They are identical",
                    "R-trees are newer"
                ],
                correctAnswer: 0,
                explanation: "k-d trees are optimized for point data, while R-trees are designed for spatial objects with extent."
            },
            {
                id: 12,
                question: "What is the purpose of the Fenwick tree (Binary Indexed Tree)?",
                options: [
                    "To sort arrays",
                    "To efficiently calculate prefix sums",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "Fenwick trees efficiently support prefix sum queries and point updates in O(log n) time."
            },
            {
                id: 13,
                question: "What is the difference between a segment tree and a binary indexed tree?",
                options: [
                    "Segment trees support more operations but use more space",
                    "Binary indexed trees are always better",
                    "They are identical",
                    "Segment trees are newer"
                ],
                correctAnswer: 0,
                explanation: "Segment trees support more operations (like range minimum/maximum) but use more space, while binary indexed trees are more space-efficient but support fewer operations."
            },
            {
                id: 14,
                question: "What is the purpose of the van Emde Boas tree?",
                options: [
                    "To sort arrays",
                    "To implement priority queues with small integer keys",
                    "To compress data",
                    "To find shortest paths"
                ],
                correctAnswer: 1,
                explanation: "van Emde Boas trees support priority queue operations in O(log log u) time, where u is the size of the universe of keys."
            },
            {
                id: 15,
                question: "What is the difference between a treap and a randomized binary search tree?",
                options: [
                    "Treaps use priorities for balancing",
                    "They are identical",
                    "Randomized BSTs are always better",
                    "Treaps are newer"
                ],
                correctAnswer: 0,
                explanation: "Treaps use randomly assigned priorities to maintain heap properties, while randomized BSTs use random insertions to achieve balance."
            }
        ]
    },
    // Később további nyelvek, cégek...
};

export default questionsData;