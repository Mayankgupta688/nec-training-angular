var count = 0;

setTimeout(function One() {
    console.log("One: " + count)
}, 30000)

setTimeout(function Two() {
    console.log("Two: " + count)
}, 20000)

setTimeout(function Three() {
    console.log("Three: " + count)
}, 15000)

for(count = 0; count < 10; count++) {
    console.log("Count: " + count);
}