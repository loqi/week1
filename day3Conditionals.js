// Before you get started, we're going to tell the index.html file about this script so it can
// interact with the console of your browser. Find the nearby index.html file and open it in your
// favorite text editor.
//
// 0. Find the line with the `script` tag for the "day2Arrays" script and insert this line right
//    after that line:
//          <script type="text/javascript" src="day3Conditionals.js"></script>

// When the browser parses an HTML file, and it sees a `script` tag for a piece of JavaScript code, it
// waits for the entire JavaScript file (or inline JavaScript code) to load, then it executes that,
// entire piece of JS code, waiting for it to run to completion. After that, it moves on to the next
// bit of HTML code. If that is another `script` tag, it entirely loads that next script, and then
// executes that script to completion, and so on. So in sequence, it loads and runs the day1Objects
// code, and only after completion, it loads day2Arrays and runs it in the new state, having just
// completed running day1Objects.
//
// "State" is a technical term in computer science. It means the way things are at any given moment in
// time. In this context, it refers to the leftover variables and objects that remain resident in the
// interpreter's memory, hanging just run the day1Objects script. When day2Arrays begins running, it's
// in an environment where day1Objects just finished running, so there will be `mythicalAnimal` and
// `thisIsAVariable` listed as global variables. There will be a string `"superPower"` and an object
// `{ cycling: '5000 miles', climbing: '100 days', giving: 'selflessly' }` resident in the data heap
// area maintained by the browser's JavaScript interpreter. All this data will be available to any
// new code the JavaScript interpreter sees. The interpreter "maintains state" between scripts.
//
// So back to the HTML. When day2Arrays is fully loaded, it begins to be executed and its code
// interacts with the interpreter's state as it is, having reached the end of day1Objects. The
// day2Arrays script doesn't use any of the variables created by the previous day1Objects script,
// but that's only because we wrote it that way. It creates its own variables like `treasureChest`
// and its own objects like `['ethically sourced sandals', 'friends', 'colored trousers']` alongside
// the others left behind by day1Objects. We could have written code in day2Arrays that uses
// variables defined in day1Objects, and it would work, so long as our HTML has the script tag for
// day2 after the script tag for day1.
//
// You can roughly think of this as if we just copied and pasted the code from all these script
// files into one big file, in the order they are appear in the HTML code of index.html. And then
// that giant script gets run.
//
// Let's go in and add a third script tag to index.html.

// Having finished excercise #0, there should now be three script tags in a row, for the three days
// of prep curriculum, and they should be in the correct sequence, day1 through day3. Now just make
// sure that your day3Conditionals.js file exists alongside your other two .js files and your
// index.html file in the same directory. That ought to do it. Load index.html straight into your
// browser. The browser will immediately render the HTML and execute the JavaScript as described.

// CONDITIONAL CONTROL STRUCTURES

// The simplest conditional structure of JavaScript is the `if` structure, which takes this form:
//          if (conditional_expression) {
//            zero_or_more_statements;
//          }

// When the interpreter sees the `if` keyword, it evaluates the conditional expression. JavaScript
// requires parentheses around that expression. After evaluating the expression, the interpreter casts
// the result to a boolean (true or false) and then accordingly, it either executes the body of the
// `if` structure, or skips past the body of the `if` structure.
//
// Other imperative languages have their own rules about casting to boolean. The Ruby language follows
// the rule that only `false` or `nil` are falsy, and all other possible values are truthy. The words
// "truthy" and "falsy" come up a lot when we talk nerdy. They are shorthand for "cast to boolean as
// true" or false, as the case may be. The C language doesn't even have a boolean data type. In C, any
// integer is true unless it is zero. The JavaScript syntax is inspired by the Java syntax, which is
// in turn inspired by C++, which is built on the common ancestor C. Whenever you see any computer
// source code sprinkled liberally with curly braces, it's likely you are looking at code for a
// language in the C family of languages. That describes the way the syntax rules are structured, not
// how the thing actually works.
//
// We love JavaScript just the way it is. Its founder had the brilliant insight that an imperative
// langage really only needs about a couple of dozen values to be falsy, and other than those somewhat
// fewish falsies, everything else** can just be truthy!
//                                                                         ** most of the time.
//
// Here is a COMPLETE LIST OF THE FALSY VALUES in JavaScript:
//      * boolean: false
//      * floating point number: 0.0, NaN
//      * string: ""
//      * quazi-object: null
//      * quazi-value: undefined
// Here are some examples of truthy values in JavaScript:
//      * boolean: true
//      * floating point number: 0.00001, infinity, -infinity
//      * string: " ", "0", "false"
//      * object: {}, {"":false}, [], [false], [null]

