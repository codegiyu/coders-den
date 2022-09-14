//Exercises: Level 1
// 1. Create an empty object called dog
let dog = {};

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Bingo";
dog.legs = 4;
dog.color = "Black";
dog.age = 5;
dog.bark = function() { return 'woof woof'};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog['age']);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Dobermann";
dog.getDogInfo = function() {
    return `My dog is a ${dog.age} year old ${dog.color} ${dog.breed} whose name is ${dog.name} and barks ${dog.bark()}`;
};
console.log(dog.getDogInfo());


// Exercises: Level 2
const usersObj = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

// 1. Find the person who has many skills in the users object.
let userSkills = [], usersArr = Object.entries(usersObj);
for (let user of usersArr) {
    userSkills.push([user[0], user[1].skills]);
}
let mostSkills = userSkills.reduce((a, b) => a[1].length > b[1].length ? a : b)[0];
console.log(mostSkills);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0, usersAbove50Points = 0;
for (let user of usersArr) {
    if (user[1].isLoggedIn) loggedInUsers++;
    if (user[1].points >= 50) usersAbove50Points++;
}
console.log(loggedInUsers);
console.log(usersAbove50Points);

// 3. Find people who are MERN stack developer from the users object
let mernDevs = [];
for (let user of usersArr) {
    if (user[1].skills.includes('MongoDB') && user[1].skills.includes('Express') && user[1].skills.includes('React') && user[1].skills.includes('Node')) {
        mernDevs.push(user[0]);
    }
}
console.log(mernDevs);

// 4. Set your name in the users object without modifying the original users object
let newUsers = Object.assign({}, usersObj);
newUsers.Giyu = {
    email: 'eomegbu@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 26,
    isLoggedIn: false,
    points: 90
}

// 5. Get all keys or properties of users object
console.log(Object.keys(usersObj));

// 6. Get all the values of users object
console.log(Object.values(usersObj));

// 7. Use the countries object to print a country name, capital, populations and languages.


// Exercises: Level 3
// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: 'Eddy',
    lastName: 'Giyu',
    incomes: [[500000, 'July'], [600000, 'August'], [700000, 'September']],
    expenses: [[250000, 'July'], [300000, 'August'], [350000, 'September']],
    totalIncome: function() {
       return this.incomes.reduce((a, b) => [a[0] + b[0], 'Total'])[0]
    },
    totalExpense: function() {
       return this.expenses.reduce((a, b) => [a[0] + b[0], 'Total'])[0]
    },
    accountInfo: function() {
       return `${this.firstName} ${this.lastName}'s account has a balance of ₦${this.accountBalance()}`
    },
    addIncome: function(money) {
        this.incomes.push(parseInt(money))
    },
    addExpense: function(money) {
        this.expenses.push(parseInt(money))
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    }
};
console.log(personAccount.accountInfo());

// 2. Imagine you are getting the above users collection from a MongoDB database. 
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (userDetails) => {
    if (typeof userDetails == 'object' && userDetails != null && !Array.isArray(userDetails)) {
        let userExists = () => {
            for (let user of users) {
                if (user._id == userDetails._id || user.email == userDetails.email) {
                    return true;
                }
            }
            return false;
        }

        let keysComplete = () => {
            if (userDetails.hasOwnProperty('_id') && userDetails.hasOwnProperty('username') && userDetails.hasOwnProperty('email') && userDetails.hasOwnProperty('password')) {
                return true;
            }
            return false;
        }
    
        if(userExists()) {
            return "This user already has an account";
        } else if (userExists() == false && !keysComplete()) {
            return 'Input missing some data'
        } else if (userExists() == false && keysComplete()) {
            userDetails.createdAt = new Date().toLocaleString().replace(',', '');
            userDetails.isLoggedIn = false;
            users.push(userDetails);
            return "User added Successfully";
        }
    } else {
        return 'Please input a valid object';
    } 
}
console.log(signUp({_id: 'ghderc', 
                    username: 'Thomas',
                    email: 'thomas@thomas.com',
                    password: '123333'}));

