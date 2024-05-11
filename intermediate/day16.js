// JSON

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`

const usersArr = `[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
]`

const usersObj = JSON.parse(usersText, undefined, 8)
// console.log(usersObj)

const formatter = (key, value) => {
    // console.log(key, value)
    let newValue =
      typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
}
const usersObj2 = JSON.parse(usersText, formatter) 
// console.log(usersObj2)


// STRINGIFY OBJECTS TO JSON
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: [
        'HTML', 
        'CSS', 
        'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
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
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

window.localStorage.setItem("data", JSON.stringify(users));
const returnedData = window.localStorage.getItem("data");
const actualData = JSON.parse(returnedData);
console.log(actualData);

const txt = JSON.stringify(users, ["Asab", "email", "age", "skills", "2"], 4)
// console.log(txt) // text means JSON- because json is a string form of an object.

const makePost = async () => {
    const post = {
        userid: "9791uv9ahoduph",
        id: "12356",
        title: "How to use JSON",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
        Explicabo tempore quo dolorem laboriosam perferendis aspernatur \
        magnam labore id suscipit quae vitae ipsum rem, consequatur \
        facilis amet saepe veritatis nesciunt pariatur praesentium! \
        Eligendi sapiente dolorum a et optio animi adipisci necessitatibus."
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })

    console.log({response});

    const data = await response.json();

    console.log({data})
}

makePost();