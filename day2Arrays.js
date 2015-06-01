// As with Objects, we're trying to get you enough repetition to the point where this sticks.
// If any of it starts to feel repetitive, that's awesome! To facilitate this, keep writing new
// code for each exercise. Don't copy and paste previous code. Practicing the keystrokes is
// what makes it stay with you.
//
// Arrays are great places to store lists of similar information.
// An object is a built-in data structure that is good at keeping a collection of key-value
// pairs, the data of which your code can efficiently manipulate. An array is another built-in
// data structure. It's good at keeping a collection of bare values, which you can identify
// by their position in the list. We call these positions the 'indexes' or 'indices', depending
// on your current level of lexophilia. We call the individual cells of an array 'elements'
// at all levels of lexophilia.

// In many languages you have to declare how big your array is when you create it. You don't
// have to do this in JavaScript. All arrays automatically grow and shrink behind the scenes
// as needed. The interpreter manages this transparently. (transparent - adj. COMP-SCI - you
// don't have to do anything or even see anything, It just happens for you.)

// Arrays are zero-indexed, meaning the first element is indexed by the number 0. You may be
// wondering why they didn't the language designer just index the 1st element to 1 and the
// 2nd element to 2. To answer this, we first note that this only seems sensible to us humans
// who have been trained since birth to number things ordinally starting at 1. When dealing
// with numbers in a rigorously logical environment, it is essential to precisely define the
// meaning of the numbers. In the case of array indexes, we can say the index into an array
// represents the *distance* from the beginning. In this way array index zero is *at* the
// beginning, and index 1 is one element away from the beginning. Think of playing monopoly.
// The roll of the dice tells you how far to move, not how many squares to touch inculing
// the one you are already sitting on. If it were possible to roll a one, it would mean move
// forward by one square, not "stay where you are". Rolling a zero would mean don't move.

// Arrays are actually special kinds of objects. Forget you heard that for now.
// I mean arrays have properties of their own. One of the most important of these is the
// length property, which can be accessed with dot notation like so:
//      name_of_a_variable_pointing_to_an_array.length
// This property always returns a non-negative, integer number. JavaScript has no integer
// data type. Forget I said that too. The length property always returns a floating point
// number that always happens to have no fractional portion. You can rely on it being
// 0.0 or 1.0 or 2.0 or 3.0 and so on. Never negative, never fractional. Just think of it
// as 0 or 1 or 2 or 3 and so on.
//
// Other important properties shared by any array don't contain a number, but a reference
// to a function. On day 4, you go deep into functions. For now, think of functions as
// another data type in JavaScript that is good at keeping a piece of code ready to
// execute. Such functions are said to be "standard methods of a JavaScript array" and
// include `push`, `pop`, `shift`, and `unshift`. These methods provide convenient ways
// to add and remove elements at either end of the array. One way to remember which end
// gets affected by which is to remember that inserting or removing elements at the
// beginning of an array will shift all the elements forward or backward from where they
// were, while inserting and removing nnew elements at the end just lengthens the
// –array without moving the any of the other elements.

// ACCESSING USING VARIABLES
// Create an array of mythicalAnimals called grandCouncil.
// A popular way to create an array is with an array literal, like this
//         [ 57, 24, 31, "Hike!" ]
// This means "Interpreter, make a brand new array in memory. Make it four elements long.
// Load the first three elements with those numbers, in order, and the fourth one with
// a reference to a string, which you also create in memory as specified by the string
// literal. After you have created that new array, resolve this literal expression to
// mean the reference to that array you just created in memory." You'd really only ever
// build an array if you remember where you put it. You'd really have code like this
//        var myFoootboooler = [ 57, 24, 31, "Hike!" ];
// This line means "JavaScript, go adead and do all that array-building stuff and then
// copy a reference to the new array into that new variable I just asked you to create."
//
// You access a single element of an array using bracket notation with a numeric expression
// with no fractional part. So, if you have an array called `arr` you refer to the third
// element (two units from the beginning) with code like `arr[2]`. You interrogate the
// length of the array with a string as the name of length property, like so
//        arr['length']
// or the vastly preferred way
//        arr.length

