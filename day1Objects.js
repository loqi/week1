// Today we're going to get in a bunch of practice with objects.
//
// As you start your JS journey, there's a ton of value in just building out the muscle memory for
// the fundamentals. To get these fundamentals as deeply embedded as possible, type them out new
// each time. Avoid copy-pasting code. Don't bypass the workout that manual typing the code provides.
//
// We'll begin by writing a line of code that creates a new, empty object.

// 1. Create a variable, mythicalAnimal, and set it equal to an object literal.


// DOT NOTATION
//
// Recall that in JavaScript, an Object is a key-value store, meaning it's a collection of zero
// or more keys, each key paired with exactly one associated value. JavaScript cannot use anything
// but a string as an object key. Remember this when you see your console render the content of
// an object, or some javascript code without quotation marks around the keys. They keys are
// strings no matter what, even if it looks like a number or some other kind of data. Object
// values have no such restriction. They can hold anything a variable can hold.
//
// When the JS interpreter sees dot notation, it converts the identifier at the right of the dot
// to a true string value. Then it looks up that string as a property name in the object whose
// reference is specified to the left. Finally, this `object.property` expression resolves to a
// reference to the associated value, or to the special JavaScript value `undefined` in the case
// that no exact key match exists in that object.
//
// Let's use dot notation to add some properties to mythicalAnimal.

// 2. Add a type property, and set it equal to the string 'dragon'.
// 3. Add a name property, and set it equal to the string 'Leslie'.
// 4. Add a likes property, and set it equal to an empty array.
// 5. Add a property called bestFriend, and set it equal to your name.
// 6. Add in a superPower property. Set it equal to 'gives amazing hugs'.

// Now we can read (and overwrite) the properties we just created. Let's read the values in
// mythicalAnimal.

// 7. Write a dot-notation expressin that resolves to each individual value:
//         'dragon'   'Larry'   []   your name   'gives amazing hugs'

// Hopefully this begins to feel slightly more tedious than confusing. Awesome! That means you're
// building your coding muscles. Keep practicing. Writing the code and puzzling through anything
// difficult is how we learn.


// BRACKET NOTATION
//
// Bracket notation does the same thing as dot notation, but more. By convention, the JavaScript
// community prefers dot notation, but there are some tasks it's just not up to. Dot notation
// requires an object key to follow the JavaScript language requirements for an identifier.
// Furthermore, dot notation requires you to hardcode the exact name of the key inline, like so:
//          myVerySpecialOject.myFavoritePropertyName
// Bracket notation is slightly longer and harder to read, but it allows us to build up the
// property name on the fly. We can have code like so:
//          myVerySpecialObject[myVariableNameOrSuperWhizbangExpression]
// When dot notation can't cut it, we use bracket notation.
//
// Let's have a little bracket notation workout.

// 8. Create a variable called newPropertyToAdd, and set it equal to string 'food'.
// 9. On the next line, use bracket notation and newPropertyToAdd to insert the property
//    `'food':'BBQ'` into the mythicalAnimal object. This line of code can have `BBQ` but
//    not `food` directly in the code.
// 10. Now set newPropertyToAdd equal to the string 'can fly'.
// 11. Look at this "commented out" line of code:
//          mythicalAnimal[newPropertyToAdd] = true;
//     What do you expect to happen when this new code is "commented in"? Think it through
//     with your pair, then uncomment that line and console.log mythicalAnimal afterward.



// *** SPOILER ALERT ***



