// Example of use:

type AlbumName = string;

type Album = {
	name: AlbumName;
	copiesSold: number;
};

const albumName: AlbumName = 'Kind of Blue';
albumName;

// Bringing the types together
type Address = {
	street: string;
	city: string;
	zipCode: string;
};

type Contact = {
	email: string | null | undefined; // Using a union type with null and undefined
	phone: string | null | undefined; // Using a union type with null and undefined
};

type Person = {
	name: string;
	age: number;
	address: Address | null; // Composing with null
	contact: Contact | undefined; // Composing with undefined
};

const person1: Person = {
	name: 'Alice',
	age: 30,
	address: null, // Using null in the composition
	contact: {
		email: 'alice@example.com',
		phone: undefined, // Using undefined in the composition
	},
};

// Using Record
type Employee = {
	name: string;
	position: string;
};

type EmployeeRecord = Record<number, Employee>;

const employees: EmployeeRecord = {
	101: { name: 'Alice', position: 'Developer' },
	102: { name: 'Bob', position: 'Designer' },
};

// You can access employees by their IDs:
const employee101 = employees[101];

type Article = {
	title: string;
	author: string;
	publicationDate: string;
};

type ArticleRecord = Record<string, Article>;

const articles: ArticleRecord = {
	article1: {
		title: 'Breaking News: New Discoveries in TypeScript',
		author: 'Alice Author',
		publicationDate: '2023-10-19',
	},
	article2: {
		title: 'TypeScript and Modern Web Development',
		author: 'Bob Writer',
		publicationDate: '2023-10-20',
	},
};

// Add at least three additional articles to the articles object. Each article should have a unique ID (string), title, author, and publication date.
function addExtra() {
	addArticle('article3', {
		title: 'Article A',
		author: 'Adam',
		publicationDate: '2023-10-01',
	});
	addArticle('article4', {
		title: 'Article B',
		author: 'Belinda',
		publicationDate: '2023-10-02',
	});
	addArticle('article5', {
		title: 'Article C',
		author: 'Chris',
		publicationDate: '2023-10-03',
	});
}

// Implement a function called addArticle that takes parameters for the article ID and article information and adds the article to the articles object.
function addArticle(articleId: string, articleInfo: Article) {
	// Implement the function to add the article to the articles object
	articles[articleId] = articleInfo;
}

// Implement a function called deleteArticle that takes an article ID as a parameter and removes the article from the articles object.
=======
>>>>>>> b1dcc48 (week2 - initial stab)

type Person = {
	name: string;
	age: number;
	address: Address | null; // Composing with null
	contact: Contact | undefined; // Composing with undefined
};

const person1: Person = {
	name: 'Alice',
	age: 30,
	address: null, // Using null in the composition
	contact: {
		email: 'alice@example.com',
		phone: undefined, // Using undefined in the composition
	},
};

// Using Record
type Employee = {
	name: string;
	position: string;
};

type EmployeeRecord = Record<number, Employee>;

const employees: EmployeeRecord = {
	101: { name: 'Alice', position: 'Developer' },
	102: { name: 'Bob', position: 'Designer' },
};

// You can access employees by their IDs:
const employee101 = employees[101];

type Article = {
	title: string;
	author: string;
	publicationDate: string;
};

type ArticleRecord = Record<string, Article>;

const articles: ArticleRecord = {
	article1: {
		title: 'Breaking News: New Discoveries in TypeScript',
		author: 'Alice Author',
		publicationDate: '2023-10-19',
	},
	article2: {
		title: 'TypeScript and Modern Web Development',
		author: 'Bob Writer',
		publicationDate: '2023-10-20',
	},
};

// Add at least three additional articles to the articles object. Each article should have a unique ID (string), title, author, and publication date.
function addExtra() {
	addArticle('article3', {
		title: 'Article A',
		author: 'Adam',
		publicationDate: '2023-10-01',
	});
	addArticle('article4', {
		title: 'Article B',
		author: 'Belinda',
		publicationDate: '2023-10-02',
	});
	addArticle('article5', {
		title: 'Article C',
		author: 'Chris',
		publicationDate: '2023-10-03',
	});
}

// Implement a function called addArticle that takes parameters for the article ID and article information and adds the article to the articles object.
function addArticle(articleId: string, articleInfo: Article) {
	// Implement the function to add the article to the articles object
	articles[articleId] = articleInfo;
}

// Implement a function called deleteArticle that takes an article ID as a parameter and removes the article from the articles object.
function deleteArticle(articleId: string) {
	// Implement the function to delete the article from the articles object
	delete articles[articleId];
}

// After adding and implementing the functions, use console.log to display the entire articles object in the console.
console.log(`add...`);
addExtra();
console.log(articles);
console.log(`delete...`);
deleteArticle('article4');
console.log(articles);

// Test the addArticle and deleteArticle functions by adding and removing at least one article, and then display the updated articles object in the console.
console.log(`add...`);
addExtra();
console.log(articles);
console.log(`delete...`);
deleteArticle('article4');
console.log(articles);
}
