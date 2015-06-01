// WELCOME TO FUNCTIONS!

// First things first, make sure to add this file to your index.html file, just like you
// did yesterday. Functions are an incredibly important part of JS. They let us follow the
// programming best practice of being DRY (Don't Repeat Yourself). Whenever we start typing
// the same thing multiple times, we can probably put that inside a function, making our
// lives easier, and our code easier to read.

// Let's ease into this.
// 1. Let's create a function called speak that takes in a single parameter called item, and
//    logs that item to the console.
  var speak = function(item) {
    console.log('item is set equal to what the user passed into us:', item);
  }
// Which part of this is the function body? What is the parameter? What is the argument?
// Is this function a return value function, or a side-effect function?
// What happens if we change console.log(item) to have quotes around item, like
// `console.log('item')`? The parameter `item` is simply a variable, automatically created
// by the interpreter at runtime and loaded with the argument used in the invocation.
// This is a point of common terminology confusion. There is a difference between an
// argument and a parameter. At runtime, this function may be invoked ("called") by code
// that looks like this `speak("hello");` or like this `speak(5150);`. In either case, the
// the speak function has one parameter, an automatically managed local variable called `item`
// and the argument is whatever the value happens to be passed in at any particular time it's
// invoked, like "hello" or 5150. The argument is the ball; the parameter is the basket.
//
// The function body is everything between the curly braces. The 'arity' of a function
// is the count of how many arguments it takes. In JavaScript, a function is a kind of
// object. Like other objects, functions have properties. When a function is created, its
// length property is set to the arity of that function.
// 2. What do you expect the expression `speak.length` to resolve to?
// Try this code and see if it shows what you expected `console.log(speak.length);`

// So the parameter `item` is created and loaded with what the calling code passes as an
// argument. And that you can/should be console.logging it to verify what it is.
// 3. Now change the parameter name from item to val.
// Repeat what we did in #1, passing in a variety of values just to verify that what the
// user passes in to us is stored into val.

// A function is an oject whose special talent is to carry and run code when asked to.
// It is created in one of two primary ways, both of which use the `function` keyword.
// Just as strings, arrays, and objects can be created and populated when the interreter
// sees the appropriate literal, so too, functions can be created and populated.
// In this form, we use the function keyword like this:
//        var myVar = function(parm1, parm2, parm3) { doSomething(); };
// Here, everything from `function` to `}` gives the interpreter everything it needs to
// block of code that we ask the JavaScript interpreter to create a new function object.
// Such a form is properly called an anonymous function, or sometimes a function expression
// which is a much more general term, but it can be useful to think of it as a function
// literal. You might say, how could this be an anonymous function, it clearly has the
// name `myVar`. Actually, that is the name of a variable, and that variable happens to
// currently contain a reference to an un-named function object somewhere in memory.
// In the same way, this code
//        var myOtherVar = "Hiya, Handsome!";
// creates a variable with a name that points to a string object without a name.
// To be technically correct, a function literal is any code that tells the interpreter
// how to build up a function object in one step. I prefer to slightly abuse the terminology.
// I call the anonymous function form a function literal to emphasize its similarity to
// other kinds of data that get built in place by the interpreter and then get their
// references passed around and manipulated. Contrast that form with this form:
//        function myFunc(pram1, parm2, parm3) { doSomething(); }
// This does almost the same thing as the myVar version above. Here are the differences.
// JavaScript keeps track of the name myFunc as a function name, not a variable name.
// That means it can report the function name in runtime error messages. If this code is
// inside some other function code, the creation of this function happens before other
// code in that outer function is executed. This out-of-sequence running pattern is
// called 'hoisting'. Similarly, var statements get hoisted. We go into hoisting issues
// more in later units.
//
// The Hack Reactor network encourages beginners to use the anonymous form. The
// `var name = function(){};` rather than the `function name(){}` form. If you don't
// yet understand the issues or don't have an articulable reason to deviate, just
// defer to what they say.
//
// Whether named or anonymous, a function object is created and ready to run whenever
// needed. It gets built in any free space the interpreter finds in the heap. And there
// it waits to be invoked at any time. In JS, no function is ever invoked without round
// parentheses. There are all kinds of ways to build an invoke functions with IIFE tricks
// but every possible way to invoke a function from within JavaScript code requires a
// pair of round parentheses to the right of an expression that resolves to a function
// object. In most of our code, that means an expression like this
//          function_name_or_variable_pointing_to_a_function_object(optional_parameters)
//
// So let's build some functions, stash them around, and run them.