// Let's commence to coding.
//    1. Create an empty array called treasureChest. Our intention is to fill it with all
//      the goodies our dragon from yesterday has hoarded over the years.
//    2. Let's make the value at position 0 'fur jackets'.
// Suddenly, our dragon is either A) attacked by PETA for possesing fur from animals with
// a high cuteness coefficient, or B) overcome with an irresistable urge to migrate somewhere
// warm. Either way, she's no longer in need of a fur jacket.
//    3. Overwrite the value stored at position 0 to be 'ethically sourced sandals'.
//    4. What is the new length of our array?
// That's right. There's still only one item in the treasure chest. We began with an empty array
// with a length of zero. Then we wrote one reference at index zero (zero units from the beginning)
// which caused JS to raise the length to 1. Finally, we wrote a different reference, also at
// the very beginning of the array, which stepped on the original reference to 'fur jackets'
// with a new reference to 'ethically sourced sandals'. This left the length property unchanged
// and caused the last reference to 'fur jackets' to be forgotten, thus designating the space
// held by that string to be eligible to be reclaimed now or whenever JS decides it wants it.
//FIXME: I think this is misleading to students >>> That's right, even though our array is 0-indexed (starts counting at 0), our length property that JS gives us automatically is 1-indexed (starts counting at 1).
//array.length is not an index at all. Furthermore it does start at zero. [].length=>0, [0].lenth=>1
//
// Whenever anything causes the actual length of an array to change, JS automatically updates
// the length property of that array. It just works. It's always in sync no matter what. Think
// of a precise meaning for the number stored in the length property. It could mean "the total
// number of elements in the array", alternatively you might think of it as "the distance from
// the beginning to the end of the array" In the same way that a twelve-inch ruler has thirteen
// graduation marks and twelve spaces between them, the distance from the beginning (the first
// mark) to the end (the thirteenth mark) is twelve inches. The length of the ruler is twelve.
// The first inch *begins* at the first mark; the twelfth inch *begins* at the twelfth mark.
// The entire ruler covers a length of twelve inches because the distance from the first mark to
// the last is twelve inches. If you start inserting (or removing) more inches at the beginning,
// middle, end, or far beyond the end, the length grows (or shrinks) accordingly. At all times,
// the length of any inch-ruler is equal to the distance from beginning of first inch to the
// beginning of the last inch, plus one inch, i.e. from the *beginning* of the first first inch
// to the *end* of the last inch.
//
// Thinking in these terms helps us avoid the dreaded off-by-one errors that are quite common in
// software engineering. Remember, there are only two really difficult things in computer science:
// naming things, cache invalidadion, and off-by-one errors. Naming things well is harder than you
// might assume, and of greater value than you yet realize. Off-by-one errors can be avoided by
// being really precise with naming or thinking about the true meaning of numeric values. Length
// means "length". Good name: the distance from beginning of beginning to end of end. Index means
// "distance from beginning of beginning to beginning of the element we want". In the JavaScript
// or C or Ruby context 'index' always has exactly that meaning. In a one-indexed language like
// Fortran, we might think of it as "Distance from the *beginning* of the beginning to the *end*
// of the element we want". Different strokes for different folks, I suppose.