// What just happened?
//    When the JS interpreter reaches that line, our populated mythical animal object exists in
//      memory, along with the variable mythicalAnimal referencing that object.
//    Interpreter then recognizes the line of code as a statement ending in a semicolon, which
//      is entirely made up of an expression, `mythicalAnimal[newPropertyToAdd] = true`. That
//      expression is itself composed of smaller expressions.
//    Since at that moment, the variable mythicalAnimal contains a reference to an object built
//      by earlier-executed code, the expression `mythicalAnimal` (a single variable name, all
//      by itself) resolves to exactly that: a refrence to our object somewhere in the JavaScript
//      data heap which is managed for you by the interpreter.
//    Next, it interprets the bracket notation, meaning the resolution of whatever expression
//      is inside will be converted to a string and then assumed to represent an oject key.
//    The code fragment inside the brackets, `newPropertyToAdd` is expected to be an expression,
//      in this case, another simple variable name. The content of that variable, at this
//      moment is the string `'can fly'`.
//    Now the interpreter attempts to find a 'can fly' property in the object we earlier built.
//    It finds no match, so the interpreter remembers this fact for what comes next.
//    The single-equal operator `=` means "Hey JS interpreter, please resolve the expression to
//      the left and to the right of the `=` symbol, then overwrite the righthand value into the
//      memory location specified by the lefthand reference, allocating a new memory location if
//      no such reference exists, and finally return that value you just wrote as the resolution
//      of the whole `location = expression` expression."
//    The little expression `true` evaluates to the corresponding boolean value.
//    Since there is no 'can fly' key in the mythicalAnmial object, the interpreter creates a new
//      property, and writes the boolean `true` into this newly allocated property as the value.
//    Now the expression `mythicalAnimal[newPropertyToAdd] = true` has been evaluated, and the
//      "side effect" of the `=` operator has been committed to memory as a new object property.
//    The statement `mythicalAnimal[newPropertyToAdd] = true;` (with semicolon) is entirely
//      comprised of the expression `mythicalAnimal[newPropertyToAdd] = true` (without).
//      That statement has now been executed, which resoves to the thing that the `=` operator
//      has written, namely, a boolean true. Since that statement is entirely comprised of that
//      expresson, the value (true) is discarded and the interpreter moves on to whatever code
//      lies beyond that semicolon.
//FIXME: Be aware that students have been getting this very incorrect explanation >>> Now, it looks up the string 'canFly' as a property name on our mythicalAnimal object, and returns the value that is stored at that property name, which is the boolean value true in this case.
//There is no mythicalAnimal.canFly property at the time the interpreter reaches that line of code.

//    When we write JavaScript, we don't normally have to think our code through to this level
//    of detail because the interpreter manages these nitty gritty details for us. However, it
//    is important to have a solid foundation of knowledge at least one level of complexity
//    underneath the things we do touch. Without this mental model we can get confused; With
//    this model, our code does *exactly* what we expect, and we can accurately imagine ourselves
//    as the JavaScript interpreter, albeit, much slower, and with our extra human understanding
//    of the meaning and purpose of our code. See, no black magic here. A correctly implemented
//    JavaScript interpreter (the part of your web browser that parses and executes the JavaScript
//    code you just wrote) -- all it does is follow a set of rules spelled out by the formal
//    JavaScript language specification, now managed by the European Computer Manufacturers
//    Association. You may have heard of ECMAScript. It's the new official name for JavaScript,
//    but nobody calls it that unless they're being super-formal, or talking about "ES6".
//
//    Dot notation would not have been up to the task. `mythicalAnimal.newPropertyToAdd = true;`
//    has the same effect as `mythicalAnimal['newPropertyToAdd'] = true;` which is not what we
//    want. That code would attach the property `'newPropertyToAdd':true` to our mythical
//    creature, instead of the property `'can fly':true`. Even if we'd put the property name
//    straight into our code, it wouldn't work. Consider `mythicalAnimal.can fly = true;`.
//    That space confuses the interepreter. It sees `can` as the property name and `fly` as
//    some out-of-place nonsense. Trying to run that line would cause a syntax error "unexpected\
//    identifier'. The interpreter sees `mythicalAnimal.can` and dutifully looks up the property
//    `can` in the object referred to by `mythicalAnimal`. It sees there is no such key in the
//    property list, but this is not the error. That expression just resolves to the special JS
//    value `undefined`, the normal behavior for any object lookup on a key that doesn't exist.
//    Some ancient versions of JS might interpret the line as if it had been `mythicalAnimal.can;
//    fly = true;`, which is also not what we want. All current versions will see `fly` and give
//    up because the expression `mythicalAnimal.can` is not nested within a bigger expression, so
//    once it's resolved, the next piece of code is expected to be whatever can sensibly come
//    an expression. Since this expression is not part of a bigger statement, the expression all
//    by itself is the statement. In this case, nothing but a semicolon or a newline can signal
//    the end of the statement and the beginning of a new statement, so when it sees an
//    identifier, it gives up on our code as broken.

// Now let's use bracket notation with an inline string literal.

// 12. Write a line of code that uses bracket notation to create a property name 'collects'
//     associated with the string value 'diamonds and gold and fire extinguishers'.

