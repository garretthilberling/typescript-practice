                                                    // function must return string
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Garrett', 'Hilberling'));

///////////////////////////////////////////////////////////////////////////////////////////////

// interface UserInterface {
//     name: string;
//     // ? means not mandatory
//     age?: number;
//     getMessage(): string;
// }

// const user: UserInterface = {
//     name: 'Garrett',
//     age: 23,
//     getMessage() {
//         return "Hello " + name;
//     }
// };

// const user2: UserInterface = {
//     name: 'Jack',
//     getMessage() {
//         return "Hello " + name;
//     }
// }

// console.log(user.name);


/////////////////////////////////////////////////////////////////////////////
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonsTag: MaybePopularTag = 'dragon';

let username: string = 'alex';

let pageName: string | number = '1';

let errorMessage: string | null = null;

let user: UserInterface | null = null;


////////////////////////////////////////////////////////////////////////////////////////////

const doSomething = (): void => {
    console.log('doSomething');
}

// never expects function to return something that will never happen/never ends
const never = (): never => {
    throw 'never';
}

// avoid using any no matter what. it is not a solution it is just a start of bigger problems in your project
let foo: any = 'foo';

let vAny: any = 10;
let vUnknown: unknown = 10; // type unknown is a good alternative to type any

let s1: string = vAny;
                    // to avoid error
let s2: string = vUnknown as string; // will not work because we are telling TypeScript we do not know the type

let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number; // known as type assertion
// console.log(vAny.foo());
// console.log(vUnknown.foo()); // will give error: property 'foo' does not exist