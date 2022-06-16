var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// classes are syntactical sugar for working with prototypes
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = 'foo'; // similar to how a constant cannot be overwritten
    };
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50; // cannot be changed and only accessed in the class
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user = new User('Garrett', 'Hilberling');
console.log(user.getFullName); // Garrett Hilberling
var admin = new Admin('foo', 'bar'); // inhereted everything from User class
console.log(admin.getFullName); // foo bar