// 3. Create a function called climbHalfDome, that just console.logs "Yay, congrats on
//    climbing such an awesome rock!". Do not invoke this function. Notice how we never see
//    that show up in our console, because the interpreter doesn't ever get inside the
//    function body until we invoke that function.
// 4. Inside of climbHalfDome, console.log variables that don't exist. These will throw
//    errors as soon as this function is invoked, but since it isn't invoked yet, JS
//    doesn't give us any errors!
// 5. Now invoke the function, and notice that the interpreter only now enters the body of
//    the function to execute the code for the first time, and finds the errors when we
//    invoke it.

// Just to recap, a function is a set of instructions that we write down and store. It's
// like driving directions from the airport to your house. And you get to use these
// directions at your discretion! You can use them immediately, or hand them out to friends
// when they come to visit, or never use them at all if you decide all of a sudden that you
// prefer trains. This set of instructions can be invoked many times by many different people
// with different arguments (type of car, time of day, traffic conditions, etc.).
// Much as our `for` loops are just blocks of code that we get to run once for each item in
// an array, a function is just a block of code that we get to run once per time that it's invoked.
// Whenever you put the open and closed parens () next to a function name, you will invoke that
// function right there. This seems obvious now, but will trip many of you up later when we get to
// functional programming (next week, next week!), so remember it.


// SIDE EFFECTS
//  "Pure functions" are functions that have no side effects at all. A side effect is an alteration
//  of the state of the world outside the function in some way other than simply returning a value
//  as an outcome of running the function. This change of state could mean anything from writing
//  to global variables, updating a database, or even moving a robot arm. Many useful functions
//  exist solely for the side effects they produce. `console.log` wouldn't be much use if it didn't
//  print a message to the user's console. Side effects can create messy networks of interlocking
//  dependencies and state coupling, but not having side effects can lead to useless programs. The
//  balance we strike as engineers is to minimize our side effects, and as much as possible, we
//  route our side effects through managing systems. Like it's possible to write programs to directly
//  manipulate the pixels of the screen, it's probably a bad idea to do that. Instead, we ask the
//  window manager to do it for us. It's easier and safer. In JavaScript on a browser, we aren't
//  even allowed that level of access. We might ask the browser to send an browser popup alert to the
//  user, or we manipulate the DOM elements to push HTML and CSS elements around the viewport.
//  A function is a pure function when it does nothing at all but generate a return value and
//  return it. You can run it idempotently, meaning running it a second or third time does nothing
//  differently, except of course to take more time to execute. One useful mechanism for orderly
//  side effects in JavaScript is to manipulate variables created in a closure scope. This causes
//  side effects outside a function, but not beyond the level where the closure variable is declared.
//  That's just a fancy way of saying you can put var statements in your code, and functions defined
//  alongside that code or nested within those functions can see and manipulate those variables,
//  but the side effects don't reach to outer function contexts beyond the var declaration.
// 6. Create a function called add5Return. All it does is take in a single number, and return that
//    number plus 5. Do not put any console.logs inside this function- we're going to play with
//    that part next!
// 7. Invoke add5Return from inside your day4Functions.js file. What do you see in the console?
//    Answer: nothing!
//    What's going on here?
//    We're invoking the function, it's running and doing what we want, but we're not doing anything
//    with the results returned from it.
//    Try capturing the results of add5Return into a variable, like so:
//    var add5Results = add5Return(10);
//    console.log that variable. Now what do you see in your console?
//    If you don't do anything with the result a function returns, it will have done all that work,
//    only to hand the results off to nothing, essentially dropping it on the floor since nothing was
//    there to catch it.
// 8. Create a variable in the global scope called sideEffectResults, and set it equal to 20.
// 9. Create a function called add5SideEffect that takes in no parameters, and doesn't return
//    anything. Instead, this function will have a side effect by adding 5 to sideEffectResults.
//    Invoke add5SideEffect inside your day4Functions.js file. What do you see in your console?
//    Answer: nothing!
//    console.log sideEffectResults. Now what do you see in your console? add5SideEffect worked!
//    It had a side effect, in this case changing a variable available in the global scope.
//    Out of curiosity, what happens when you try the following line?
//    var sideEffectReturn = add5SideEffect();
//    What is sideEffectReturn equal to? Well, it's equal to whatever we're returning from invoking
//    add5SideEffect. Which is nothing, right, since we don't have a return statement?
//    If a function doesn't explicitly return anything with a return statement, JS will help us out
//    by automatically returning undefined for us. All functions therefore return something, even if
//    it's just undefined.
// 10. Discuss with your partner what a side effect is vs. a returned value.
//    Talk about how we observe the results of each one.
//    Talk about what happens when we store (or don't?) the results of a function that has a side
//    effect, vs. what happens when we store the results of a function that has a returned value.

