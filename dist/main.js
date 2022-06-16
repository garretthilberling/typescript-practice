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
// let pageNumber: string = '1';
// let numericPageNumber: number = pageNumber as unknown as number; // known as type assertion
// console.log(vAny.foo());
// console.log(vUnknown.foo()); // will give error: property 'foo' does not exist
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var page = '1';
// if we are using a library that has the type 'any' (out of our control) we can redefine the type by doing the following
var pageNumber = page; // type assertion
// CORRECT fix
var someElement = document.querySelector('.foo');
// a common incorrect fix for this issue
console.log('someElement', someElement.value);
console.log('someElement', someElement.value);
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value); // instead of event.target.value in regular js
});
