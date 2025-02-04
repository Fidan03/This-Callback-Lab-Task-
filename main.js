let fragrance = {
    id: 5,
    brand: "Dior,",
    model: "Homme Intense ",
    season: "All Seasons",
    longevity: 1,
    sillage: 2,
    notes: ['Alma', 'Nanə', 'Limon', 'Zəfəran', 'Vanil', 'Darçın'],
    getFragranceInfo: function () {
        console.log(`${this.id}`)
    },
    updateFragranceInfo: function () {

    }
}

// fragrance.getFragranceInfo();

let fragrance2 = {
    id: 6,
    brand: "Jean Paul Gaultier",
    model: "La Male Elixir,",
    season: "Summer",
    longevity: 2,
    sillage: 3,
    notes: ['Alma', 'Nanə', 'Limon', 'Zəfəran', 'Vanil', 'Darçın'],
}


let fragrance3 = {
    id: 7,
    brand: "By Kilian",
    model: "Angels Share,",
    season: "Winter",
    longevity: 3,
    sillage: 1,
    notes: ['Alma', 'Nanə', 'Limon', 'Zəfəran', 'Vanil', 'Darçın'],
}


let fragrances = [fragrance ,fragrance2,fragrance3]


//Task2
// function updateFragranceInfo (id, prop, value) {
//     let fragrance = fragrances.find(fragrance => fragrance.id === id);
//     fragrance[prop] = value;
//     console.log(fragrance);
// }
// updateFragranceInfo(6,"brand","YSL")
// console.log(fragrance);



//Task3
// function displayInfo(id) {
//     console.log("Loading...");
//     let fragrance = fragrances.find(fragrance => fragrance.id === id);
//     setTimeout(() => {
//         console.log(fragrance);
        
//     }, 3000);
// }

// displayInfo(7);



//Task 4
// function listFragranceNotes(id) {
//     let fragrance = fragrances.find(fragrance => fragrance.id === id);
//     console.log(fragrance.notes);
// }
// listFragranceNotes(6);




//Task 5 
function ffragrance(brand,callback) {
    return callback(brand);
}

function processFragranceName(id, callback) {
    let fragrance = fragrances.find((fragrance) => fragrance.id === id);
    fragrance.brand = callback(fragrance.brand);
    console.log(fragrance.brand);
}

// function nameToUppercase (name) {
//     return name.toUpperCase();
// }

// processFragranceName(6, nameToUppercase);


function capitalizeNameLastLetter (name) {
    let lastLetter = name.split(' ');

    for (let i = 0; i < lastLetter.length; i ++) {
        let letter = lastLetter[i];
        if (letter.length > 0) {
            lastLetter[i] = letter.slice(0 , -1) + letter.slice(-1).toUpperCase();
        }
    }
    return lastLetter.join(' ');
}

processFragranceName(6, capitalizeNameLastLetter);