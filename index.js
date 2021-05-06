// This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive

function findMatching(group, string) {
    const driverFilter = group.filter(function(name) {
        return name.toLowerCase() === string.toLowerCase();
    })
    return driverFilter;
}

//This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(group, match) {
    const legnthOfMatch = match.length;
    const theDriverFilter = group.filter(function(driver) {
        return driver.substring(0,legnthOfMatch) === match
})
    return theDriverFilter;
}

// str.substring(1, 4)


//This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(driverObject, match) {
    const driversName = driverObject.filter(function(driver){
        return driver.name === match
    })
    return driversName;
}