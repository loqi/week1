// Before you get started, we're going to load this file into our index.html file so we can see
// our console.logs show up in the browser like we have the past two days. To do this, open up
// your index.html file in your favorite text editor. You'll notice that we're loading up several
// script files already, for the exercises we've done over the past two days.
//      <script type="text/javascript" src="day2Arrays.js"></script>
// What the browser is doing is going off and loading/executing them in the order we give these files.
// So first it's going to go through and load up the day1Objects.js file, and execute all the code in it.
// Then, after completely running day1Objects.js, it's going to run day2Arrays.js to completion, with all
// the varibles created by day1Objects.js still in memory and available to us since it's already been run!
// You can roughly think of this as if we just copied and pasted the code from these two files into the
// same file, in the order that we gave the file names and then run that giant script.
//
// Let's go through and duplicate one of these lines, changing the name of the file to day3LoopsAndIf.js.
// Now just make sure that your day3LoopsAndIf.js file exists alongside your other two .js files and
// your index.html file in the same director. Now you should be good to load index.html into your browser.

// LOOPS:

// Here's code to build an array and an object, and to save the two references into two arrays.
var arr = [100,200,300,400,500];
var obj = {
  city: 'Oakland',
  slingsCode: true,
  excitementLevel: 10
};

// 1. create a for loop to iterate through the array referenced by arr.
// Inside the body of the for loop, console log the string 'hi, I'm inside the for loop for arrays!'
// You should see this pop up five times in your console. This should tell you that the for loop has
// executed five iterations before terminating.
// A for loop follows this basic structure
//        for (initialization_statement; loopback_conditional_expression; incrementation_statement) {
//           zero_or_more_iteratable_statements;
//        }
// Here's some pseudocode that expands all the shorthand and makes it visible.
//        1. execute initialization_statement
//        2. if loopback_conditional_expresson is NOT true, jump to line 6
//        3.    execute zero_or_more_iterable_statements
//        4.    execute incrementation_statement
//        5.    jump to line 2
//        6. Done with loop
// In particular, notice that the loopback condition is tested at the *beginning* of each iteration.
// That means something like `for (var i=0; i<0; i++) { doSomething(); }` will not iterate at all.
// Expanding this loop to the pseudocode, line 1 creates a variable i with numeric 1 in it; line 2
// sees that 0 is not less than 0 and so it jumps to line 6. Done.
// We can see from this that an array of length zero, one, or anything will exhibit the expected
// behavior for a loop of the form `for (vari=0; i<myArray.length; i++) { doSomething(i); }`. The
// number of iterations is equal to the length of the array for any possible length, and at each
// iteration, the variable `i` steps through all valid indexes beginning with 0 and never quite
// reaching the first too-big index before exiting. There's no magic there.

// 2. Cool, now let's console.log what i is in each iteration.
// You should see
//      0
//      1
//      2
//      3
//      4
// in your console.
// `i` is just a number. Since arrays are numerically indexed, all we need to access an individual
// element of an array is the appropriate numbered index.
// Put another way, to access 100, 200, and 300 from arr, all we need are the numbers 0, 1, and 2,
// to directly access the values stored at arr[0], arr[1], and arr[2]
// This is cool because it highlights how we access values from an array -- just grab them by their
// numbered indices -- and also highlights that i is just a number in each iteration. There's nothing
// magical about it. It's just a number that starts at 0 (or whatever you choose to start it as),
// and counts up (or down) to the highest (or lowest) number you tell it to count to.
//
// This is where off-by-one errors can creep in. Always think about the exact meaning of your numbers.
// Are we going right up to our limit, or almost, but not quite up to our limit? Well, what's the
// exact meaning of the limit? `for (var i = 0; i < arr.length; ++i)` has four numbers hidden it it:
// `i`, 0, `arr.length`, and 1. We think of `i` as the index iterator. It holds each index (distance
// from the beginning of the array to the element we care about) in turn starting with 0 (the exact
// beginning of the array). `arr.length` is the total number of elements in the array, or the distance
// to the end of the last element, or the distance to exact place where we have actually run off the
// end of the road. We want to go up to but not including the far edge of the far element. We want the
// near edge of the far element, so we use the `<` operator, not the `<=` operator. The final number
// is 1. It's hidden inside the statement `++i`, which is equivalent to `i += 1`, which is equivalent
// to `i = i +1`. The meaning of the one is the step factor. Becase it's incrementing by one each
// with each iteration, we touch every element in order from 0 to not-quite-length, once per iteration.
//
// You can internalize the meanings of the numbers with geometric diagrams. Here's an array:
//
//      -1    0    1    2    3    4    5    6    7
//       ....[A___ B___ C___ D___ E___ F___ G___]....
//
// Think of the letters as data, the numbers as both the bin number and the distance forward from the
// base element, the last number as both the array length and the first out-of-bound index, and the
// dots as memory real estate not part of this array's element store. So valid indexes go from 0 to
// one-less-than-length.

