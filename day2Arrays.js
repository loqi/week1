// As with Objects, we're trying to get a workout with repetition until our muscles build up.
// If any of it starts to feel repetitive, that's awesome!
//
// Your goal is to be slightly bored rather than slightly confused -- whenever possible!
//
// To facilitate this, keep writing new code for each exercise. Don't copy and paste previous
// code. Practicing the keystrokes makes the syntax stay with you. Puzzling through what to do
// next is what burns it into your brain. You'll get a lot of hand-holding in the prep course.
// Take the hand, but only after struggling a bit. Think of the analogy of learning to walk.

// Yesterday, we learned that an object is a built-in data structure that is good at keeping a
// collection of key-value pairs in such a way that it can rapidly look up the string key to
// discover the value. Another built-in data structure is the array. It's good at keeping a
// collection of bare values, which you individually specify by their position in the list. We
// call these positions the 'indexes' or 'indices', depending on your current level of lexophilia.
// We call the individual cells of an array 'elements' at all levels of lexophilia.
//
// In many languages you have to allocate the length of an array or declare the data type of its
// elements when you create the array. You don't have to do this in JavaScript, where arrays are
// dynamically sized, meaning they automatically grow and shrink behind the scenes as needed. The
// interpreter manages changing array sizes transparently. Each element can store anything a
// variable can store. Typically, an array is composed of a long series of similar items,
// but it doesn't have to be. You can even have a "sparse" array with lots of empty space between
// populated elements. Untouched elements read as the undefined value, same as vairables.
//
// Arrays are zero-indexed, meaning the first element is indexed by the number 0. You may be
// wondering why the language designer didn't just index the 1st element to 1 and the
// 2nd element to 2. To answer this, we first note that this only seems sensible to us humans
// who have been trained since birth to number things ordinally starting at 1. When dealing
// with numbers in a rigorously logical environment, it is essential to precisely define the
// meaning of the numbers. In the case of array indexes, we can say the index into an array
// represents the *distance* from the beginning. In this way array index zero is *at* the
// beginning, and index 1 is one element away from the beginning. Think of playing monopoly.
// The roll of the dice tells you how far to move -- not how many squares to touch inculing
// the one you are already sitting on. If it were possible to roll a one, it would mean move
// forward by one square, not "stay where you are". Rolling a zero would mean don't move.
//
// An array can do anything an object can do plus one extra trick. An array has an index-value
// data  store deep within it, which is accessible by indexing a non-fraction-bearing,
// non-negative, numeric value. The array store can grow or shrink.
//
// Consider this code, `var arr = [];  arr[1000000] = 0;` This code causes an empty array object
// to be created and its reference assigned to a variable `arr`. Then the empty array store is
// widened to accomodate exactly 1,000,001 elements (indexed 0 through 100000). Then the numeric
// value `0` is written to the last element. `arr.length` now contains the number `1000001`.
// After this code executes, nearly every element in the array's index-value store is undefined,
// but it still takes up a big block of contiguous memory for all those data elements. What we
// gain from this behavior is the ability to look up any array element via ultra-fast integer
// arithemtic behind the scenes. rather than significantly slower, but still pretty fast hash
// function arithmetic used by object key lookup. For this reason arrays are usually a bad choice
// for sparsely populated data. All the blank elements take up space, just to keep the elements
// with the data in the correct memory location. Arrays are great for contiguous collections that
// don't need keys but do need random-access lookup by numerical position, meaning the
// interpreter can get at something by jumping right to it in the middle of the array, without
// having to paw through anything else to find it. When you access an array element like this
// `myVar = variable_pointing_to_an_array[numeric_index_of_one_element_of_that_array]`, it's
// barely more work for the interpreter than accessing a variable directly, like this,
// `myVar = variable_conatining_a_value_that_could_instead_be_in_an_array_element;`
//
// An arrays is actually a special kinds of object. By that, we mean arrays have properties of
// their own. One of the most important of these is the length property, which can be accessed
// with dot notation like so, `variable_pointing_to_an_array.length`. This property always
// returns a non-negative "integer" number. JavaScript has no integer data type. The length
// property always returns a floating point number that always happens to have no fractional
// portion. You can rely on it being 0.0 or 1.0 or 2.0 or 3.0 and so on.
// Never negative, never fractional.
//
// Arrays come with built-in methods. A method is an object property whose value points to a
// function. On day 4, we go deep into functions. For now, think of functions as another data
// type in JavaScript that is good at keeping a piece of code ready to execute, and methods as
// object properties whose value is a pointer to a function. The JavaScript language reference
// lists all the standard methods that come with JavaScript arrays, including such important
// ones as `push`, `pop`, `shift`, and `unshift`. These four methods provide convenient ways
// to add and remove elements at either end of the array, one by one, causing the length to
// grow or shrink by one.

