/* 
FizzBuzz

In this challenge, you'll implement FizzBuzz. 
FizzBuzz is a game used to teach multiples/divisors. 
The player is given a number to count to. Then, they count from one up to that number. 
For numbers divisible by 3, 
they substitute the word "fizz", 
for numbers divisible by 5, 
they substitute the word "buzz", 
and for numbers divisible by both 3 and 5, 
they substitute the word "fizzbuzz".

You'll create an event listener that listens for when a user submits a form indicating how high to count. 
This event should cause the program to create the FizzBuzz sequence up to the number requested by the user.

For each element in the FizzBuzz sequence, your code should insert an element into the .js-results div that looks like this:

<div class="fizz-buzz-item">
  <span>1</span>
</div>

If the element's content is the word "fizz", the div with .fizz-buzz-item should also get the class .fizz applied. So:

<div class="fizz-buzz-item fizz">
  <span>fizz</span>
</div>

If the element's content is the word "buzz" it should get the class ".buzz" applied:

<div class="fizz-buzz-item buzz">
  <span>buzz</span>
</div>

If its content is the word "fizzbuzz" it should get the class "fizzbuzz" applied:

<div class="fizz-buzz-item fizzbuzz">
  <span>fizzbuzz</span>
</div>

Your function should append the resulting HTML to the .js-results DOM element.
*/

$( '#number-chooser' ).submit( e => {

    e.preventDefault();

    let result = $( '#number-choice' ).val();

    if ( result % 3 === 0 && result % 5 === 0 ) result = 'fizzbuzz';
    else if ( result % 3 === 0 ) result = 'fizz';
    else if ( result % 5 === 0 ) result = 'buzz';

    if ( result === 'fizz' ) $( '.js-results' ).append( '<div class="fizz-buzz-item fizz"></div>' );
    else if ( result === 'buzz' ) $( '.js-results' ).append( '<div class="fizz-buzz-item buzz"></div>' );
    else if ( result === 'fizzbuzz' ) $( '.js-results' ).append( '<div class="fizz-buzz-item fizzbuzz"></div>' );
    else if ( result !== 'fizz' || result !== 'buzz' || result !== 'fizzbuzz' ) $( '.js-results' ).append( '<div class="fizz-buzz-item"></div>' );
    
    $( '.fizz-buzz-item:last-child' ).append( '<span>' + result + '</span>' );

});