// Here's an example of an if structure in code:
//          var myNumber = 5150;
//          if (myNumber===5150) {
//            console.log("JavaScript is utterly sane!");
//          }
// This will do what you think it will. Since 5150 remains equal to 5150, our message gets logged.
//
// An `if` structure can have an optional `else` clause, like so:
//          if (conditional_expression) {
//            zero_or_more_statements;
//          } else {
//            zero_or_more_other_statements;
//          }
//
// Since JavaScript, like C, is a whitespace-insensitive language, that whole structure could've been
// on a single line, or the curly braces could have been placed at the end of the previous line or the
// beginning of the next line, and so on. The whitesace characters (newline, ` `, tab) are in the code
// for us humans not for the interpreter. It doesn't care about spaces outside of literals. In keeping
// with today's theme of logic and sanity, a common convention in the C family of languages is to put
// closing curly braces at the beginning of the next line, outdented. In JavaScript culture, the most
// popular convention is to put the `else` keyword on the same line as the closing brace of its `if`
// partner clause, followed by its own opening brace, so we get delightfully kooky lines like
// `} else {`. In JS code, we almost always see `else` surrounded by inside-out curlies. This gives
// us plenty of outdented lines to keep our minds in the left gutter. We usually insert a blank line
// above and below a control structure, to compensate for this indentation style and make it more
// human-readable with visual cues to the code structure. There are many indentation styles, see
// http://en.wikipedia.org/wiki/Indent_style , but in JavaScriptistan, 1TBS is the dominant style.
// Our style guide at Telegraph Academy specifies a variant of 1TBS. When in Rome...

//          var myNumber = 42;
//
//          if (Number.isNaN(myNumber/0)) {
//            console.log("JavaScript is utterly sane!");
//          } else {
//            console.log("D'oh! Brendaaaaaaan!");
//          }
//
//          myNumber = 2 * Math.PI; // watch?v=jG7vhMMXagQ

// The blank lines make the `if` structure visible as one compound entity spanning multiple lines.
//
// Note the structure ends with `}`, not `};`. Sometimes we speak of an "if statement". The official
// JavaScript documentation also uses this terminology. The `if` keyword sets up a control structure,
// which contains statements inside that control structure. `if` doesn't get a semicolon at the end.
// When is a statement not a statement? When it's an `if` statement. An `if` structure can go anywhere
// a statement can go, so we see it as a kind of statement when we find it convenient to think in
// those terms. It is officially a statement, according to ECMA. No trailing semicolon though.

// So that's how to use the `if` keyword to create a conditional control structure. You can have
// as many statements as you want between the curly braces. If you have only one statement, the
// curlies are not strictly required. You could have code like this,
//          if (myNumber===42)
//            console.log("JavaScript is utterly sane!");
//          else
//            console.log("Wow! It's worse than I thought.");
// or something like this,
//          if (myNumber===42)   { console.log("JavaScript is utterly sane!"); }
//          else                 { console.log("Wow! It's worse than I thought."); }
// or even all on a single line.
//
// Omitting the braces or compacting your 'if' code can send your boss or a co-worker into a
// conniption fit with their knickers in a twist. Know who you're working with and know the style
// guide of your project. Always keep your own perma-press knickers twist-free when you encounter
// a foreign style in the wilds of the Internet.

// 1. Since index.html has caused your browser to have already loaded and executed day1 and day2 code
//    before the JavaScript interpreter reaches >>>>HERE<<<< in this day3 code, you should have access
//    to all your mythical creatures and treasures. Write an `if` structure ("an `if` statement")
//    into this here script to report the awesomeness of an array somewhere in memory that is
//    referenced by the treasureChest variable ("the awesomeness of the treausureChest array"). If the
//    chest has six or fewer items, log a message saying how admirably austere your dragon is. If it
//    has seven or more, say how admirably greedy your dragon is.
//
// Your conditional expression likely contains a compare operator (`<` `>` `<=` `>=`) which compares
// two numbers and produces `true` or `false` in the way you expect.
//
// 2. Add a line or two of code above your new `if` statement to manipulate the content of the array
//    just before the `if` executes. Try a few edge cases to check for defects in `if` statement. Try
//    an empty array, an array with exactly five, six, seven, eight elements. Does your 'if' statement
//    do exactly the right thing every time? After testing the line, remove or comment out your
//    debugging code so you don't mess up the treasure chest.