// Now let's add a value to the end of our array. Ours is a very caring dragon. One of her most
// treasured treasures is her abstract concept of friends, so let's add the string 'friends' to
// the end of our array. At this point, we actually have many different ways we could add values
// to the end of our array. Take a minute to talk this over with your partner. Can you write at
// least three ways to do it?
// i. Hard-coded index number. Since we happen to know the array only has something in index 0
//    right now, we could just do something like `treasureChest[1] = 'friends'`; Clearly this isn't
//    going to work well in situations where we aren't sure how many items are in the array already.
// ii. Interrogating array.length. Since the length of the array is always one greater than the
//    highest index (the thirteenth tick of the twelve-inch ruler), we could write
//        treasureChest[treasureChest.length] = 'friends';
//    Let's break this down. First we're looking up what our treasureChest is. It's a variable that
//    contains a reference to an array somewhere on the heap. The square brackets mean we mean to
//    drill down into the array. Inside the brackets, treasureChest.length resolves to a number
//    like this: reference_to_our_array_with_treasures_in_it.length, which is the number 1. That
//    number, since it has no fractional part, is suitable to index into the array that the
//    treasureChest variable points to. There is not yet an element at index 0, becase we have
//    not yet written to anything but the beginning of the array (treasureChest[0]). Now the `=`
//    operator sees it's asked to write to a non-existent array element, so it lengthens the
//    array to accomodate it, keeping the length property up to date. The 'friends' string literal
//    causes a new string to be created somewhere and a reference to that string to be the
//    resolution of the righthand operand of the `=` operator. The reference of that string gets
//    written to the new array element (treasureChest[1]), and that reference is also the resolution
//    of the entire expression-statement `treasureChest[treasureChest.length] = 'friends';`
//    Then we reach the brackets, where the computer says "I'm going to evaluate whatever comes
//    between the brackets, and then look up the results of that".
// iii. `arr.push('friends');` push is a method that comes with any array. It's very simple and useful.
//    All it does is add a value to the end of an array. `treasureChest.push('friends');` will add
//    the string 'friends' to the end of our treasureChest array.
//    Let's talk through exactly what happens when we invoke `treasureChest.push('peacock feathers')`.
//    First up, treasureChest. It's a variable which points to an array, you know the one, somewhere
//    in memory. That array, being a kind of object, also has a passel o' methods from being an
//    object, and a bunch more from being an array. Not all objects know how to push things. All
//    arrays know how to push things. This object is an array, which knows how to push. By that I mean
//    this array has a property named 'push' whose value is a function that does something useful
//    for an array-type object. What push does is append a single value onto the end of the array's
//    indexed data store. It's basically made for what we want to do. Through the magic of dot notation,
//    `arr.push` has been resolved to a reference to a function somewhere in memory -- the function
//    listed as the value at arr['push'] in the array-type object whose referenced is stashed in the
//    variable named `arr`. We'll go into functions on day 4, but for now, just know that the round
//    parentheses tell JS interpreter to invoke the function on the left, "passing in" the arguments
//    in the parentheses. There's only one here, an expression which means create a new string and
//    pass the reference of this new string into the function. According to the JavaScript reference
//    documents, the push method of the Array global object takes any number of arguments and appends
//    them individually onto the end of the array, returning a number (the new length) upon completion.
//    So the push method gets called with a reference to the 'friends' string, it then does its pushy
//    business, leaving the array longer by one element, and push returns the number 2 representing the
//    new length of the array. The whole expression `arr.push('friends')` resolves to 2, and the whole
//    statement `arr.push('friends');` does nothing with this number two, so it gets flushed away by
//    for the next statement.
// There are many other ways to append a string reference to the end of our treasure chest array, but
// those are the three most canonical patterns.
//    6. Try using all three of these patterns to add values to the end of our treasureChest. Make
//      up your own ideas of things that our dragon might collect. Be sure to console.log your
//      treasureChest after each one to see what the results are. What is our length going to be after
//      each new item is added?
// At this point, we should now have at least 5 things in our treasureChest array. Mine looks like this:
//      ['ethically sourced sandals', 'friends', 'rock climbing gear', 'JS knowledge', 'colored pants'].
//    7. Go through and access each value in the array. This might feel tedious, but building up the
//      muscle memory of it will become embedded when you don't have to think about this anymore!
// While .push is he most used array method, there are a couple others worth knowing that they exist,
// though you won't need to have them memorized like you should have .push memorized. .pop() will take
// the last value out of an array and give it to you. It can be used as a partner to .push() to use an
// array as a stack. You'll learn what that means when we get to it.
//    8. invoke `treasureChest.pop();`. What value is returned to you? What does your array look like
//      afterward?
// .unshift() works just like push, but for the start of our array (mnemonic: "unshift unshrinks" the
// array by adding a prefix like un-)  .shift() works like pop, but for the start of our array
// (mnemonic: "shift shrinks" the array -- by shifting off the prefix). push and pop run much faster
// than shift and unshift because they don't need to shift every element to a new position.
//    9. Use both .unshift and .shift to add and remove treasure items. As always, console.log your
//      treasure chest afterwards to see the result. What happens? Can you explain it to your pair?
//    10. Now that we've populated treasureChest, let's add that to the mythicalAnimal object we
//      created yesterday. We had a property on there called collects. Overwrite that property with
//      the trasureChest array we've been playing with. console.log the mythicalAnimal object
//      afterwards to make sure the collects property now points to your treasure chest array.
//    11. Create an empty array called grandCouncil. This is where we'll store all of the
//      mythicalAnimal objects we'll create.
//    12. Now create three new objects. Each object should have the following properties:
//      type      string specifying what type of mythical animal this is
//                (e.g. unicorn dinosaur, yeti, Loch Ness Monster, polar bear, red panda).
//      collects  array with a few things this animal might collect
//      canFly    boolean (true or false keyword without quotation marks) can this animal can fly?
//    13. Now add these onto the end of our grandCouncil array using the three methods outlined
//      above (`arr[known_index] = ....` ; arr[arr.length] = ....' ;  `arr.push(....)` .
//    14. Whoops! Looks like one of our mythicalAnimals melts too easily in the presence of Leslie
//      the Dragon. Let's overwrite the value stored at index 2 in our array with the string
//      'open position available!'. Check what grandCouncil looks like after overwriting this value.