// Alright, to use `i` as an indexer into `arr`, let's use `i`to access each item in `arr`.
//
// 3. Create a new for loop to iterate through `arr`, console logging each item. We expect to see
//    100
//    200
//    300
//    400
//    500
// Now that you're comfortable accessing each item in arr, let's console log both `i` and the relevant
// value stored in `arr` by writing a new for loop. What we'd expect to see in our console is:
//    'the value of i is: 0, the value we're accessing in the array is 100'
//    'the value of i is: 1, the value we're accessing in the array is 200'
//    'the value of i is: 2, the value we're accessing in the array is 300'
//    'the value of i is: 3, the value we're accessing in the array is 400'
//    'the value of i is: 4, the value we're accessing in the array is 500'

// Great! Now you can use your counter variable to index into an array.
// 4. Let's use a new for loop to modify the array in place. Let's add 1 to each element of `arr`.
// Now that you've added 1 to each item in arr, console.log it to see the results.
// We expect to see [101, 201, 301, 401, 501]
// Have some fun doing this a few more times. Try multiplying each item in arr by some number. Then try
// dividing it by some number. Write entirely new for loops each time, don't just change the '+' to a '/'.
// We want to get practice typing out for loops as many times as possible.

// By this point you should be feeling pretty good on iterating through arrays using `for`
// loops! Now let's look into iterating through objects.

