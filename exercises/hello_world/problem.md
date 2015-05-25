Write a program that uses `Edge.js` to execute the C# function passed in its string form as the first command line argument (`process.argv[2]`) to your program.

You should pass the string 'EDGE' to the C# code and write its return value to the standard output.

----------------------------------------------------------------------
## HINTS

Edge.js is able to execute C# code written in its source form as a string:

```js
// this C# code converts its input argument into a string
// then returns it, concatenated with the string " world!"
var func = edge.func('[provided to you in this exercise]');

func('hello', function(err, result) {
    // here result will be the return value of the C# code
});
```

You should install Edge.js using `npm` and `require` it from within your program.

In this exercise the C# code you supply to the `edge.func` function will be provided to you and you can access it using `process.argv[2]`.

----------------------------------------------------------------------
