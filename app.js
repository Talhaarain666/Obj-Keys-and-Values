let a = [
    {
        id: 1,
        name: "Muhammad Ali",
        category: "a",
    },
    {
        id: 2,
        name: "Abdul Basit",
        category: "b",
    },
    {
        id: 3,
        name: "Muhammad Ahmed",
        category: "c",
    },
    {
        id: 4,
        name: "Ahmed Ali",
        category: "d",
    },
    {
        id: 5,
        name: "Yaseen Ahmed",
        category: "e",
    },
    {
        id: 6,
        name: "Muhammad Furqan",
        category: "f",
    },
];

let objKeys = a.map(function (x) {

    return x.id

})
console.log(objKeys)

let arr1 = []

arr1.push(objKeys)
console.log(arr1)



let objVal = a.map(function (x) {

    return x.name

})
console.log(objVal)

let arr2 = []

arr2.push(objVal)
console.log(arr2)