// ACCESS VIA A VARIABLE
// Let's create an array of mythicalAnimals called grandCouncil. This is the coloquial way of
// asking you to create a variable named `grandCouncil` and point that variable at an array
// somewhere in memory. A popular way to create an array is with an array literal, like this:
//          [ 57, 24, 31, "Hike!" ]`
// This code means "Interpreter, please make a brand new array in memory. Make it four elements
// long. Load the first three elements with those three numbers, in that order, and the fourth
// one with a string, which you also create in memory as specified by that string literal. After
// you have created that new array, resolve this literal expression to mean the reference to that
// array you just created in memory. Thank you so very much." You can even have a nested array:
//          [ [x, y, z], [p, d, q] ]
// That means you want two arrays of three elements, each populated with the current content of
// three variables. You want a third array of length two, each populated with a reference to
// one of those other arrays. You'll have an array of two references to objects, these objects
// happen to be other arrays. You'd really only build an array if you remember where you put it:
//          var myFoootboooler = [ 57, 24, 31, "Hike!" ];
// This line means (in Chief Engineer Scotty's accent): "Coom-pyoo-trrr, go adead and do all
// that array-building stuff and then copy the memory reference of that new array into that new
// variable. That is all."
//
// You access a single element of an array using array notation, which is bracket notation with
// an expression that resolves to a numeric value without a fractional part. So, if you have an
// array called `arr` you refer to the third element (two units from the beginning) with code
// like this, `arr[2]`. You interrogate the length of the array with the name of the length
// property: the string "length", like so, `arr['length']` or the preferred way, `arr.length`.
//
// Remember, the array object can reference its array store with non-fraction-bearing numbers
// inside square brackets, and it can reference its object properties with anything else in
// there. If the expression in the brackets resolves to a number, and that number is not negative
// and has no fraction (3.00000, not 3.00001), the interpreter looks up an element of the array
// store. In all other cases, the interpreter stringifies the value and looks in the key-value
// store for the property with matching key. In either event the expression `myArray[something]`
// resolves to whatever value it finds in the index-value store or the key-value store, or
// `undefined` if nothing was yet written as the value paired to that index or key.

// Let's commence to coding.

// 1. Create an empty array `treasureChest`. Our intention is to fill it with all the goodies
//    doarded by our dragon over the years.
// 2. Let's make the value at position 0 the string 'fur jackets'.

// Suddenly, our dragon is either A) attacked by PETA for possesing fur from animals with
// a high cuteness coefficient, or B) overcome with an irresistable urge to migrate somewhere
// warm. Either way, she's no longer in need of a fur jacket.

// 3. Overwrite the value stored at position 0 to become 'ethically sourced sandals'.
// 4. What is the new length of our array?