// Later we'll learn about wirting sophisticated test code to check your production code, so you get
// alerted as soon as you break something. We'll also learn to step through your code, line by line
// with a debugging tool and directly inspect and mutate live data as you go. For now, we're living
// in 1960, when all we could do was insert little in-line bits of temporary code and see what happens.


// THE WHILE LOOP

// The most fundamental loop offered by JavaScript is the `while` loop. Here's the form it takes:
//          while (conditional_expression) {
//            zero_or_more_statements;
//          }
// You may have noticed this is exactly the same as an `if` structure. `while` works like `if` but
// instead of running the body once, it runs the body zero or more times, one after the other, until
// the condition becomes false. A `while` statement is a sticky `if` statement.

// When the interpreter arrives at a while loop, it follows these steps:
//          1. if conditional_expression is falsy, goto 4
//          2.   execute zero_or_more_statements;
//          3.   goto 1
//          4. Done with loop.
// WHAT IT DOES NOT DO IS THIS:
//          1.   zero_or_more_statements;
//          2. if conditional_expression is truthy, goto 1
// The `do-while` control structure gives that effect. It looks like this:
//          do {
//            zero_or_more_statements;
//          } while (conditional_statement);
// A `do-while` loop always executes its body at least once.
//
// Note the do-while code has a trailing semicolon. Such are the ways of our world.
// If you write a `while` loop like this:
//          while (someCondition); {
//            doSomething();
//          }
// The interpreter will think you want it to do this:
//          while (someCondition) {
//          }
//          {
//            doSomething();
//          }
// Pesky semicolons! Know where they belong.
//
// In this case, the semicolon means you have a single, un-curlied statement as the body of
// your `while` loop, and that statement is `` (zero characters in length) terminated by the
// semicolon. Then the opening curly brace that looks like its delimiting the `while` loop actually
// means you want to set up a headless code block, inside which you do something. In C, a headless
// code block sets up a local execution context where new variables clean up after themselves. In
// JavaScript, they do that too, except the part about new variables cleaning up after themselves.
// In other words, headless codeblocks are a valid feature of JavaScript, but they have no purpose
// whatsoever, so nobody ever uses them on purpose. You're beautiful, JS. We love you. Never change.

// JUST FOLLOW THIS RULE: Always use semicolons for `do-while` and never use semicolons for `while`.

// An even more fundamental loop is the infinite loop: a loop that loops unconditionally. In other
// languages you might have a keyword just for infinite looping. Ruby has the `loop` keyword for
// that. In JavaScript, the canonical way to accomplish this is with a `while` loop whose conditional
// exrpession is always true. You might say `while (x===x) {...}`, or if you got the memo, you`d say
// `while (true) {...}`.
//
// If your code actually reaches an infinite loop, your browser will have to be interrupted to
// break out of it, unless the body of the loop contains some other control statement like `break`
// or `return` to provide a way out. We won't touch those statements yet. Just know they exist.

// 3. Write a `while` loop that iterates until grandCouncil is an empty array. Use the `pop` array
//    method to log each memeber of the council to the console, in some way you find meaningful.
//    At the end of this loop, you should be left with an dissolved council, and a reverse-order
//    list of former council-members on your console.

// THE FOR LOOP