// Congratulations! You've now gotten in a decent bit of practice using arrays and understanding the
// different ways to add and access values from them.
// To recap the two built-in JavaScript data structures we have covered:
//
// OBJECT: A collection of properties (key-value pairs) designed for fast lookup, where each
//       key is a string unique among all keys of the object, and each key is associated with a
//       single value that need not be unique. Each value can be anything that any JS variable
//       can hold, such as a number, boolean, or reference. A reference might point to a function,
//       an array, another object or the selfsame object. A nested object (an object whose reference
//       is the value of a property of an object) is a great place to associate a bunch of formatted
//       data per key.
//       For example, imagine we want to have an object called rolodex where the keys
//       are expected to be people's names and the values are expected to be objects. These nested
//       objects are exected to be keyed on the names of the fields, such as 'middle_name' or
//       'home_phone', and the values are expected to be strings with the contact data like
//       'Telegraph Academy' or 'bianca@example.edu'. Then, if the keys are compatible with dot
//       notation, an expression like
//             rolodex.bianca.business_street_address
//       resolves in during interpreter execution to a string like
//             '1600 Shattuck Avenue'
//       If the property names (keys) don't play well with JS code, or the keys are stored and
//       manipulated via variables, we would use bracket notation instead, like
//             rolodex[myFavoriteRolodexKey]['Suite #']
//       resolving to a value at runtime
//              "106" or perhaps 106
//
// ARRAY: A collection of values designed for ultra-fast lookup by numerical position (index), where
//      values may be anything that can be held by any JS variable, and need not be unique. Arrays
//      have a `length` property, which holds a live-updating numeric value, not a function that returns
//      a numeric value. That's why the standard length-interrogation expression is `myArray.length`,
//      not `myArray.length()`. Arrays are themselves objects. That's how it's possible for a length
//      property, or any property at all to exist in an array. An array can do anything an object can
//      do plus one extra trick. They have an array data store deep within them, which is accessible
//      by non-fraction-bearing, non-negative, numeric or some-but-not-all-parsable-as-numeric values.
//      [Digression: JavaScript has many idiosyncrasies. myArray['5'] and myArray[5.0] hit the indexed store,
//      while myArray['5.0'] hits the key-value store. Don't try to memorize all of JavaScript's misbehaviors.
//      Just know that it's full of such sharp edges. Just try to use pristine numbers to index into
//      an array or you might get a suprise. The array store can grow or shrink. Here's some code.
//              var arr = [];  arr[1000000] = 0;
//      This code causes the array store to grow to length 1000001, even though nearly all elements are
//      empty. What we gain from this behavior is the ability to look up any array element via fast
//      integer arithemtic behind the scenes, rather than significantly slower, but still pretty fast
//      hash function arithmetic used by object key lookup. For this reason arrays are usually a bad choice
//      for sparsely populated data. All the blank elements take up space, just to keep the elements with
//      data at the correct location. Arrays are great for contiguous collections that don't need keys
//      but do need random-access behavior, meaning you can get at something in the middle if you know
//      it's position (index) without having to traverse other elements. You can jump right to it if you
//      know which one it is by index (distance from the front).

// We've gone over how to access individual values from arrays and objects, but you're probably curious
// if there's an easier way to access all the values in an array or object. We've mentioned the two
// different types of loops we have available for arrays and objects. Tomorrow we're going to practice
// them in more depth! Loops are great ways of accessing all the values in an array or object efficiently.