// That's right. There's still only one item in the treasure chest.
//
// We began with an empty array with length zero. Then we wrote one reference at index 0 (zero
// units from the beginning) which caused the interpreter to change the value of this array's
// `length` property to 1. Finally, we wrote a different reference, also at the very beginning
// of the array, stepping on the original string 'fur jackets' with a new reference string
// 'ethically sourced sandals', causing the previous string 'fur jackets' to be forgotten.
// After overwriting that element of the array, the length property remained unchanged with 1.
//FIXME: I think this is misleading to students >>> That's right, even though our array is 0-indexed (starts counting at 0), our length property that JS gives us automatically is 1-indexed (starts counting at 1).
//array.length is not an index at all. Furthermore it does start at zero. [].length=>0, [0].lenth=>1
//
// Whenever anything causes the actual length of an array to change, JS automatically updates
// the length property of that array. It just works. It's always in sync no matter what. Think
// of a precise meaning for the number stored in the length property. It could mean "the total
// number of elements in the array". Alternatively you might think of it as "the distance from
// the beginning of the array to the end of the array". In the same way that a twelve-inch ruler
// has thirteen graduation marks and twelve spaces between them, the distance from the beginning
// (the first mark) to the end (the thirteenth mark) is twelve units. The length of the ruler is
// twelve. The first inch *begins* at the first mark; the twelfth inch *begins* at the twelfth
// mark. The entire ruler covers a length of twelve inches because the distance from the first
// mark to the last is twelve inches. If you start inserting or removing more inches at the
// beginning, middle, end, or far beyond the end, the length grows or shrinks accordingly. At
// all times, the length of any ruler is equal to the distance from beginning of the first
// unit to the beginning of the last unit, plus one unit, i.e. from the *beginning* of the first
// first unit to the *end* of the last unit.
//
// Thinking in these terms helps us avoid the dreaded off-by-one errors that are quite common in
// software engineering. Remember, there are only two really difficult things in computer science:
// naming things, cache invalidadion, and off-by-one errors. Naming things well is harder than you
// might assume, and of greater value than you yet realize. Off-by-one errors can be avoided by
// being really precise with naming and being really precise in the true meaning of a number.
// Length means "length". Good name: the distance from beginning of beginning to end of end.
// Index means "distance from beginning of the index-value store to the beginning of the element
// you want want". In the JavaScript or C or Ruby context 'index' always has exactly that
// meaning. In a one-indexed language like Fortran, we might instead think of the index as
// "Distance from the *beginning* of the beginning to the *end* of the element we want".
// That works. It seems better than "distance from one-unit-less-than-the-beginning of the array
// to the element we want." Different strokes for different folks, I suppose.

// Now let's add a value to the end of our array. Ours is a very caring dragon. One of her most
// treasured treasures is her abstract concept of friends, so let's add the string 'friends' to
// the end of our array. We actually have many different ways we could append a value to the end
// of an array. Take a minute to talk this over with your partner. Can you write at least three
// ways to do it?




// Here are three ways we thought of:



// i. A hard-coded index number.
//    Since we happen to know the array only has something in index 0, we could just do something
//    like `treasureChest[1] = 'friends'`; Clearly this isn't going to work well in situations
//    where we aren't sure how many items are in the array already.
// ii. Interrogating the length property.
//    Since the length of the array is always one greater than the highest index (the
//    thirteenth tick of the twelve-inch ruler), we could write the line of code
//    `treasureChest[treasureChest.length] = 'friends';`
//    Let's break this down. First we're looking up what our treasureChest is. It's a variable
//    that contains a reference to an array somewhere on the heap. The square brackets mean we
//    want to drill down into the array. Inside the brackets, treasureChest.length resolves to
//    a number like this: `reference_to_our_array_with_treasures_in_it.length`, which is the
//    number 1 right now. That number, since it is positive and has no fractional part, is
//    suitable to index into the array that the `treasureChest` variable points to. There is
//    not yet an element at index 0, becase we have not yet written to anything but the
//    beginning of the array (treasureChest[0]). Now the `=` operator sees it's asked to write
//    to a non-existent array element, so it lengthens the array to accomodate it, keeping the
//    length property up to date. The 'friends' string literal causes a new string to be created
//    and that string to become the resolution of the righthand operand of the `=` operator.
//    That string gets written to the new array element (treasureChest[1]), and that string is
//    also the resolution of the entire expression, which comprises the entire statement
//    `treasureChest[treasureChest.length] = 'friends';`
// iii. the push method.
//   `arr.push('friends');` - `push` is a method that comes with any array. It's very simple and
//   useful. All it does is append one new value to the end of an existing array.
//   `treasureChest.push('friends');` will add the string 'friends' to the end of our
//    treasureChest array. Let's talk through exactly what happens when the interpreter executes
//    `treasureChest.push('friends')`. First up, `treasureChest`. That's the name of a variable
//    which currently points to an array, you know the one, somewhere in memory. That array,
//    being a kind of object, also has a passel o' methods. Some methods come with being an
//    object, and some more come from being an array. Not all objects know how to push things.
//    All arrays know how to push things. `treasureChest` refers to an object that knows how to
//    push. By that I mean this array has a property`push` whose value is a function that does
//    something useful for an array. What push does is append a single value onto the end of the
//    array's index-value store. It's basically made for what we want to do. Through the magic of
//    dot notation, `treasureChest.push` resolved to a reference to a function somewhere in memory
//    -- the function listed as the value at treasureChest['push']. That function comes for free
//    with every array in JavaScript. We'll go into functions on day 4, but for now, just know
//    that the round parentheses tell JS interpreter to invoke the function it finds referenced
//    on the left of the parentheses, "passing in" the values of the expressions in the
//    parentheses as arguments to that function. There's only one thing in the parentheses here,
//    an expression which means create a new string and pass that new string to the function.
//    According to the JavaScript reference documentation, the `push` method of the `Array`
//    global object takes any number of arguments and appends them individually to the end of
//    the array, returning a number (the new length) upon completion. So the push method gets
//    called with a reference to the 'friends' string, it then does its pushy business, leaving
//    the array longer by one element, and push returns the number 2 representing the new length
//    of the array. The whole expression `arr.push('friends')` resolves to 2, and the whole
//    statement `arr.push('friends');` (with semicolon) does nothing with this number, so it gets
//    ignored and overwritten by whatever statement comes next.

