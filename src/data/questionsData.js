const questionData = {

    javascript: {
        beginner: [
            {
                id: 1,
                question: "What is the output of typeof null in JavaScript?",
                options: [
                    "null",
                    "object",
                    "undefined",
                    "boolean"
                ],
                correctAnswer: 1,
                explanation: "Due to a legacy bug in JavaScript, typeof null returns 'object'."
            },
            {
                id: 2,
                question: "Which keyword declares a constant?",
                options: [
                    "let",
                    "var",
                    "static",
                    "const"
                ],
                correctAnswer: 3,
                explanation: "The 'const' keyword is used to declare variables that cannot be reassigned."
            },
            {
                id: 3,
                question: "What does .map() do on an array?",
                options: [
                    "Sorts the array",
                    "Filters elements",
                    "Modifies in-place",
                    "Creates a new transformed array"
                ],
                correctAnswer: 3,
                explanation: "The .map() method returns a new array with modified elements."
            },
            {
                id: 4,
                question: "How to check if a variable is an array?",
                options: [
                    "typeof variable === \"array\"",
                    "variable instanceof Object",
                    "Array.isArray(variable)",
                    "variable.type === \"array\""
                ],
                correctAnswer: 2,
                explanation: "Array.isArray(variable) is the safest and most accurate way to check for arrays."
            },
            {
                id: 5,
                question: "How to write a comment in JavaScript?",
                options: [
                    "<!-- comment -->",
                    "# comment",
                    "/* comment */",
                    "-- comment"
                ],
                correctAnswer: 2,
                explanation: "JavaScript uses /* */ for block comments."
            }
        ]
    }
    
}