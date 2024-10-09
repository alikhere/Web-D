
function Getpromise() {
    let p = new Promise(function(resolve) {
        resolve("HI ALi")
    });
    return p;
}

async function main() {
    const val = await Getpromise();
    console.log(val);
}


main();