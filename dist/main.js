"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var R = require("ramda");
var append = R.append, any = R.any, contains = R.contains;
// function must return string
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Garrett', 'Hilberling'));
// interface UserInterface {
//     id: ID;
//     name: string;
//     surname: string;
// }
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = 'alex';
var pageName = '1';
var errorMessage = null;
// let user: UserInterface | null = null;
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// interface UserInterface {
//     getFullName(): string;
// }
// // classes are syntactical sugar for working with prototypes
// class User implements UserInterface {
//     // private makes it so these cannot be accessed outside of the class
//     private firstName: string;
//     // protected makes it so a property can be used only in the class and its children
//     protected lastName: string;
//     readonly unchangableName: string; // readonly works similarly to a constant- it can't be overwritten
//     static readonly maxAge = 50; // cannot be changed and only accessed in the class
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.unchangableName = firstName;
//     }
//     changeUnchangableName(): void {
//         // this.unchangableName = 'foo'; // similar to how a constant cannot be overwritten
//     }
//     getFullName(): string {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// class Admin extends User { // a child of the User class
//     private editor: string;
//     setEditor(editor: string): void {
//         this.editor = editor;
//     }
//     getEditor(): string {
//         return this.editor;
//     }
// }
// // const user = new User('Garrett', 'Hilberling');
// // console.log(user.getFullName); // Garrett Hilberling
// const admin = new Admin('foo', 'bar'); // inhereted everything from User class
// console.log(admin.getFullName); // foo bar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                      Ramda Start                   */
// const updatedArray = append<string>('baz', ['foo', 'bar']);
// const searchStr = 'foo'; 
// const _hasSearchedString = any<string>((el: string) => el.contains(searchStr), ['foooo', 'bar', 'baz']);
/*                      Ramda End                     */
// using a generic data type <T>. extends object specifies we are expecting an object to be passed in
var addId = function (obj) {
    var id = Math.random().toString(16); // random number id (similar to using uuid)
    return __assign(__assign({}, obj), { id: id });
};
// specifying <T> will be an object with property name meta whose value is a string  
var user = {
    name: 'Jack',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
// demonstrates flexibility of <T>. defined here as an array of strings
var user2 = {
    name: 'John',
    data: ['foo', 'bar'],
    meta: 'baz'
};
var result = addId(user);
console.log('result: ', result);
///////////////////////////////////////////////////////////////////////////////////////////////////
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(statuses.inProgress); // 1
// enumerator. we can use enum as a value and as a data type
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "not started";
    StatusEnum["InProgress"] = "in progress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
