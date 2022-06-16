// function must return string
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Garrett', 'Hilberling'));
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = 'alex';
var pageName = '1';
var errorMessage = null;
var user = null;
////////////////////////////////////////////////////////////////////////////////////////////
var doSomething = function () {
    console.log('doSomething');
};
// never expects function to return something that will never happen/never ends
var never = function () {
    throw 'never';
};
// avoid using any no matter what. it is not a solution it is just a start of bigger problems in your project
var foo = 'foo';
var vAny = 10;
var vUnknown = 10; // type unknown is a good alternative to type any
var s1 = vAny;
// to avoid error
var s2 = vUnknown; // will not work because we are telling TypeScript we do not know the type
var pageNumber = '1';
var numericPageNumber = pageNumber; // known as type assertion
// console.log(vAny.foo());
// console.log(vUnknown.foo()); // will give error: property 'foo' does not exist
