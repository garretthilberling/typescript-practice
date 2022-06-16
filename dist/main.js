// function must return string
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Garrett', 'Hilberling'));
var user = {
    name: 'Garrett',
    age: 23,
    getMessage: function () {
        return "Hello " + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return "Hello " + name;
    }
};
console.log(user.name);