// 5. Create a `for` loop to iterate through `obj`.
// Inside the body of the for loop, console.log the string "hi, i'm inside the for loop for objects!
// You should see this pop up 3 times in your console.
// This should tell you that the for loop for our object is running 3 times. Much like our
// array for loop, all it's doing is running the body of the for loop once on each iteration.
// 6. Now let's check out what key is on each iteration.
// If you console.log the key in the for loop body, you should see
//    'city'
//    'slingsCode'
//    'excitementLevel'
// in your console.
// key is just a variable that is set equal to each of the keys in our object, one at a time.
// 7. Just for fun, let's create an empty array outside of our for loop called arrayOfKeys. On each
//    iteration, let's push the key into this arrayOfKeys. After your for loop, console.log the arrayOfKeys.
//    You should see ['city', 'slingsCode', 'excitementLevel']. Note that they may not be in this order,
//    since JavaScript makes no guarantee that an object's keys are arranged in any particular order.
// 8. Ok, now that we've figured out that a key is just a variable that will be set equal to the name of
//    each property in the object, let's use that to access the associated values.
//    Write a new `for` loop to iterate through `obj`, console logging each value.
// We'd expect to see
//      'Oakland'
//      true
//      10
// Now that you're comfortable accessing each value in obj, let's console log both key and the relevant
// value stored in `obj`.
// So what we'd expect to see in our console is:
//    city is key to the value Oakland
//    slingsCode is key to the value true
//    excitementLevel is key to the value 10
// You should be feeling pretty great about iterating through objects now, so let's combine
// this with an `if` statement.
// 9. Let's only log a value to the console if it equals 'Oakland'.
// Great! Now, let's create a new `for` loop for `arr`. Inside that loop, let's only console.log a
// value if it is both greater than 100 and less than 400. Remember `&&` is the logical AND operator.
// 10. Inside another `for` loop for `arr`, only `console.log` the values that are either above 400, or
//    less than 200. That is, log them if they are outside the 200 to 400 range. `||` is the logical OR.
// 11. Now let's combine an if statement with our array for loop.
// Let's put
//        if(arr[i]) {
//          console.log(arr[i]);
//        }
// Inside our `for` loop. What do you expect this to log?
// Remember that JavaScript does type coercion, forcing whatever is in the conditional part of our
// if(conditional) statement to be a boolean value. JavaScript has many unscruitable rules about
// what is coerced to true vs. false. Coloqually, we say that an expression is 'truthy' or 'falsy'
// if when you use it inside an if statement it behaves like true or false. In the example above,
// our `if` statement sees each of the values of the array elements in turn, 100, 200, 300, 400 and
// 500. Numbers that are not exactly equal to zero are truthy, so each time the if statement is run
// the test passes and the body is executed.
// Let's try this again:
//        if(0) {
//          console.log(arr[i]);
//        }
// Keep trying different combinations inside the conditional part of the if loop. Particularly, try:
//        ''
//        0
//        1
//        NaN
//        'hi there'
//        true
//        undefined
//        -1
//        null
//        {}
//        []
// 12. What's the difference between `===` and `==` and `=` ?
// Try using all three of them, and explaing the results of each one to your partner. Once you've done
// that, some explanations are below. Be sure that you can explain these to your partner, they're
// important!
//
// `===` will always return a boolean value (true, false). It checks whether two things are identical.
// First the expressons on the left an right are resolved to a value, and then these two values are
// compared. If they are not of the same data type, the test returns false. If they are of the same
// data type, the test continues on to check for equality. It works as expected for strings created by
// the the JS interpreter executing a string literal. It scans the two strings for differences and
// returns true if none are found and false otherwise. Curiously, it doesn't work this way for arrays,
// objects, or even Strings (objects created by the String global object with the new keyword. Don't
// worry about this till we get to it.). In these cases, `===` compares the actual reference value.
// `===` returns true in these cases only if the objects are actually the selfsame object, which is
// to say, both references point the same place in memory. With immediate values like numbers, booleans
// and null, it works as expected. 'undefined===undefined' is not guaranteed to always be true nor to
// always be false, depending on the version of JavaScript. There are many sharp corners and open pits
// in JavaScript waiting to hurt us. We must learn our way around the many defects, or just stay away
// from troublesome looking code until we gain confidence.
//
// `==` YOU SHOULD NEVER USE THIS. Use tongs to deposit into the nearest trash receptacle. Seriously.
// It seemed like a good idea to Brendan Eich at the time. It's a treatcherous and sadistic compare
// operator made of pure evil. It offers no discernable advantage of any kind over ===, except perhaps
// the hilarious high jinks. Also, other programmers will sometimes judge you for using ==. Even if you
// master its subtleties and bend it to your will, some other programmer is an expert at evaluating the
// skill of anyone who would ever touch JS `==` for any reason. You'd just be setting someone (probably
// you) up for a piano from the sky one day. When considering the merits of `==` for inclusion in your
// next line of code, chew on a wad of foil until you eventually make the right call.
//
// `=` This is for assignment. When you use the single equals, you are setting the thing on the left side of
// the operator equal to the thing on the right side of the operator. `x = 'I totally understand assignments!'`
// means that we are overwriting any value that was in x with a reference to the string. Some subtleties to
// keep in mind: When the thing on the left doesn't exist, JS will often try to make it. `myObj.myKey = 0`
// creates or overwrites. `myArray[20] = 'abc'` overwrites the element at index 20, and widens the array if
// needed. 'x = -50' searches up the scope chain until it either finds a variable called `x` or runs out of
// places to look. If not found, it creates a new variable by that name in the global scope. You may not yet
// know what this means. You'll learn it later. Finally, after both sides are evaluated and the righthand value
// has been written to the lefthand location, that value that was just written is returned as the resolution of
// value of the `=` operator. So if you see an `=` operator used as part of a bigger statement, you can see what
// it does.
//      a = b = c
// means the same as
//      a = (b = c)
// which in turn means
//      a = (b = (c))
// The expression in the innermost parentheses is resolved, no matter how complex, eventually becoming some value
// then the thing in the next outer parentheses, and so on. Try folloing the sequence of events here:
//      myArray[i++] = myObject[myString] = x*y*z;
// Play around with the `=` operator if you're curious! Curiosity is a wonderful trait in engineers.



