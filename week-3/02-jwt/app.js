// when u know that some code might generate error than it's good practice to write it inside try-catch block
try {
    let a = [1, 2];
    console.log(a.length);
    console.log("success");
} catch(e) {
    console.log(e);
    console.log("failed");
}

console.log("outside");