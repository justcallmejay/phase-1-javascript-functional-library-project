function myEach(collection, callback) {
    const thing = Object.assign(Object.values(collection))
    thing.forEach(num => {
        callback(num)
    })
    return collection
}

//myEach({one: 1, two: 2, three: 3}, alert);

function myMap(testArr, callback) {
    const thing = Object.assign(Object.values(testArr))
    const updateTestArr = thing.map(num => {
    return (callback(num))
    })
    return updateTestArr
}

//myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; })

function myReduce(collection, callback, ...acc) {
    let thing = Object.values(collection)
    let total;
    let i;
    if(acc.length > 0) {
        total = acc[0]
        i = 0
    } else {
        total = thing[0]
        i = 1
    }

    for(i; i<thing.length; i++) {
        total = callback(total, thing[i], collection)
    }
    return total
}

//my answer:
// function myReduce(collection, callback) {
//     const thing = Object.assign(Object.values(collection))
//     const stuff = thing.reduce(callback)
//     return stuff
// }

//myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);

function myFind(arr, funct) {
    const thing = Object.assign(Object.values(arr))
    const stuff = thing.find(funct)
    return stuff
}

//myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });

function myFilter(collection, predicate) {
    const obj = Object.assign(Object.values(collection))
    const filter = obj.filter(predicate)
    return filter
}

//myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })

function mySize (collection) {
    const obj = Object.values(collection)
    return obj.length
}

function myFirst (array, n) {
    if (n === undefined) {
        return array[0]
    } else (n !== '')
        return array.slice(0, n)
    
}

function myLast (array, n) {
    if (n === undefined) {
        return array[array.length - 1]
    } else
    return array.slice('-' + n)
}

// const array = [40,100,1,5,25,10]

// array.sort(function(a, b) {return(a - b)})


// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

function myKeys (array) {
    let getKeys = Object.keys(array)
    return getKeys
}

function myValues (array) {
    let getValues = Object.values(array)
    return getValues
}