var ratingData = [
    { restaurant: "KFC", rating: 5 },
    { restaurant: "Burger King", rating: 4 },
    { restaurant: "KFC", rating: 3 },
    { restaurant: "Domino", rating: 2 },
    { restaurant: "Subway", rating: 3 },
    { restaurant: "Domino", rating: 1 },
    { restaurant: "Subway", rating: 4 },
    { restaurant: "Pizza Hut", rating: 5 },
    { restaurant: "Tikkaway", rating: 5 },
    { restaurant: "The Naan House", rating: 5 },
    { restaurant: "Curry Leaves", rating: 3 },
];

//filtered restaurant
let filtered = [];
for (i = 0; i < ratingData.length; i++) {
    if (filtered.indexOf(ratingData[i].restaurant) === -1) {
        filtered.push(ratingData[i].restaurant);
    }
}

console.log(filtered);

//average for all rest

let unique = ["KFC", "Burger King", "Domino", "Subway", "Pizza Hut","Tikkaway","The Naan House","Curry Leaves"];
//              0         1              2          3         4       5               6                7
let avgRating = [];
let outRating = 0;
let count = 0;

for (let i = 0; i < unique.length; i++) {
    for (let j = 0; j < ratingData.length; j++) {
        if (unique[i] == ratingData[j].restaurant) {
            outRating += ratingData[j].rating;
            count = count + 1;
        }
        // console.log(ratingData[j].restaurant);
        // console.log(ratingData[j].rating);
    }
    var output = outRating / count;
    let myObj = {};
    myObj.restaurant = unique[i];
    myObj.avgRating = output;
    avgRating.push(myObj);
    count = 0;
    outRating = 0;
}
console.log("outRating =>", outRating, "count=>", count);

console.log(avgRating);

