
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
    return name["tvSeries"] == [""];
}
// console.log(isNotInShow(characters[0]))

// or
// const notInShow = (name) => name.tvSeries == [""];
// console.log(notInShow(characters[0]))

// check errybody
function countIsNotInShow(names) {
    names = names.map(isNotInShow);
    return names;
}
console.log(countIsNotInShow(characters));