// The keyword `for` in loop constructs dates back to the 1950s. It was introduced in ALGOL for
// statements like `for i := 1 step 1 until n do` This is an attempt to describe a loop using the
// English-like keywords `for` `step` `until` and 'do'. It translates to English as' "iterate a
// variable `i` for all the values from 1 to `n` by stepping forward by 1 numerical unit per
//  iteration." It turns out we don't really need all those keywords for readability. All they
// are really doing is delimeting fields that always have the same meaning and position, so the
// developers of the C language just used paretheses and semicolons to delineate the important
// fields of code. JavaScript's `for` loops look just like C loops:
//          for (initialization_statement; conditional_expression; increment_statement) {
//            zero_or_more_statements;
//          }
// WHAT THIS DOES NOT MEAN:
//          1. execute initialization_statement
//          2.   execute zero_or_more_statements
//          3.   execute increment_statement
//          4.   if conditional_expression is truthy, goto 2
//          5. Done with loop.
// what this DOES mean:
//          1. execute initialization_statement
//          2. if conditional_expression is falsy, goto 6
//          3.   execute zero_or_more_statements
//          4.   execute increment_statement
//          5.   goto 2
//          6. Done with loop.
// The loopback condition is tested at the *beginning* of each iteration. That way the loop can have
// zero iterations if conditions warrant. While you're new to this, keep thinking of each tiny step
// until it bores you to tears. That will minimize your off-by-one errors forever. When these ideas
// are totally settled in your mind, you no longer need to think so excruciatingly low-level.
//
// You can safely think of `for` as syntactic sugar for `while`. The term "syntactic sugar" means
// you write your code in some way that you like, but behind the scenes it is run as if you had
// written it some other way. Here is a `for` exrpessed as a `while`:
//          initialization_statement;
//          while (conditional_expression) {
//            zero_or_more_statements;
//            increment_statement;
//          }
//
// Occasinally, you'll see an alternate style of inifinite loop around town, like this
//
//          for (;;) { doSomething(); }
//
// That `for` loop translates to this `while` loop:
//
//          ;                             // empty initialization
//          while (    (true);    ) {     // conditional is always true
//            doSomething();              // body of the loop
//            ;                           // empty incrementation
//          }
//
// This reveals that the default value of the conditional expression of a `for` loop is `true`. If
// the second field of the `for` construct is left blank, it is assumed you want an infinite loop.
//
// Sometimes a programmer will take adavantage of the semicolon effect to make a bodyless `for` loop:
//          for (var lameDelay = 0; lameDelay < 10000000; lameDelay++);
//          doSomethingOnce();
// That clever, elegant code was written by an idiot. Judge them! Don't do that in production code or
// you will be judged an idiot. This code is asking for another idiot to come along and fix the code
// by indenting `doSomethingOnce();` since it's obviously the body of the `for` loop. Perhaps they're
// even more conscientious and will wrap it in curlies. Then someone will waste an afternoon figuring
// out why the cute little delay spinner they inserted into the body of that `for` loop isn't
// showing up.
//
// The right way to have a bodyless `for` loop is to unambiguously flag your intention to the reader:
//          for (var lameDelay = 0; lameDelay < 10000000; lameDelay++)
//            ;
// That one might twist the knickers of some curly brace-ophiles. You could instead write
//          for (var lameDelay = 0; lameDelay < 10000000; lameDelay++) {}
// That might twist some knickers of certain obsessive-compulsive vertical sprawl advocates.
//          for (var lameDelay = 0; lameDelay < 10000000; lameDelay++) {
//          }
// That'll crowd-please 'em. Unless they're ultra concerned about idiots pawing through their code.
//          for (var lameDelay = 0; lameDelay < 10000000; lameDelay++) {
//            // This statement intentionally left blank:
//            ;
//          }
// Just never, never write a bodyless `for` loop this way
//          for (var lameDelay = 0; lameDelay < 10000000; lameDelay++);

// You'll see many more `for` loops than `while` loops. You'll almost never see a loop with no body.
// An infinite loop is more useful than you might guess, but it will almost always have some kind of
// pathway out from the middle using control statements. By far the most common loop is `for` with a
// real initialization, a real condition, a real incrementation, and a real body. If you see something
// else, ask yourself if it is really meant to be that way.


// Now let's build an array and an object.
var arr = [100,200,300,400,500];
var obj = {
  city: 'Oakland',
  slingsCode: true,
  excitementLevel: 10
};

// 4. create a `for` loop to iterate through the array. In the body of the loop, console log the
//    string 'hi, I'm inside the array loop!' You should see this pop up five times in your console.
//    This is a pretty good indication that your loop walked each of the five elements as expected.
// 5. Let's make that more explicit. Make a second copy of that loop with the iterator variable `i`,
//    console logging "I'm inside the next loop and `i` is " with the value of your iterator.
// 6. Now let's get even more explicit. Create a third `for` loop that walks `arr` and logs both the
//    iterator variable and the value of the corresponding array element with each iteration.
// 7. Now make a fourth loop that does that again, but in reverse order -- from last to first.
// 8. Now re-write that backward `for` loop as a `while` loop.

