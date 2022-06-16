                                                    // function must return string
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Garrett', 'Hilberling'));

///////////////////////////////////////////////////////////////////////////////////////////////

interface UserInterface {
    name: string;
    // ? means not mandatory
    age?: number;
    getMessage(): string;
}

const user: UserInterface = {
    name: 'Garrett',
    age: 23,
    getMessage() {
        return "Hello " + name;
    }
};

const user2: UserInterface = {
    name: 'Jack',
    getMessage() {
        return "Hello " + name;
    }
}

console.log(user.name);