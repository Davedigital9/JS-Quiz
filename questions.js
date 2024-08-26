//creating an array and passing the number, questions, option and answers
let questions = [
    {
        numb: 1,
        question: "What is the print function in Python?",
        answer: "A function to output text to the screen",
        option: [
            "A function to add numbers",
            "A function to output text to the screen",
            "A function to ask for user input",
            "A function to perform arithmetic operations"
        ]
    },

    {
        numb: 2,
        question: "What is the correct file extension for Python files?",
        answer: ".py",
        option: [
            ".pt",
            ".py",
            ".python",
            ".pyt "
        ]
    },

    {
        numb: 3,
        question: "What is the output of the following code? [print(2 ** 3)]",
        answer: "8",
        option: [
            "5",
            "6",
            "8",
            "9"
        ]
    },

    {
        numb: 4,
        question: "Which of the following is a valid variable name in Python?",
        answer: "variable_name",
        option: [
            "1_variable",
            "variable_name",
            "variable-name",
            "variable name"
        ]
    },

    {
        numb: 5,
        question: "Which data type is not supported in Python?",
        answer: "Array",
        option: [
            "List",
            "Dictionary",
            "Tuple",
            "Array"
        ]
    },

    {
        numb: 6,
        question: "Which of the following functions can be used to get the length of a string in Python?",
        answer: "len()",
        option: [
            "length()",
            "count()",
            "len()",
            "size()"
        ]
    },

    {
        numb: 7,
        question: "Which of the following is used to define a block of code in Python?",
        answer: "Indentation",
        option: [
            "Curly braces {} ",
            "Parentheses ()",
            "Square brackets []",
            "Indentation"
        ]
    },

    {
        numb: 8,
        question: "How do you start a function in Python?",
        answer: "def function():",
        option: [
            "function()",
            "def function():",
            "def function{}",
            "func()"
        ]
    },

    {
        numb: 9,
        question: "Which of the following is used to handle exceptions in Python?",
        answer: "try...except",
        option: [
            "try...except",
            "try...catch",
            "catch...except",
            "do...catch"
        ]
    },

    {
        numb: 10,
        question: "What is the output of the following code? [ print(5 == 5.0) ]",
        answer: "True",
        option: [
            "None",
            "True",
            "False",
            "Error"
        ]
    },

    {
        numb: 11,
        question: "What is the output of the following code?[ print(bool(False)) ]",
        answer: "True",
        option: [
            "True",
            "False",
            "Error",
            "None"
        ]
    },

    {
        numb: 12,
        question: "What does the following Python code output? [ print([1, 2, 3] + [4, 5]) ]",
        answer: "[1, 2, 3, 4, 5]",
        option: [
            "[1, 2, 3, 4, 5]",
            "[5, 7, 9]",
            "15",
            "Error"
        ]
    },

    {
        numb: 13,
        question: "Which of the following methods can be used to add an element to the end of a list?",
        answer: "append()",
        option: [
            "append()",
            "insert()",
            "add()",
            "extend()"
        ]
    },

    {
        numb: 14,
        question: "Which of the following is the correct syntax for defining a class in Python?",
        answer: "class MyClass:",
        option: [
            "class MyClass:",
            "def class MyClass:",
            "define MyClass:",
            "class(MyClass):"
        ]
    },

    {
        numb: 15,
        question: "What is the output of the following code?[ print({1, 2, 3} & {2, 3, 4}) ]",
        answer: "{2, 3}",
        option: [
            "{1, 2, 3, 4}",
            "{2, 3}",
            "{1, 4}",
            "{1}"
        ]
    },

    {
        numb: 16,
        question: "Which of the following is used to create an anonymous function in Python?",
        answer: "lambda",
        option: [
            "def",
            "lambda",
            "func",
            "function"
        ]
    },

    {
        numb: 17,
        question: "What is the output of the following code? [ print([x for x in range(5) if x % 2 == 0]) ]",
        answer: "[0, 2, 4]",
        option: [
            "[0, 2, 4]",
            "[0, 1, 2, 3, 4]",
            "[1, 3, 5]",
            "[2, 4]"
        ]
    },

    {
        numb: 18,
        question: "Which of the following is a mutable data type in Python?",
        answer: "List",
        option: [
            "Tuple",
            "String",
            "List",
            "Integer"
        ]
    },

    {
        numb: 19,
        question: "Which of the following is a Python built-in function to convert an object to a string?",
        answer: "str()",
        option: [
            "str()",
            "to_string()",
            "string()",
            "convert()"
        ]
    },

    {
        numb: 20,
        question: "What is the output of the following code? [ print(all([True, True, False])) ]",
        answer: "False",
        option: [
            "True",
            "False",
            "Error",
            "None"
        ]
    },

    {
        numb: 21,
        question: "What does the `zip()` function do in Python?",
        answer: "Combines multiple lists into a single list of tuples",
        option: [
            "Combines two lists into a dictionary",
            "Combines multiple lists into a single list of tuples",
            "Zips files in the file system",
            "None of the above"
        ]
    },

    {
        numb: 22,
        question: "Which of the following methods can be used to remove an element from a list by value?",
        answer: "remove()",
        option: [
            "delete()",
            "remove()",
            "pop() ",
            "discard()"
        ]
    },

    {
        numb: 23,
        question: "Which of the following is true about Python dictionaries?",
        answer: "They store key-value pairs",
        option: [
            "They are ordered",
            "They can have duplicate keys",
            "They are immutable",
            "They store key-value pairs"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is the correct syntax to open a file in Python for reading?",
        answer: "open('file.txt', 'r')",
        option: [
            "open('file.txt', 'r')",
            "open('file.txt', 'w')",
            "open('file.txt')",
            "open('file.txt', 'rb')"
        ]
    },

    {
        numb: 25,
        question: "What is the purpose of the pass statement in Python?",
        answer: "It is used as a placeholder for future code.",
        option: [
            "It is used to pass arguments to functions.",
            "It is used to pass control to the next iteration.",
            "It is used as a placeholder for future code.",
            "It is used to pass values between variables."
        ]
    },

    {
        numb: 26,
        question: "What is the output of the following code? [ print(type([])) ]",
        answer: "<class 'list'>",
        option: [
            "<class 'tuple'>",
            "<class 'dict'>",
            "<class 'list'>",
            "<class 'set'>"
        ]
    },

    {
        numb: 27,
        question: "Which keyword is used to define a generator in Python?",
        answer: "yield",
        option: [
            "return",
            "yield",
            "generate",
            "def"
        ]
    },

    {
        numb: 28,
        question: "Which of the following statements is used to terminate a loop in Python?",
        answer: "break",
        option: [
            "exit",
            "stop",
            "break",
            "terminate"
        ]
    },

    {
        numb: 29,
        question: "What is the output of the following code? [ print(10 // 3) ]",
        answer: "3",
        option: [
            "3",
            "3.33",
            "4",
            "3.0"
        ]
    },

    {
        numb: 30,
        question: "Which of the following is a Python set method?",
        answer: "add()",
        option: [
            "insert()",
            "add()",
            "append()",
            "update()"
        ]
    },

    {
        numb: 31,
        question: "Which of the following is the correct way to create a dictionary in Python?",
        answer: "my_dict = {'key': 'value'}",
        option: [
            "my_dict = {'key', 'value'}",
            "my_dict = ['key': 'value']",
            "my_dict = {'key': 'value'}",
            "my_dict = ('key': 'value')"
        ]
    },

    {
        numb: 32,
        question: "What is the result of the expression: [ 3 * 'abc' ]?",
        answer: "abcabcabc",
        option: [
            "abcabcabc",
            "abc*abc*abc",
            "abc",
            "abcabc"
        ]
    },

    {
        numb: 33,
        question: "Which of the following is the correct syntax to import a module named 'math'?",
        answer: "import math",
        option: [
            "import.math",
            "include math",
            "using math",
            "import math"
        ]
    },

    {
        numb: 34,
        question: "What is the output of the following code? [ print('Hello'[1]) ]",
        answer: "e",
        option: [
            "H",
            "e",
            "l",
            "o"
        ]
    },

    {
        numb: 35,
        question: "Which of the following operators is used to compare two values in Python?",
        answer: "==",
        option: [
            "=",
            "===",
            "==",
            "<>"
        ]
    },

    {
        numb: 36,
        question: "What is the output of the following code? [ print(bool('False')) ]",
        answer: "True",
        option: [
            "False",
            "True",
            "None",
            "Error"
        ]
    },

    {
        numb: 37,
        question: "Which of the following is not a built-in data type in Python?",
        answer: "Graph",
        option: [
            "String",
            "Graph",
            "List",
            "Set"
        ]
    },

    {
        numb: 38,
        question: "Which function is used to get the ASCII value of a character in Python?",
        answer: "ord()",
        option: [
            "chr()",
            "ascii()",
            "ord()",
            "char()"
        ]
    },

    {
        numb: 39,
        question: "Which of the following can be used to create a tuple with one item?",
        answer: "(item,)",
        option: [
            "(item)",
            "[item]",
            "{item}",
            "(item,)"
        ]
    },

    {
        numb: 40,
        question: "Which of the following is used to check if an element is present in a list?",
        answer: "in",
        option: [
            "exists",
            "contains",
            "in",
            "has"
        ]
    },

    {
        numb: 41,
        question: "What is the output of the following code? [ print(len('Python')) ]",
        answer: "6",
        option: [
            "5",
            "6",
            "7",
            "8"
        ]
    },

    {
        numb: 42,
        question: "What does the following code output? [ print('Hello World'.lower()) ]",
        answer: "hello world",
        option: [
            "HELLO WORLD",
            "hello world",
            "Hello World",
            "helloworld"
        ]
    },

    {
        numb: 43,
        question: "Which of the following is the correct way to create an empty set in Python?",
        answer: "set()",
        option: [
            "{}",
            "[]",
            "set()",
            "set([])"
        ]
    },

    {
        numb: 44,
        question: "Which of the following statements will remove the 'name' key from a dictionary?",
        answer: "del my_dict['name']",
        option: [
            "remove my_dict['name']",
            "my_dict.delete('name')",
            "del my_dict['name']",
            "my_dict.remove('name')"
        ]
    },

    {
        numb: 45,
        question: "What is the output of the following code? [ print(2 * (3 + 4)) ]",
        answer: "14",
        option: [
            "10",
            "12",
            "14",
            "16"
        ]
    },

    {
        numb: 46,
        question: "Which of the following methods returns the value of a specified key in a dictionary?",
        answer: "get()",
        option: [
            "fetch()",
            "retrieve()",
            "get()",
            "find()"
        ]
    },

    {
        numb: 47,
        question: "What is the output of the following code? [ print([1, 2, 3] * 2) ]",
        answer: "[1, 2, 3, 1, 2, 3]",
        option: [
            "[1, 2, 3, 1, 2, 3]",
            "[2, 4, 6]",
            "[1, 2, 3]",
            "[1, 1, 2, 2, 3, 3]"
        ]
    },

    {
        numb: 48,
        question: "Which of the following methods can be used to convert a string to uppercase?",
        answer: "upper()",
        option: [
            "uppercase()",
            "upper()",
            "toUpperCase()",
            "capitalize()"
        ]
    },

    {
        numb: 49,
        question: "What is the output of the following code? [ print(list('abc')) ]",
        answer: "['a', 'b', 'c']",
        option: [
            "['a', 'b', 'c']",
            "['abc']",
            "['a', 'abc']",
            "['ab', 'c']"
        ]
    },

    {
        numb: 50,
        question: "Which of the following is the correct syntax for a Python list comprehension?",
        answer: "[x for x in iterable]",
        option: [
            "[x for x in iterable]",
            "{x for x in iterable}",
            "(x for x in iterable)",
            "<x for x in iterable>"
        ]
    }

]