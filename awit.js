async function test() {
    await asyncFunc(1,3000);
    await asyncFunc(2,1000);
    await asyncFunc(3,5000);
}

function asyncFunc(num, sec) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            console.log(num);
            resolve('success')
        }, sec);   
    });
}

test();