// There are many other ways to append a string reference to the end of our treasure chest array.
// Those are the three most canonical patterns.

// 6. Try using all three of these patterns to add values to the end of our treasureChest. Make
//    up your own ideas of things that our dragon might collect. Be sure to `console.log` your
//    treasure chest after each change to see what the new array looks like. What is tne length
//    going to become after each new item is added?

// At this point, we should now have at least five things in our treasureChest array. Mine looks
// like this:
//          [ 'ethically sourced sandals',
//            'friends'                  ,
//            'peacock feathers'         ,
//            'rock climbing gear'       ,
//            'Mad JS Skillz'            ,
//            'colored trousers'         ]

// 7. Go through and access each value in the array.

// This might feel tedious, but building up the muscle memory makes you more awesome Typing the
// code out longhand will embedded what you learn so you can think less about the syntax and
//  more about the logic.


// PUSH. POP. SHIFT. UNSHIFT.
// The array methods `push` and `pop` let you use your array like a lightweight LIFO stack.
// `shift` and `unshift` adds the functionality of a FIFO queue. Memorize these four classics.
//
// Push and pop are two standard names of the fundamental actoins of a stack. They are named from
// the perspective of the outside world manipulating the stack. We push a value onto a stack, we
// don't push a value off of a stack. We pop a value off of a stack.
//
// `myArray.push(value)` lengthens the array by one, appending a new element to the end with
// whatever `value` resolves to at the moment of execution. This method returns the new length
// of the array, and the array is mutated (array is changed but remains the same array, as
// opposed to causing a new copy of the array to come into existence). If JavaScript were a
// bit more polite and demure, its `push` methdod would return the array reference for chaining.
// `myArray.push(2).push(4).push(6).push(8).push("Whom do we excoriate?"); // D'oh! Brendan!`
// But JavaScript is beautiful just the way it is. It returns the new length, so you can...
// you know... so you can... um, make code like this:
// `myArray[myArray.push('Knock, knock!')] = "Who's there?";`.
// Or not!
//
// `myArray.pop()` undoes what `push` does. It shortens the array by one, removing and returning
// the last element of its index-value store. The value is the return value, so you can do
// this, `myVariable = myArray.pop();` or `myFunction(myArray.pop());`. If the array is empty,
// you get `undefined` as the value, like so `console.log([].pop());`.

// 8. invoke `treasureChest.pop();`. What value is returned to you? What does your array look
//     like afterward?

// `myArray.unshift(value)` works does a push operation at the beginning of the array.
// (mnemonic: "unshift unshrinks" the array by adding a *prefix* like un-). For consistency
// in the beauty and functionality of JavaScript, unshift returns the new array length.
//
// `myArray.shift()` works like pop, but at the front. (mnemonic: SHift SHrinks the array by
// shifting every element to a new position.) On a very long array, `push` and `pop` run much
// faster than `shift` and `unshift` because they don't need to re-index the entire array to
// make room or close a  gap. On an array of only a few hundred elements, this difference in
// running time is trivial. To use an array as a FIFO queue, do something like this:
//          myArray.push(newcomer);         // Enqueue an item to the tail (high index)
//          nowServing = myArray.shift();   // Dequeue an item from the head (index 0)

