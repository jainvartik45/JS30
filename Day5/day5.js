const people =
['Beck, Glenn',
'Beecher, Henry' ,
'Bee, thoven' ,
'Becker, Carl' ,
'Beckett, Samuel' ,
'Beddoes, Mick ',
'Beethovan, Ludwig' ,
'Begin, Menachem' ,
'Belloc, Hilaire' ,
'Bellow, Saul',
'Benchley, Robert' ,
'Benenson, Peter' ,
'Ben-Gurion, David',
'Benjamin, Walter', 'Benn, Tony',
'Bennington, Chester', 'Benson, Leana' ,
'Bent, Silas' ,
'Bentsen, Lloyd' ,
'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving' ,
'Berne, Eric', 'Bernhard, Sandra' ,
'Berra, Yogi'
, 'Berry, Halle',
'Berry, Wendell' ,
'Bethea, Erin' ,
'Bevan, Aneurin' ,
'Bevel, Ken',
'Biden, Joseph' ,
'Bierce, Ambrose' ,
'Biko, Steve' ,
'Billings, Josh',
'Biondo, Frank',
'Birrell, Augustine' ,
'Black, Elk' ,
'Blair, Robert' ,
'Blair, Tony' ,
'Blake, William' ];

const inventors = [
    {first :'Albert ',last:'Einstein',year:1879,passed:1955},
    {first :'Isaac ',last:'Newton',year:1643,passed:1727},
    {first :'Galelio ',last:'Galeili',year:1564,passed:1642},
    {first :'Marie',last:'Curie',year:1867,passed:1934},
    {first :'Johannes ',last:'Kepler',year:1571,passed:1630},
    {first :'Niclaus ',last:'Copernicus',year:1473,passed:1543},
    {first :'Max ',last:'Plank',year:1858,passed:1947}
]

// Filter the list of inventors who were born in the 1500's

const in1500s = (object) =>{
    if(object.year < 1600 & object.year >= 1500) return object;
}

const filtred = inventors.filter(in1500s);


// Give us an array of the inventory first and last name

const fullnames = (object) => {
    return object.first + object.last;
}

const allNames = inventors.map(fullnames);


//  Sort the inventors from youngest to oldest

const sortyoung_to_old = inventors.sort(function(o1 , o2){
    if(o1.year > o2.year) return 1;
    else return -1;
})



// How many years did all inventors live

var tot = 0;
for(var i = 0;i<inventors.length;i++){
    tot += (inventors[i].passed - inventors[i].year);
}

// sort the inventors by years lived

const sort_by_age = inventors.sort(function(o1 , o2){
    if(o1.passed - o1.year > o2.passed - o2.year) return 1;
    else return -1;
})

// sort the people by their last name

const sort_by_lastname = people.sort(function(o1 , o2){
    const [first1 , last1] = o1.split(', ');
    const [first2 , last2] = o2.split(', ');

    return last1 > last2 ? 1 : -1;
})

console.log(sort_by_lastname)






