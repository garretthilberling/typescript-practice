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