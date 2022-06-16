import * as R from 'ramda'
const { append, any, contains } = R
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

// interface UserInterface {
//     id: ID;
//     name: string;
//     surname: string;
// }

const popularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonsTag: MaybePopularTag = 'dragon';

let username: string = 'alex';

let pageName: string | number = '1';

let errorMessage: string | null = null;

// let user: UserInterface | null = null;


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

// let pageNumber: string = '1';
// let numericPageNumber: number = pageNumber as unknown as number; // known as type assertion
// console.log(vAny.foo());
// console.log(vUnknown.foo()); // will give error: property 'foo' does not exist

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let page: any = '1';
// if we are using a library that has the type 'any' (out of our control) we can redefine the type by doing the following
let pageNumber = page as string; // type assertion
                                                        // CORRECT fix
const someElement = document.querySelector('.foo') as HTMLInputElement;
                            // a common incorrect fix for this issue
console.log('someElement', (someElement as any).value);
console.log('someElement', someElement.value);

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
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
const updatedArray = append<string>('baz', ['foo', 'bar']);

const searchStr = 'foo'; 
// const _hasSearchedString = any<string>((el: string) => el.contains(searchStr), ['foooo', 'bar', 'baz']);
/*                      Ramda End                     */

        // using a generic data type <T>. extends object specifies we are expecting an object to be passed in
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16); // random number id (similar to using uuid)
    return {
        ...obj,
        id
    }
}
// Can put whatever you want in <> brackets, normally use T or V though
interface UserInterface <T, V> {
    name: string;
    data: T;
    meta: V;
}
// specifying <T> will be an object with property name meta whose value is a string  
const user: UserInterface<{ meta: string }, string> = {
    name: 'Jack',
    data: {
        meta: 'foo',
    },
    meta: 'bar',
}
// demonstrates flexibility of <T>. defined here as an array of strings
const user2: UserInterface<string[], string> = {
    name: 'John',
    data: ['foo', 'bar'],
    meta: 'baz'
}
const result = addId(user);
console.log('result: ', result);