// To a JS neophite, this appears to be a different pattern than putting a variable name in the
// brackets. Let's briefly revisit the ponderously hair-split steps we talked through above.
// All the steps are the same until the interpreter gets inside the square brackets. There it
// finds a string literal instead of a variable name. It understands code like this
//          "blah blah blah"
//      or
//          'blah blah blah'
//      to mean, "Hey interpreter, be a doll and build me a new string object somewhere on your
//      data heap with the character sequence described by the code between the matched pair of
//      quotation marks. After that, resolve the expression of the string literal as a reference
//      to that string you just made. M'kay, love?"
//FIXME: Not to be insufferably nit-picky, but I think this is technically slightly wrong >>> In this case, that thing is already a string, 'collects'. THIS STEP IS THE ONLY ONE THAT CHANGES AT ALL. When the interpreter goes to evaluate the thing inside the brackets, it recognizes that thing is already a string and that it doesn't have to do any further work on this step. In the previous version, the only differences is that it had to turn the thing inside the brackets into a string by evaluating it as a variable first.
//In both versions, the expression inside the bracket evaluates to a string before the object lookup turns that string to a string. In the first version, it's a variable name that holds a reference to a string. In the second version it's a string literal that gets built by the interpreter, which then resolves it to a reference to that new string.
//I'm not trying to be a total wanker here but if we make a difinitive explanatory statement, it should be as close to perfectly true as possible. Anything else will create a broken mental model with students who are carefully following along. And when they're new to coding, this can sew confusion for later on, when they build on this foundation.
//FIXME: same mistake as above got released in front of students >>> Now, it looks up the string 'collects' as a property name on our mythicalAnimal object, and returns the value that is stored at that property name, which is the string 'diamonds and gold and fire extinguishes' in this case.
//that property does not exist at the time the line of code line is reached.

// Now that string literal has been resolved to a reference to a brand new string somewhere in
// memory. The square brackets mean "Evaluate the expresson between the brackets, stringify it,
// and then use that string as a property name. Then look up that string as one of the keys in the
// object." Since the thing in the bracket is already a string, stringifying it has no effect, it
// just gets used as-is. So the string 'collects' gets searched within the object referenced by
// the variable mythicalAnimal, no such property name is found, so it gets created when the '='
// operator does its business.
//
// Really, both '=' expressions conform to the same general structure.
// Both `mythicalAnimal[newPropertyToAdd] = true;` and `mythicalAnimal["collects"] = "stuff";`
// conform to the pattern
//          reference_to_an_object[expression_to_be_resolved_and_stringified] = expression;
// All we did in the second version was to tuck the string-creation code right inside the
// brackets. The earlier version creates a string 'can fly' and stuffs it into the variable
// `newPropertyToAdd` with a reference to that brand new string. In JavaScript, a string counts
// as a primitive data type, meaning it is (or the interpreter puts on a convincing show that it
// is) stored straight inside a variable. Later, we'll go deeper into this, but for now, just
// think of strings as behaving like numbers or booleans. Even gigantic strings live happily
// inside a single variable data value, while even tiny objects only have their memory reference
// fitting inside a variable as the data value. Perhaps there is black magic here afterall! Now
// back to the example. The next line of the earlier version resolves the variable name
// `newPropertyToAdd` to whatever is stored in that variable: the string "can fly. Likewise in
// the second version, the string literal `'collects'` calls for the creation of a new string
// and resolves to the value of that string, all in one step. This string then serves as a
// property name within the object describing our dragon. 

// 13. Devise a way to compare the persistent effects of these two lines of code
//          var x = mythicalAnimal['non-existAnt property'];
//          var y = mythicalAnimal['non-existent property'] = '';
//     Get clear on exactly what you think the interpreter is doing to cause the results you find.
//     Try to create an excruciatingly detailed narrative of those steps.
//     Share your findings with fellow students who care to discuss it.


// At this point, you've gotten great practice setting properties of objects using both dot and
// bracket notation. Now let's practice accessing those properties and when to use each form of
// access. HINT: When looking up a string that never changes and also conforms to JS identifier
// rules, use dot notation; when your need something out of reach for dot notation, use bracket
// notation.
//FIXME: I think this was also released in error >>> HINT: When looking up a string, use dot notation. When looking up a variable, use bracket notation! This is all you need to know 98% of the time.
//Compare with the new version of the text, on the line above.