// A `for` loop is ideal for walking each element of an array or each character of a string. It can
// Here's the canonical JavaScript `for` loop to walk the elements of an array:
//        for (var i = 0; i < myArray.length; i++) {
//          doSomething(myArray[i]);
//        }
// Your four loops should look something like that one.

// 9. Reason through this process for an array of length zero, one, or more than one, like two,
//    or a hundred. Convince yourself that it does exactly the right thing in each of those cases.
//    Pay special attention to anywhere you might be off by one.

// To avoid off-by-one errors, always think about the exact meaning of your numbers. Are we going
// right up to our limit, or almost, but not quite up to our limit? Well, what's the exact meaning
// of the limit? `for (var i = 0; i < arr.length; i++)` has four numbers hidden it it: `i`, 0,
// `arr.length`, and 1. We think of `i` as the index iterator. It holds each index (distance from the
// beginning of the array to the element we want) in turn starting with 0 (the exact beginning of the
// array). `arr.length` is the total number of elements in the array, or the distance to the end of
// the final element, or the distance to exact place where we have actually run off the end of the
// road. We want to go up to but not including the far edge of the far element. We want the near edge
// of the far element, so we use the `<` operator, not the `<=` operator. The final number is 1.
// It's hidden inside the statement `++i`, which is equivalent to `i += 1`, which is equivalent to
// `i = i +1`. The meaning of the number 1 is the step factor. Becase it's incrementing by 1 per
// iteration, we touch every element in order from 0 to not-quite-length, once per iteration.
//
// You can internalize the meanings of the numbers with geometric diagrams. Here's an array:
//
//      -1    0    1    2    3    4    5    6    7
//       ....[A___ B___ C___ D___ E___ F___ G___]....
//
// Think of the letters as data, the numbers as both the bin number and the distance forward from the
// base element, the last number as both the array length and the first out-of-bound index, and the
// dots as memory real estate not part of this array's index-value store. So valid indexes go from 0
// to one-less-than-length.

// The iterator variable `i` should be zero on the first iteration, but that iteration shouldn't even
// happen for an empty array. On the last time through, `i` should be the value of `arr.length-1` and
// after the loop concludes, `i` should be `arr.length` and stay that way until `i` gets re-written
// by some later code. Think through a few of your `for` loops, looking for defects.

// Once we understand precisely what a `for` loop does, and in what order it does it, we can think
// at a higher level (in bigger conceptual chunks without so much concern for the lower level details).
// If you're stepping through your code with a debugger, this low level sequence of events reveals
// itself, but normally, we just write our loops with confidence that they exhibit these execution
// behaviors.

// Great! Now you can use your counter variable to index into an array.
// Let's do that to mutate an array in place.

// 10. Create a `for` loop to add one to each element of `arr`. Put this loop right above this
//     line that logs the whole array to the console, after uncommenting it:
// console.log(arr);

// We expect to see [101, 201, 301, 401, 501] in your console.
// Have some fun doing this a few more times. Try multiplying each item in arr by some number. Then
// try dividing it by some number. Write entirely new for loops each time, don't just change the '+'
// to a '/'. The goal here is to get practice typing out for loops many times so they stick with you.

// By this point you should be feeling pretty good on iterating through arrays using `for`
// loops! Now let's look into iterating through objects.

// THE FOR..IN LOOP

// JavaScript has an alternate form of the for structure:
//          for (variable in object) {
//            zero_or_more_statements;
//          }
// You can use the var keyword as part of the syntax, `for (var variable in object)`.
// What `for..in` does is, given an object, iterate through the keys of that object, in no
// guaranteed sequence of keys, just one time each in whatever order, and set the variable
// to the string key of that object.

// 11. Iterate the variable `key` through the keys of `obj` using a `for..in` loop. In the body
//     of the loop, put code to build a user message containing both key and the value it is
//     paired with, logging this message to the console. You should get something like this:
//        The city is Oakland
//        The slingsCode is true
//        The excitementLevel is 10

// And now for something completely different.

