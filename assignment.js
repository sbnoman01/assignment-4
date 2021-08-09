// problem 1

function seerToMon(seer) {
    var mon = seer / 40;
    return mon;
}
//console.log(seerToMon(120));


function totalSales(shirt, pent, shose) {
    var t_shirt = shirt * 100;
    var t_pent = pent * 200;
    var t_shose = shose * 500;

    if (shirt && pent && shose) {
        var total = t_shirt + t_pent + t_shose;
    }

    else if (shirt && shose) {
        var total = t_shirt + t_shose;
    }
    else if (pent && shose) {
        var total = t_pent + t_shose;
    }
    else if (shirt && t_pent) {
        var total = t_shirt + t_pent;
    }
    else {
        var total = t_shirt + t_pent + t_shose;

    }

    //var total = t_shirt + t_pent + t_shose;
    return total;
}

//console.log(totalSales(0, 0,10 ));


// Problem 3
function deliveryCost(item) {

    if (item <= 100) {
        var charge = item * 100;
    }
    else if (item >= 101 && 200 >= item) {
        var discount = item - 100;
        var charge = 100 * 100 + discount * 80;
    }
    else if (item >= 201) {
        var discount = item - 200;
        var charge = 100 * 100 + 100 * 80 + discount * 50;
    }
    return charge;
}


// Problem 4
var perfectFriend = ["noman", "minhaj", "partho"];

var get_name = perfectFriend[0];


if (get_name.length == 5) {
    console.log(get_name);
}

