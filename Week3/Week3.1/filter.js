// given an input array, give me back all the even values from it!!

const arr = [1, 2, 4, 5, 8, 10, 11];

const ans = arr.filter(function (i) {
    if (i % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);

const users = [
    {
        id: 1,
        name: "Aarav",
        age: 19,
        city: "Mumbai",
        isActive: true,
        skills: ["JavaScript", "React"],
        salary: 25000,
    },
    {
        id: 2,
        name: "Priya",
        age: 24,
        city: "Pune",
        isActive: false,
        skills: ["Python", "Django"],
        salary: 45000,
    },
    {
        id: 3,
        name: "Kabir",
        age: 17,
        city: "Delhi",
        isActive: true,
        skills: ["C++", "DSA"],
        salary: 12000,
    },
    {
        id: 4,
        name: "Meera",
        age: 28,
        city: "Bangalore",
        isActive: true,
        skills: ["UI/UX", "Figma"],
        salary: 60000,
    },
    {
        id: 5,
        name: "Rohan",
        age: 21,
        city: "Hyderabad",
        isActive: false,
        skills: ["Java", "Spring Boot"],
        salary: 35000,
    },
    {
        id: 6,
        name: "Ananya",
        age: 26,
        city: "Chennai",
        isActive: true,
        skills: ["Machine Learning", "Python"],
        salary: 75000,
    },
    {
        id: 7,
        name: "Dev",
        age: 18,
        city: "Kolkata",
        isActive: false,
        skills: ["HTML", "CSS"],
        salary: 10000,
    },
    {
        id: 8,
        name: "Ishita",
        age: 23,
        city: "Mumbai",
        isActive: true,
        skills: ["Node.js", "MongoDB"],
        salary: 50000,
    },
    {
        id: 9,
        name: "Yash",
        age: 30,
        city: "Pune",
        isActive: true,
        skills: ["DevOps", "AWS"],
        salary: 90000,
    },
    {
        id: 10,
        name: "Sneha",
        age: 20,
        city: "Delhi",
        isActive: false,
        skills: ["JavaScript", "Vue"],
        salary: 28000,
    },
];


let userrequest = users.filter((user) => {
    return user.city === "Delhi"
})

console.log(userrequest)