// Memory management and garbage collection
let larger = new Array(100000).fill("data");
function processData() {
    console.log(larger.length);
}

processData();
// clears refrence allowing garbage collector to freeing memory
larger = null