// 12. Uncomment this code and reload your browser page:
// arr.huh = "huh?";
// arr[7] = 801;
// arr[5] = void 0;              // `void 0` is a JS idiom for generating `undefined` as a value.
// arr[-1] = "negative one";
// arr[.1] = "tenth";
// arr['10'] = "ten";
// arr[50] = void 0;
// arr[100] = "hundred";
// arr[1e3] = "thousand";
// arr[1e100] = "googol";
// for (var k in arr) {
//   console.log("arr["+k+"] is "+arr[k]);
// }
// console.log(Object.keys(arr));
// console.log(arr);

// This shows that arrays are objects, but it also gives us confusing interpretations about how to
// use indexes and keys to access a property or element of an array.

// 13. Puzzle it out yourself and develop a coherent interpretation with your pair.

// 14. Uncomment this line and reload your browser:
// console.log(arr.toString());

// 15. Incorporate this new evidence into your hypothesis. Then read on:




///////////////////////////////////////////
// Here's the Telegraph Academy explanation
//
// An array is an object so it has a key-value data store. Being an array, it also has an index-value
// store. JavaScript, ever eager and helpful is always looking for ways to make our lives more
// action-packed and richly interesting by looking for opportunities to do uninvited type coercion,
// notably between strings and numerics and back again.
//
// When you access an array, JS gives preference to the index-value store. So when the interpreter
// sees a non-negative, non-fraction-bearingc number (100) or a string that can be parsed as a
// non-negative integer ("10"), it takes the liberty of casting it to a real number, and then uses
// that number as an index into the inxex-value store (the real array part of the array). When it
// sees a negative number (-1) or a number with a fractional part (.1), it casts that number to a
// string and looks in the key-value store (the soft object wrapper around the crispy array core).
// But wait, there's more. When it tries to write to an index beyond the end of the array store
// (10, 100, 1000), it allocates enough space to put that element in its proper position, leaving
// all the other the newly allocated elements undefined. But wait, there's still more. When it sees
// There's not enough memory to do that, it casts the number back to a string and writes to its
// key-value store. This double typecasting explains why there are subtle differences in the keys
// in the code and the keys in the array object (`.1` becomes "0.1" and `1e100` becomes "1e+100"
// because the interpreter parses them create real number values, and then stringifies them from
// those numeric values.) So thoughtful. So JavaScript.
//
// On top of all that, JavaScript represents an array's content many different ways.
// `Object.keys(arr)` lists all the indexes as strings, and then all the keys, also as strings.
// Elements explicitly written with the undefined value (50) are defined with undefined. Elements
// allocated but never written (51) are a different sort of undefined. Don't bother trying to explain
// this just yet, there be dragons until you come into your JavaScript superpowers.
//
// `arr.toString()` creates a string that's almost like an array literal without square brackets,
// except that strings are unquoted, objects show up as `[object Object]` and arrays expand right
// inline. The expression `[1,[2,'3'],4,{5:5}].toString()` comes back as "1,2,3,4,[object Object]".
// Okay, so that's nothing like an array literal!
//
// Finally console.log(arr) builds a string in the form "[value, ... unquoted_key: value, ...]"
// It lists all the consecutive values from the index-value store beginning at index zero intil
// it finds an undefined element (the kind that has never been written, not the kind that has
// been loaded with the undefined value). Then it switches to key-value notation, listing all the
// indexes (fake keys, real numbers) of the non-contiguous array elements that have something
// written to them. Then it continues the key-value notation for all the real keys (strings) in
// the key-value store of the array object.
//
// There you have it.
/////////////////////


// 16. Create a `for` loop to iterate through `obj`. In the body of this `for` loop, `console.log`
// the string "hi, i'm inside the for loop for objects!"

// You should see this pop up three times in your console. This indicates that our loop has iterated
// three times, which is the number of properties we specified in the object literal up above. An
// object comes with many properties, just for being a JavaScript object, but only the user-defined
// properties (the user of JavaScript is you, the JS code writer) are iterated by `for..in`
// loops.

// 17. Now make the body of your `for..in` loop log the key at each iteration. Your console should say
//          'city'
//          'slingsCode'
//          'excitementLevel'

// With each iteration of your `for..in` your key variable is just set to the string value
// of each user-defined key of the object in turn.

