<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
</head>

<body>
    <script>
        function prom(complete) {
            return new Promise((resolve, reject) => {
                if (complete) {
                    resolve("i am fullfill");
                } else {
                    reject("i am rejected");
                }
            })
        }
        let fullfill = ((value) => {
            console.log(value);
        });
        let reject = ((err) => {
            console.log(err);
        });

        prom(true).then(fullfill).catch(reject);
        //API 
console.log("hello world");
let a = "sikandar";
let abc = "javascript"
console.log(a);
console.log(abc);
{
  //"name:""javascript_package",
  //"version": "1.0.0",
  //"description": "this is my javascript package description",
  //"main": "index.js",
  //"scripts": {
    //"test": "echo \"Error: no test specified\" && exit 1"
  //},
  //author: "",
  //license: "ISC"
}
</script>
</body>

</html>