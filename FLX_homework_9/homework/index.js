let data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
];
  
function findTypes(...arrayData){
    let result = [];
    for(let i = 0; i < arrayData.length; i++){
        result.push(typeof(arrayData[i]));
    }
    return result;
}
findTypes(null, 5, "hello");

function executeforEach(inputArray, inputFunction){
    for(let i = 0; i < inputArray.length; i++){
        inputFunction(inputArray[i]);
    }
}
executeforEach([1,2,3], function(el){
 console.log(el); 
});

function mapArray(inputArray, inputFunction){
    let resultMapArray = [];
    executeforEach(inputArray, function(iElement){
        resultMapArray.push(inputFunction(iElement))
    });
    return resultMapArray;
}
mapArray([2,5,8], function(el){
 return el + 3; 
});

function filterArray(inputArray, inputFunction){
    let resultFilterArray = [];
    executeforEach(inputArray, function(iElement){
        if(inputFunction(iElement)){
            resultFilterArray.push(iElement);
        }
    });
    return resultFilterArray;
}
filterArray([2, 5, 8], function(el){ 
 return el > 3;
});

function getAmountOfAdultPeople(data){
    let arrayOfResults = filterArray(data, function(iElement){
        return iElement.age > 18;
    })
    return arrayOfResults.length;
} 
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(data){
    let getGreenAdultBananaLovers = filterArray(data, function(iElement){
        return iElement.age > 18 && iElement.eyeColor === "green" && iElement.favoriteFruit === "banana";
    });
    return mapArray(getGreenAdultBananaLovers, function(iElement){
        return iElement.name;
    });
}
getGreenAdultBananaLovers(data);

function keys(object){
    let arrayOfResults = [];
    for (let key in object) {
        arrayOfResults.push(key);     
    }
    return arrayOfResults;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(object){
    let arrayOfResults = [];
    for (let key in object) {
        arrayOfResults.push(object[key]);     
    }
    return arrayOfResults;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(newDate){
    let arrMonthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let convertDate = 'Date: '+ newDate.getDate() +' of '
        +arrMonthsOfYear[newDate.getMonth()]+', '+ newDate.getFullYear() +'';
    return convertDate;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(newDate){
    let takeYear = newDate.getFullYear();
    return takeYear % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(newDate){
    let takeMonth = newDate.getMonth() + 1;
    return takeMonth % 2 === 0;
}
isEvenMonth(new Date('2019-01-27T01:10:00'))
