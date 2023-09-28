// Code your solution in this file!

// returns a distance in blocks and calculates distances below 42nd street
function distanceFromHqInBlocks(someValue){
    const scuberHq = 42
    const distanceFromHq = Math.abs(someValue - scuberHq)
    return distanceFromHq
}

// returns a distance in feet and calculates distances below 42nd street
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}

// returns the distance travelled in feet and  returns distance when destination is below distance
function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination - start)
    const distanceinFeet = distance * 264
    return distanceinFeet
}


function calculatesFarePrice(start, destination){
    const travelDistance = distanceTravelledInFeet(start, destination)
    const priceForAbove2000 = 25
    // gives customers a free sample
    if(travelDistance <= 400){
        return travelDistance*0
    // charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!    
    } else if(travelDistance > 400 && travelDistance <= 2000){
        return (travelDistance - 400) * 0.02
    // charges 25 dollars for a distance over 2000 feet
    } else if(travelDistance > 2000 && travelDistance <= 2500){
        return priceForAbove2000
    // does not allow rides over 2500 feet
    } else{
        return ('cannot travel that far')
    }
}