// 11. The execution of a return statement causes an immediate return from a function without evaluating
//    the rest of a function from being executed. It's kind of like that function has fulfilled it's
//    destiny, and gets to retire now. Let's test this out.
//    Inside one of your previous functions, console.log a variable that doesn't exist before your return
//    statement. Notice how the JS interpreter throws a nasty error.
//    Move that error-inducing line until after the return statement. What happens now?
//    The return statement tells the interpreter that we're done with all the code inside the function
//    body, so the error-inducing code after the return statement never gets executed!

// We can return anything we want from a function!
// 12. Let's create a function called superPowerAdder, that does a few things:
//      A. takes in a single object
//      B. adds a superPower property with a value of 'JS ninja-ing'
//      C. Returns that object
//      Invoke this function inside a for loop that's iterating through the grandCouncil array
//      we created on Tuesday. Make sure to ignore the string in that array, and only invoke
//      superPowerAdder on the objects. Overwrite each object in the grandCouncil array with
//      the respective results of superPowerAdder
//      As always, console.log frequently at various steps along the way to make sure your
//      results are what you're expecting them to be!

// 13. Define a function called animalMaker. This function has three parameters:
//      inputType
//      inputSuperPower
//      inputCanFly
//      This function will return an object based on this user input.
//    Example results:
//    var createdAnimal = animalMaker('red panda','being ridiculously cute',false);
//    console.log(createdAnimal);
//    --- will cause this output to be logged ---
//              {
//              type: 'red panda',
//              superPower: 'being ridiculously cute',
//              canFly: false,
//              createdBy: 'preston'
//              }
//    Notice how each animals will have a createdBy property that will be the same for all of them.
//    But then the rest of the properties are set equal to the inputs the user gives us.

// Congrats, you now have a bunch of practice with functions!
// Let's review for a minute:
// Functions are just objects that you can be later invoked an run.
// We define them and invoke them separately. Putting () next to the function name inokes the
// function right there. Returning a value from a function is the one direct tunnel you have from
// within a function to the world outside the function. return statements immediately end the
// function invocation execution and send back any associated value to the calling code.
// Functions can have side effects, modifying variables outside of the function body.
// The parameters we define for a function will be set equal to what the user passes in to us.
// This part just happens automatically for us!

// Next week we'll be putting together everything we learned this week with a bunch of practice!
