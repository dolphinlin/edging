Write a program that uses `Edge.js` to create and execute a C# function which takes one argument, parses it as an integer number and returns its square.
You should pass the string provided to your program in `process.argv[2]` to the C# code and write its return value to the standard output.

----------------------------------------------------------------------
## HINTS

Edge.js accepts single-line C# functions which take one argument of type `Object`. 
The function should be declared as `async` and should always return a value.

```js
var func = edge.func('async (input) => input.ToString() + " world!"');

func('hello', function(err, result) {
    // here result will be equal to 'hello world!'
});
```

You should use standard .NET library functions to convert the input argument to a number and then return its square.

----------------------------------------------------------------------
