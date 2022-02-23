function distanceFromHqInBlocks(num){
    if (num >= 42) {
        return num - 42;
    } else if (num < 42) {
        return 42 - num;
    }
}

function distanceFromHqInFeet(num){
    if (num >= 42) {
        return (num - 42) * 264;
    } else if (num < 42) {
        return (42 - num) * 264;
    }
}

function distanceTravelledInFeet(start, destination){
    if (destination >= start) {
        return (destination - start) * 264;
    } else if (start > destination) {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){
    if (destination >= start) {
         if (((destination - start) * 264) < 400){
             return 0;
         } else if (((destination - start) * 264) >= 400 && ((destination - start) * 264) <= 2000) {
             return (((destination - start) * 264) - 400) * 0.02;
         } else if (((destination - start) * 264) >= 2001 && ((destination - start) * 264) <= 2500) {
             return 25;
         } else if (((destination - start) * 264) >= 2500) {
             return "cannot travel that far";
         }
    } else if (start > destination) {
        if (((start - destination) * 264) < 400){
            return 0;
        } else if (((start - destination) * 264) >= 400 && ((start - destination) * 264) <= 2000) {
            return (((start - destination) * 264) - 400) * 0.02;
        } else if (((start - destination) * 264) >= 2001 && ((start - destination) * 264) <= 2500) {
            return 25;
        } else if (((start - destination) * 264) >= 2500) {
            return "cannot travel that far";
        }
    }
}