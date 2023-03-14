
// program to generate random strings

// declare all characters


function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// console.log(generateString(5));


function myfunction(){
    // console.log (generateString(5));
    document.querySelector('.password').innerHTML = generateString(10);
 }




