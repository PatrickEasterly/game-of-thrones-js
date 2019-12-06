
///     How many characters names start with "A"? 
const names = characters.map(e=(x)=> x["name"]);

// make name checker
function startsWithA(name) {
    return name[0] == "A";
}
// check names

function allANames (names) {
    return names.filter(startsWithA);
}
// console.log(allANames(names)); // 186 names

///     How many character names start with "Z"?
function startsWithZ(name) {
    return name[0] == "Z";
}
function allZNames(names) {
    return names.filter(startsWithZ)
}
// console.log(allZNames(names)) // 8 names

///     How many Characters are dead? 

// Dead checker
function isDead(name) {
    return name.died != "";
}
// console.log(deadCheck(names[0]))
function deadCharacters(names) {
    return names.filter(isDead).length;
}
// console.log(deadCharacters(characters))

///     Who has the most titles? 

// title count
function titleCount(name) {
    if(name["titles"][0] != ""){
        return name["titles"].length;
    }
    else return 0;
}
// console.log(characters.map(titleCount))
function mostTitles(names) {
    let longest = "";
    let longestTitles = [];
    for(let title of names) {
        if (title["titles"].length > longestTitles.length) {
            longest = title["name"];
            longestTitles = title["titles"]
        }
    } return longest;
}
// console.log(mostTitles(characters));  //balon greyjoy

///     How many are Valyrian? 

// is Valyrian
function isValyrian(name) {
    return name["culture"] == "Valyrian";
}
// how many Valyrian
function countValyrian(names) {
    names = names.map(isValyrian).filter(e=x=> x == true);
    return names.length;
}
// console.log(countValyrian(characters))

///     What actor plays "Hot Pie"?
function hotPie(names) {
    hotPieActor = names.filter(e=x=> x["name"] == "Hot Pie");
    // filter returns an array. it will be an array of 1 object, so remember to go to index 0
    return hotPieActor[0]["playedBy"];
}
// console.log(hotPie(characters))  // Ben Hawkey

///     How Many Characters are not in the TV Show? 

// if they aren't in the show, "tvSeries" == [""];

function isNotInShow(name) {
    return name.tvSeries[0] == "";
}
// console.log(isNotInShow(characters[0]))

// check errybody
function countIsNotInShow(names) {
    names = names.map(isNotInShow).filter(e=x=> x == true);
    return names.length;
}
// console.log(countIsNotInShow(characters));

///     Produce an array of character objects for any character with the last name "Targaryen"

// has Targaryen
function isTargaryen(name) {
    return name["name"].includes("Targaryen");
}
// isTargaryen(characters[31]) // true

function tarray(names) {
    let tarray = [];
    // for(let character in names) {
    //     if(character[])
    // }
    names = names.filter(isTargaryen);
    // console.log(names.filter(isTargaryen))
    names.map(e=x=>tarray.push(x))
    return tarray;
}
const justTargaryens = tarray(characters);
// console.log(justTargaryens)

///     Characters loyal to each house 

const result = {};

function allegiances(characters) {

    for(let item of characters) {

        // console.log(item.allegiances)
            if(item.allegiances[0] != undefined) {
                const houseName = item.allegiances[0].split("/houses/")[1];
                
                if(result[houseName]) {
                    // if it exists, add one to the count
                    let currentVal = result[houseName];
                    console.log(currentVal);
                    let newVal = currentVal + 1;
                    console.log(`new: ${newVal}`);
                    result[houseName] = newVal;

                } 
                else {
                    // if it doesn't, make it
                    result[houseName] = 1;
                }
            }
        }
    return result;
}

