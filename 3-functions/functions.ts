/** Exercise 1
 * Add a type for the following function
 *
 * A function of type Add2 returns the sum of 2 number parameters
 */

import { assert } from 'node:console';

type Add2 = (n1: number, n2: number) => number;
const add2: Add2 = (n1: number, n2: number) => n1 + n2;
assert(add2(2, 2) === 4, '💥 1 – Not returning 4');

/** Exercise 2
 * Add a type for the following function
 *
 * Returns a function that, when called, multiplies the parameter by 5
 */

type MakeMultiply5 = () => (n: number) => number;
const makeMultiply5: MakeMultiply5 = () => (n) => n * 5;
assert(makeMultiply5()(5) === 25, '💥 2 – Not returning 25');

/** Exercise 3
 * Fix the implementation, or the type, of this function
 */

function justLog(msg: string): string {
	//console.log(msg);
	return msg;
}
assert(justLog('test') === 'test', '💥 3 – Not returning test');

/** Exercise 4
 * Using object destructuring, write a function that returns
 * the `name` field from an object of type User, capitalised
 * Example: getName(user) should return FELIX
 */

type User = {
	age: number;
	location: string;
	name: string;
};
const user: User = {
	age: 58,
	location: 'paris',
	name: 'Felix',
};

//type getName = (user: User) => string;
const getName = (user: User) => {
	return user.name.toUpperCase();
};
assert(getName(user) === 'FELIX', '💥 4 – not returning FELIX');

/** Exercise 5
 * Using array destructuring, write a function that returns
 * the first element of the provided array
 *
 * Example: head(array) should return 1
 */

type MyArray = number[];
const array = [1, 2, 3, 4];
const head = ([array]: MyArray) => {
	return array;
};
assert(head(array) === 1, '💥 5 – Not returning one');

/** Exercise 6
 *
 * Write the "implementation" call signature (but not the actual implementation) for the following overloads
 */
type Order = {
	orderId: number;
};
type FetchOrder = {
	(orderId: number): Order[];
	(order: Order): Order;
	// Add the implementation call signature here
	// if (typeof orderId === 'number') {
	// 	// Call signature 1
	// } else {
	// 	// Call signature 2

	// }
};

/** Exercise 7
 *
 * Add types for this function where the 2nd parameter is optional
 */
function concat(str1: string, str2?: string) {
	return `${str1}${str2 ? str2 : ''}`;
}
assert(concat('a', 'b') === 'ab', '💥 7 – Not returning ab');
assert(concat('a') === 'a', '💥 7 – Not returning a');