// 9.  Use both .unshift and .shift to add and remove treasure items. As always, console.log your
//     treasure chest afterwards to see the result. What happens? Can you explain it to your pair?
// 10. Now that we've populated treasureChest, let's add that to the mythicalAnimal object we
//     created yesterday. We had a property on there called collects. Overwrite that property
//     with the trasureChest array we've been playing with. console.log the mythicalAnimal object
//     afterward to make sure the collects property now points to your treasure chest array.
// 11. Create an empty array called grandCouncil. This is where we'll store all of the
//     mythicalAnimal objects we'll create.
// 12. Now create three new objects. Each object should have the following properties:
//         type      string specifying what type of mythical animal this is
//                   (e.g. unicorn dinosaur, yeti, Loch Ness Monster, polar bear, red panda).
//         collects  array with a few things this animal might collect
//         canFly    boolean (true or false keyword without quotates) can this animal can fly?
// 13. Now append these to the end of the grandCouncil array using the three methods outlined
//     above (`arr[known_index] = ...` ; arr[arr.length] = ...' ;  `arr.push(...)`.
// 14. Whoops! Looks like one of our mythicalAnimals melts too easily in the presence of Leslie
//     the Dragon. Let's overwrite the value stored at index 2 in our array with the string
//     'open position available!'. Check what grandCouncil looks like after overwriting.



// EXTRA CREDIT

// 15. Play around with arrays by typing JS code right into the Chrome console window.
//     Try these three console commands first:
//          > var ar = [];
//          > ar[2-3] = "Hi there!";
//          > ar[    >>> something goes here <<<    ];
//     By chosing the right code to go between those square brackets, you can get your console
//     to report "Hi There!" as the resolution value of that third line of code. Is your string
//     in your array somewhere? Find it. Think of some other ways to read it. Continue to play
//     with arrays in the console until you really understand how to read and write values. Try
//     some things that might make the interpreter choke or complain. See if what it actually
//     does matches your hypothesis. Keep adjusting your mental model until it always matches.
// 16. Now try these console commands:
//          > ar['2'+'3'] = "I know kung fu.";
//          > ar[    >>> something goes here <<<    ];
//      Make that line show that you know kung fu.
//      Keep playing with arrays and strings until you are bored with your own awesomeness.

// Conglatulations!

// You've now had a decent workout using arrays and understanding the different ways to read,
// write, and remove their values.

// Now, to recap the two built-in JavaScript data structures we have covered.
//
// OBJECT
//   A collection of properties (key-value pairs) designed for fast lookup on strings,
//   where each key is a string unique among all keys of the object, and each key is
//   paired with a single value that need not be unique. Each value can be anything that
//   a JS variable can hold, such as a number, boolean, or reference. A reference might
//   point to a function, an array, another object or the selfsame object.
// ARRAY
//   A collection of values designed for ultra-fast lookup by numerical position (index)
//   in the index-value store, where values may be anything that can be held by any JS
//   variable, and need not be unique. Arrays have a `length` property, which holds a
//   live-updating numeric value, not a function that returns a numeric value. That's why
//   the standard length-interrogation expression is `myArray.length`, not `myArray.length()`.
//   Arrays are themselves objects. That's how it's possible for an array to find data
//   by both index (like 0) and key (like `length`).
//
// A nested object (an object whose reference appears as the value of a property of another
// object) is a great way to associate a bunch of formatted data as your one value in your
// key-value store. For example, imagine we have an object called rolodex where each key is
// expected to be a person's name and each value is expected to be an object representing
// contact information. These nested objects (roloxed card) are keyed on names of fields,
// such as 'middle_name' or 'home_phone', and the values are expected to be strings with the
// contact data, such as 'Telegraph Academy' or 'bianca@example.edu'. Then, if the keys are
// compatible with dot notation, an expression like `rolodex.bianca.business_street_address`
// resolves during interpreter execution to a string like "1600 Shattuck Avenue". If the
// property names (keys) don't play well with JS code, or the keys are stored and manipulated
// via variables, we would use bracket notation instead, like
// `rolodex[myFavoriteRolodexKey]['Suite #']` resolving to a string value at runtime "106"
// or perhaps a numeric value 106.


// Yesterday and today we learned how to access individual values from arrays and objects.
// But how can you do something with each element of an array or each property of an object?
// Considering an object or an array can constantly grow and shrink, how is it possible to
// do this in a way that always works, no matter how big or small the collection? Tomorrow we
// learn the features of JavaScript that control conditional execution flow and looping.
