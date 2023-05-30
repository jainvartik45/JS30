const peoples = [
    {name : 'Wes' , year : 1988},
    {name : 'kait' , year : 1986},
    {name : 'Irv' , year : 1970},
    {name : 'Lux' , year : 2015},
];

const comments = [
    {text : 'Love this' , id : 122823},
    {text : 'Super good' , id : 734873},
    {text : 'You are he best' , id : 894982},
    {text : 'Ramen is my fav food ever' , id : 838243},
    {text : 'Nice Nice Nice!' , id : 273343}
];

// Is anyone greater than equals to 19 years

const is19 = peoples.some(people =>{
    const curr_year = (new Date()).getFullYear();

    const age = curr_year - people.year;

    return age >= 19;
     
});

// Is everyone greater than equals to 19 years

const isall19 = peoples.every(people =>{
    const curr_year = (new Date()).getFullYear();

    const age = curr_year - people.year;

    return age >= 19;
     
});

// Find the comment with id of 122823 

const thecomment = comments.find(comment => {
    if(comment.id == 122823) return comment;
})

// Find the index of comment with id of 122823 

const index = comments.findIndex(comment => {
    return comment.id == 122823
})


// delete the comment

comments.splice(index , 1);



console.log(comments)



