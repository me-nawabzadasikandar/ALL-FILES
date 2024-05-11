<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>class4"javascript"</title>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>loop-practice</title>
        </head>
        <body>
            
            <script>
                let my_name = "My Name Is Zaiuladin";
                for(let i=1; i<=10; i++){
                    document.write(my_name + "</br>");
                }
    </script>
    </body>
    </html>
    <title>loop Table</title>
    <script>
let num = +prompt("Enter your number");
for(let i=1; i<=10;i++){
document.write("<h1>" + num + "x" + i + "=" + num * i +"</br>" + "</h1>");}
</script>
<title>switch case practice</title>
</head>
<body>
    <script>
        //let user_name = prompt("Enter user name");

        //switch(user_name){
            //case "sikandar":
                //document.write("Admin login");
                //break;
                //default:
                //document.write("login failed");
        //}

       let user_name = prompt("Enter your name");

       switch(user_name){
        case "sikandar":
        document.write("Admin Login Success");
        break;
        case "hello":
        document.write("User Login Success");
        break;
        default:
        document.write("Login Failed");
       }
    </script>
     <title>ternary operator practice</title>
    </head>
    <body>
        <script>
            let age = +prompt("Enter Your Age");
            let res = age >=14? "Allowed" : "Not Allowed";
            document.write(res);
        </script>
        
    