// b. Create a function called signIn which allows user to sign in to the application
const signIn = (userDetails) => {
    if (typeof userDetails == 'object' && userDetails != null && !Array.isArray(userDetails)) {
        const emailExists = () => {
            for (let user of users) {
                if (user.email == userDetails.email) {
                    return {value: true, index: users.indexOf(user)};
                }
            }
            return {value: false, index: null}
        }
        if (!emailExists().value) {
            return 'Email does not exist';
        } else if (emailExists().value && !(users[emailExists().index].password == userDetails.password)) {
            return 'Password incorrect';
        } else if (emailExists().value && users[emailExists().index].password == userDetails.password) {
            return `Hello ${users[emailExists().index].username}. You have signed in successfully!`;
        }
    } else {
        return 'Please input a valid object';
    }
}
console.log(signIn({email: 'thomas@thomas.com', password: '123333'}))

// 3. The products array has three elements and each of them has six properties. 
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];
// a. Create a function called rateProduct which rates the product 
const rateProduct = (rateObject) => {
    if (typeof rateObject == 'object' && rateObject != null && !Array.isArray(rateObject)) {
        let productExists = () => {
            for (let product of products) {
                if (product._id == rateObject.productId) {
                    return true;
                }
            }
            return false;
        }

        let index, rateIndex;
        if (productExists()) {
            for (let product of products) {
                if (product._id == rateObject.productId) {
                    index = products.indexOf(product);
                    break;
                }
            }
            for (let rating of products[index].ratings) {
                if (rating.userId == rateObject.userId) {
                    rateIndex = products[index].ratings.indexOf(rating);
                }
            }
        }

        let userHasRated = () => {
            for (let rating of products[index].ratings) {
                if (rating.userId == rateObject.userId) {
                    return true;
                }
            }
            return false;
        }

        let keysComplete = () => {
            if (rateObject.hasOwnProperty('userId') && rateObject.hasOwnProperty('rate') && rateObject.hasOwnProperty('productId')) {
                return true;
            }
            return false;
        }
    
        if (!productExists()) {
            return "Invalid product";
        } else if(userHasRated() && keysComplete()) {
            products[index].ratings[rateIndex].rate = rateObject.rate;
            return `User's rating updated for ${products[index].name}`;
        } else if (!keysComplete()) {
            return 'Input missing some data';
        } else if (userHasRated() == false && keysComplete() && typeof rateObject.rate != "number") {
            return 'Invalid value for rate';
        } else if (userHasRated() == false && keysComplete() && typeof rateObject.rate == "number") {
            products[index].ratings.push({userId: rateObject.userId, rate: rateObject.rate});
            return `New user rating added successfully for ${products[index].name}`;
        }
    } else {
        return 'Please input a valid object';
    } 
}
console.log(rateProduct({userId: 'fg12cy', rate: 6, productId: 'hedfcg'}));

//b. Create a function called averageRating which calculate the average rating of a product
const averageRating = (productId) => {
    let productExists = () => {
        for (let product of products) {
            if (product._id == productId) {
                return true;
            }
        }
        return false;
    }


    let index, total = 0;
    if (productExists()) {
        for (let product of products) {
            if (product._id == productId) {
                index = products.indexOf(product);
                break;
            }
        }

        let ratingIsEmpty = () => {
            if (productExists() && !products[index].ratings.length) {
                return true;
            }
            return false;
        }

        if (!ratingIsEmpty) {
            for (let rating of products[index].ratings) {
                total += rating.rate;
            }
    
            return total / products[index].ratings.length;
        } else {
            return 'No available ratings for this product';
        }
        
    } else {
        return 'Product does not exist'
    }
}
console.log(averageRating('aegfal'));

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (productId, userId) => {
    let productExists = () => {
        for (let product of products) {
            if (product._id == productId) {
                return true;
            }
        }
        return false;
    }
    let index;
    if (productExists()) {
        for (let product of products) {
            if (product._id == productId) {
                index = products.indexOf(product);
                break;
            }
        }
    }

    let productIsLiked = () => {
        if (productExists() && products[index].likes.length) {
            return true;
        }
        return false;
    }

    if (!productExists()) {
        return "No such product";
    } else if (productExists() && typeof userId != 'string') {
        return "Invalid value for userId";
    } else if (!productIsLiked()) {
        products[index].likes.push(userId);
        return "Product liked";
    } else if (productIsLiked()) {
        products[index].likes.pop();
        return "Product unliked";
    }
}
console.log(likeProduct('aegfal', 2));
console.log(products[1])