// 18. Just for fun, create an empty array outside of any `for` loop called arrayOfKeys.
//     At each iteration, push the key into `arrayOfKeys`. After your `for..in` loop, `console.log`
//     `arrayOfKeys`. You should see ['city', 'slingsCode', 'excitementLevel']. Note that they may
//     be in a different order since JavaScript makes no guarantee that an object's keys are
//     arranged in any particular sequence. Add a `console.log` for `Object.keys(obj)` and it
//     should produce the identical array, though it's not technically guaranteed to be in order.

// Okay, now that we've figured out that a key iterator of a `for..in` loop just gets set to each
// user-defined property name in turn, let's use that to access the associated values.

// 19. Write a `for..in` loop to iterate through `obj`, console logging each value. We expect this:
//          'Oakland'
//          true
//          10

// 20. Now make a loop that logs each key and its value together, one console message per property: 
//          city is the key, Oakland is the value
//          slingsCode is the key, true is the value
//          excitementLevel is the key, 10 is the value

// 21. Embed an `if` statement into a loop to log only properties whose value is "Oakland".

// Great! Now, let's create a new `for` loop for `arr`. Inside that loop, only `console.log` a
// value if it is both greater than 100 and less than 400. Tip: `&&` is the logical AND operator,
// which goes in your `if` statement's conditional expression.

// 21. Create another `for` loop for `arr`, only `console.log` the values that are either above
//     400, or less than 200. That is, log them if they are outside the 200 to 400 range. `||` is
//     the logical OR operator.
// 22. Now let's combine an `if` statement with our array `for` loop.
//     Put this `if` statement
//          if(arr[i]) {
//            console.log(arr[i]);
//          }
//     inside a `for` loop that walks `arr`. What do you expect to be logged when you run it?
//     Discuss with your pair and then run it.

// Remember that a JavaScript `if` statement does type coercion, first evaluating your conditional
// expression, and then coercing the resolution of the expression to a boolean according to the
// JS boolean coercion rules described near the top of this script. Here the conditional expression
// is `arr[i]`, which resolves to whatever data value is stashed at index `i` of array `arr`. If
// that value is any of { false, 0, NaN, "", null, undefined }, we say coloquially that the value
// is "falsy", and anything else is "truthy". So each element gets its value logged if it's truthy.
// The properties (as opposed to the array elements) never get looked at by the `for` loop. Even a
// `for..in` loop of an array only iterates over the array elements, not the object keys.

// 23. What's the difference between `===` and `==` and `=` ?
// Try using all three of these operators, and explaing the effects of each one to your partner.
// Once you've done that, some explanations are below. Be sure that you can both give a detailed
// comparison of effects to your partner, they're important!
//
// `===` will always return a boolean value (true, false). It checks whether two things are identical.
// First the expressons on the left an right are resolved to a value, and then these two values are
// compared. If they are not of the same data type, the expression returns false. If they are of the
// same data type, the test continues on to check for equality. It works as expected for strings
// created by the the JS interpreter executing a string literal. If the lengths disagree, it returns
// `false`. Otherwise, it scans the two strings for the first character position where there's a
// mismatch between the two strings. If it makes it all the way to the end with no mismatch, it
// decides the two strings are identical and returns `true`. Any other finding returns `false`.
// Curiously, JavaScript doesn't work this way for arrays, objects, or even Strings (objects created
// through the `String` global object with the `new` keyword. (Don't worry if this doesn't yet have
// meaning to you.) For these objects, `===` compares the memory reference value and returns `true`
// only if the two references point to the selfsame object, which is to say, both references point the
// same memory address. With immediate values like numbers, booleans and null, it works as expected.
//
// `==` YOU SHOULD NEVER USE THIS. Use tongs to deposit into the nearest trash receptacle. Seriously.
// It seemed like a good idea to Brendan Eich at the time. It's a treatcherous and sadistic compare
// operator made of pure evil. It offers no discernable advantage of any kind over `===`, except
// perhaps the hilarity high jinks. Also, other programmers will sometimes judge you for using `==`.
// Even if you master its subtleties and bend it to your will, some other programmer is an expert at
// evaluating the skill of anyone who would ever touch JS `==` for any reason. You'd just be setting
// someone (probably yourself) up for a piano from the sky one day. When considering the merits of
// `==` for inclusion in your next line of code, chew on a wad of foil until you eventually make the
// right call.
//
// `=` This is for assignment. When you use the single equals, you are setting the storage location on
// the left side of the operator equal to the resolution of the expression on the right side of the
// operator. `x = 'I totally understand my assignments!'` means that we are overwriting any value that
// was in x with a reference to the string. Some subtleties to keep in mind: When the thing on the
// left doesn't exist, JS will often try to make it. `myObj.myKey = 0` creates or overwrites that
// property. `myArray[20] = 'abc'` overwrites the element at index 20, and widens the array if
// needed. 'x = -50' searches up the scope tree until it either finds a variable called `x` or runs
// out of places to look. If still not found, it creates a new variable by that name in the global
// scope. You may not yet know what this means. You'll learn it soon. Finally, after both sides are
// evaluated and the righthand value has been written to the lefthand location, that value that was
// just written is returned as the resolution value of the `=` expression. So if you see an `=`
// operator used as part of a bigger statement, you can see how it fits into the whole thing.
//          a = b = c
// means the same as
//          a = (b = c)
// which in turn means
//          a = (b = (c))
// The expression in the innermost parentheses is resolved, no matter how complex, eventually becoming
// some value then the thing in the next pair of parentheses outward, and so on. Try following the
// sequence of events here:
//          myArray[++i] = myObject[myString] = x*y*z;
// Play around with the `=` operator if you're curious! Curiosity is a wonderful trait in engineers.

