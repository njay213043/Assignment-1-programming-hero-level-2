const formatValue = (value: string | number | boolean): string | number
    | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return !value;
    }
};

const getLength = (value: string | number[]): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};

class Person {
    constructor(public name: string, public age: number) {
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
            ;
    }
}

type Item = {
    title: string;
    rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
    const result: Item[] = [];
    items.forEach((item: Item) => {
        if (item.rating >= 4) {
            result.push(item);
        }
    });
    return result;
};

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
    const activeUsers: User[] = [];
    users.forEach((user: User) => {
        if (user.isActive === true) {
            activeUsers.push(user);
        }
    });
    return activeUsers;
};

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published:
${book.publishedYear}, Available: ${availability}`
    );
}

function getUniqueValues(
    arr1: (string | number)[],
    arr2: (string | number)[]
): (string | number)[] {
    const uniqueValues: (string | number)[] = [];
    const combined: (string | number)[] = [...arr1, ...arr2];
    combined.forEach((value: string | number) => {
        let alreadyAdded = false;
        for (let i = 0; i < uniqueValues.length; i++) {
            if (uniqueValues[i] === value) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) {
            uniqueValues.push(value);
        }
    });
    return uniqueValues;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
    let totalPrice = 0;
    products.forEach((product: Product) => {
        const basePrice = product.price * product.quantity;
        let finalPrice = basePrice;
        if (product.discount !== undefined) {
            const discountAmount = (basePrice * product.discount) / 100;
            finalPrice = basePrice - discountAmount;
        }
        totalPrice = totalPrice + finalPrice;
    });
    return totalPrice;
}