// Bonus Round: Plus-Equals +=
// Let's show you an example.
    var plusEqualsVar = 5;
    plusEqualsVar += 10;
    // console.log('plusEqualsVar after += 10 is:',plusEqualsVar);
    // What += does is exacly the same as if you had typed
    var assignedVar = 5;
    assignedVar = assignedVar + 10;
    // console.log('assignedVar after assignedVar = assignedVar + 10 is:',assignedVar);
//FIXME: was originally `assignedVar = assignedVar = 10;`
//How can this get past all those students. Didn't anybody speak up?


// Arrays extra credit:
// Let's revisit this concept that i is just a number. What if we wanted to iterate through an array backwards?
// To do that with arr, all we'd need are the numbers 4,3,2,1,0 in that order.
// Using those, we could access arr[4], arr[3], arr[2], arr[1], and arr[0], which are the values of the array in reverse.
// So how can we get the number 4,3,2,1,0 in that order?
// Well let's investigate the signature of our for loop: for (var i = 0; i < arr.length; i++)
// We just want to reverse this. So far we've been telling i to start at 0, and while i is less than the length of the array, increase i by 1.
// We could just tell i to start at it's maximum value, and while it's greater than or equal to 0, to decrease by 1.
// That would look like for (var i = arr.length - 1; i >=0; i--)
// Use this pattern to iterate through our array backwards, console logging both i and arr[i] each time, like we did above:
// 'the value of i is: 4, the value we're accessing in the array is 500'
// 'the value of i is: 3, the value we're accessing in the array is 400'
// 'the value of i is: 2, the value we're accessing in the array is 300'
// 'the value of i is: 1, the value we're accessing in the array is 200'
// 'the value of i is: 0, the value we're accessing in the array is 100'

// Under the surface, the interpreter runs `for` loops as `while` loops with the three fields of the
// `for` specification at the appropriate places in the `while` structure it creates. `while` loops
// are like `if` statements that repeat until false. Let's look at that down-stepping `for` loop again.
//        for (var i = arr.length - 1; i >=0; i--) { doSomething(); }
// That has the same effect as this.
//        var i = arr.length - 1;
//        while (!(i >= 0)) {
//          doSomething();
//          i--;
//        }
// This can be further reduced.
//        var i = arr.length;
//        while (i--) {               // Does no iteration if arr.length is zero
//          doSomething();            // Inside here, i steps from arr.length-1 to zero
//        }

// When the interpreter runs a `while` loop, you can think of the `while` block as almost exactly
// like a plain old `if` block. It behaves exactly the same, except when it gets to the closing `}`
// brace, flow control has an invisible goto right back to the start of the while keyword. In this
// way, the condition gets tested before the first iteration, so it could run the body zero times.
// And then it gets tested again *before* each additional iteration to see if this next iteration
// is going to happen. Once a test comes back falsy, control jumps to after the `}`, same as `if`.
// `while` is like a sticky `if`.