// 14. Create a variable called thisIsAVariable. Set it equal to the string 'superPower'.
// 15. What do you expect to happen when we try the following line?
//          console.log(mythicalAnimal.thisIsAVariable);
//     Talk this through with your partner for a minute.
//
//
//
//
// Here's our explanation. The dot notation asks the interpreter to convert the identifier
// characters after the dot into a string, in this case the string 'thisIsAVariable' and then
// look it up. Our `mythicalAnimal` object has no such property, so the expression
// `mythicalAnimal.thisIsAVariable` resolves to the value `undefined`, which is then passed
// to the console.log method as its argument. The function at `console.log` then
// logs what it got (the undefined value), just as requested, which means to show the word
// "udefined" on the console.

// 16. Now try using thisIsAVariable in a way that does what we seem to have wanted.
// 17. What happens when you put that variable in quotes inside the brackets?

// It does the exact same thing as if you had used dot notation. It looks it up as the string
// literal "thisIsAVariable" instead of the string currently referred to by the variable
// `thisIsAVariable`.
//FIXME: Sorry to nag. This also seems wrong to me >>> 16. And what happens when you put that variable in quotes inside the brackets? ... looks it up as a string, not a variable.
//I think it means it looks up as one string instead of another string.

// You can safely think of dot notation as a kind of syntactic sugar on top of bracket notation.
// So `obj.key = value;` can be thought to mean exactly the same thing as `obj['key'] = value;`
// Anything that can possibly come after the dot is valid inside a string literal, but not
// anything that could possibly go inside a pair of quotes is valid after a dot. And certainly
// not everything that could go inside square brackets can go after a dot. Think of dot notation
// as the pretty way to avoid bracket notation as often as you can possibly get away with it, but
// no more often than that! Think of bracket notation as the ugly cousin that gets shite done no
// matter what, but has slightly bad breath.


// OBJECT LITERALS

// One last exercise! So far we've been going through and creating different properties one by
// one. Let's use object literal notation to create a whole object at once! Here's an example.
//        var goalsForTheYear = {
//          cycling: '5000 miles',
//          climbing: '100 days',
//          giving: 'selflessly'
//        };
// These lines of code instruct the interpreter to create a new object somewhere in memory.
// Create six strings somewhere in memory. Populate that object with three properties made of
// those six strings, three as key, three as value. Create a new variable. And finally load that
// variable with the reference to that newly created object. At the end of all this, there will
// be six strings, one object, and one variable managed by the JavaScript interpreter, all
// accessible to later lines of code through the reference in the goalsForTheYear variable. You
// could have quotation marks around 'cycling', 'climbing' and 'giving', for an exactly identical
// effect. You'll need those quotes around any property name in an object literal that doesn't
// conform to JS identifier rules, such as a property name with multiple words or weird
// characters.

// 18. Create a new variable, `mythicalAnimal2`, and set it equal to an object literal with
//     these keys, and any values of your choosing:
//           type
//           name
//           likes
//           'best friend' (or bestFriend if you prefer)
//           superpower
//           food
//           'can fly' (or canFly if you prefer)
//           collects

// EXTRA CREDIT

// 19. Create a new variable, socialMythicalAnimal, and set it to an object described by a
// literal which follows the same format plus one additional property `bestFriend` (or
// `best friend` if you roll that way). This property's value should be a reference to one
// of the existing mythical creatures. If this creature is feeling lonely or narcissistic,
// make it point to itself. Don't worry, you won't break math or physics by doing this. You'll
// merely be copying an object reference into the value field of a property of an object. Boom.
// Done. If you try to go all the way to the end of that chain of friend of friend of friend,
// that's when you break physics, or have to interrupt out of an infinite loop, whichever comes
// first.

// 20. Do #19 again, but this time specify the best friend by nesing an inner object literal for
// a new creature complete with all attributes. Such a creature will persist in memory, but can
// only be touched by code like `socialMythicalAnimal.imaginaryFriend.superpower`. You can later
// create a shortcut like `var shyCreature = socialMythicalAnimal.imaginaryFriend;` which will
// copy that inner creature's reference address to a variable so you can have another, more
// direct path to it, like so, 'shyCreature.superpower`.

// By now you should have a good familiarity with objects, bracket and dot notation, object
// literals, and accessing properties of objects. Feel free to keep exploring on your own;
// objects are important things to understand! The more solid your foundation of understanding
// the higher you can build your tower of further understanding.
  
// Awesome!