// BONUS ROUND: PLUS-EQUALS OPERATOR: `+=`

// Look at this code.
    var plusEqualsVar = 5;
    plusEqualsVar += 10;
    // console.log('plusEqualsVar after += 10 is:', plusEqualsVar);
    // What `+=` does is exacly the same as if you had typed
    var assignedVar = 5;
    assignedVar = assignedVar + 10;
    // console.log('assignedVar after assignedVar = assignedVar + 10 is:',assignedVar);
//FIXME: was originally `assignedVar = assignedVar = 10;`
//How can this get past all those students. Didn't anybody speak up?

// EXTRA CREDIT

// 24. Look up the standard methods that JavaScript gives you with an array object. Figure out how
// to make a nested `if` statement that checks the treasure chest for a particular item such as,
// "rhinestone-studded bowling ball, iron, double thumb holes". If the array has that string anywhere
// in it, log this fact to the console, otherwise report the fact that the bowling ball is not
// in the chest.
//
// 25. Uncomment this code:
//          if (!mythicalAnimal2) {
//            console.log("No second mythical animal exists.");
//          } else if (!mythicalAnimal2.superpower) {
//            console.log("The second mythical animal has no special ability.");
//          } else if (mythicalAnimal2.superpower === "X-ray vision") {
//            console.log("The second mythical animal cannot see through castle walls.");
//          } else {
//            console.log("The second mythical animal sees you right now!");
//          }
//     Edit day1Objects in such a way as to make each of these messages log to the console when
//     you refresh your browser pointing at `index.html`.

// This works exactly like this:
//          if (!mythicalAnimal2) {
//            console.log("No second mythical animal exists.");
//          } else {
//            if (!mythicalAnimal2.superpower) {
//              console.log("The second mythical animal has no special ability.");
//            } else {
//              if (mythicalAnimal2.superpower === "X-ray vision") {
//                console.log("The second mythical animal cannot see through castle walls.");
//              } else {
//                console.log("The second mythical animal sees you right now!");
//              }
//            }
//          }
// However, since JavaScript allows uncurlied `if` and `else` clauses, it is possible to write
// it with fewer braces. And since the indentation police give a special dispensation for `else-if`
// structures, you're allowed to not crawl your indentation forward with each clause.

// 26. JavaScript has a conditional control structure specifically designed for use instead of the
//     `else-if` pseudo-structure in exercise 25. Search the JavaScript documentation to find it.
//     Use what you found to restate exercise 25 code in the form of that new control structure.


// If you made it most of the way here, you already know more about JavaScript objects, arrays, and
// conditionals than most professional JavaScript developers. Really. Yes, really.
//
// There are tons of pitfalls and misconceptions about what JavaScript is and how it works. If you
// are only confused about a few points we covered, you're way ahead of the game.
//
// Tomorrow we pound through a topic that JavaScript got mostly right: functions and the functional
// programming paradigm.

// Congratulations to you, friend and scholar! You have earned your rest.
