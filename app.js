              //chapter 1


                //chapter 1
// Javascript assignment chapter 1 qno 1
//alert("welcome to my web page");

@@ -491,9 +493,642 @@

// Javascript assignment  qno 9

var eng = +prompt('enter your english marks');
var urdu = +prompt('enter your urdu marks');
var math = +prompt('enter your math marks');
var tot = eng + urdu + math;
var percentage = (tot/300*100);
if(percentage >=80 && percentage  )
// var eng = +prompt('enter your english marks');
// var urdu = +prompt('enter your urdu marks');
// var math = +prompt('enter your math marks');
// var tot = eng + urdu + math;
// var percentage = (tot/300)*100;
// document.write("<h2>"+"Marksheet"+"</h2>")
// if(percentage >=80 && percentage < 101){
//   document.write("Total Marks: "+"300"+"<br>"+
//   "Marks Obtained: " + tot + "<br/>"+
//   "Percentage: " + percentage + "%" + "<br>" +
//   "Grade: " + "A+" + "<br>" +
//   "Remarks: " + "Excellent" 
//   )
// } else if(percentage >=70 && percentage < 80){
//   document.write("Total Marks: "+"300"+"<br>"+
//   "Marks Obtained: " + tot + "<br/>"+
//   "Percentage: " + percentage + "%" + "<br>" +
//   "Grade: " + "A" + "<br>" +
//   "Remarks: " + "Good" 
//   )
// } else if(percentage >=60 && percentage < 70){
//   document.write("Total Marks: "+"300"+"<br>"+
//   "Marks Obtained: " + tot + "<br/>"+
//   "Percentage: " + percentage + "%" + "<br>" +
//   "Grade: " + "B" + "<br>" +
//   "Remarks: " + "You need to improve" 
//   )

// }else if(percentage < 60){
//   document.write("Total Marks: "+"300"+"<br>"+
//   "Marks Obtained: " + tot + "<br/>"+
//   "Percentage: " + percentage + "%" + "<br>" +
//   "Grade: " + "Fail" + "<br>" +
//   "Remarks: " + "Sorry" 
//   )
// }

// Javascript assignment  qno 10
// var item1 = prompt("Enter a name of item 1");
// var item2 = prompt("Enter a name of item 2");
// var priceOfItem1 = +prompt("Price of item 1");
// var priceOfItem2 = +prompt("Price of item 2");
// var quantity1 = +prompt("write quantity of item 1");
// var quantity2 = +prompt("write quantity of item 2");
// var charges = +prompt("write a shipping charges");
// var tot = (priceOfItem1*quantity1) + (priceOfItem2*quantity2) + charges;
// document.write(
//   "Price of " + item1 + " is " + priceOfItem1 + "<br>" +
//   "Quantity of " + item1 + " is " + quantity1 + "<br>" +
//   "Price of " + item2 + " is " + priceOfItem2 + "<br>" +
//   "Quantity of " + item2 + " is " + quantity2 +   "<br>" + "<br>" + "<br>" +
//   "Shipping Charges " + charges + "<br>" + "<br>" +
//   "Total cost of your order is " + tot + "PKR" +"<br>"
// )
// var discount = (tot/100)*10

// if(tot > 2000){
//  document.write("Discount Price is "+ (tot-discount)+" PKR");
// }

    // Javascript assignment  qno 11
    // var guess = +prompt("guess a secret number")
    // var secretNum = 7;
    // if(secretNum == guess){
    //   document.write("Bingo! Correct answer")
    // } else if(secretNum == guess+1){
    //   document.write("Close enough to the correct answer")
    // }else{
    //   document.write("it is not a secret number try again");
    // }

        // Javascript assignment  qno 13
      //   var team1 = prompt("enter team1 name")
      //   var team2 = prompt("enter team2 name")
      //   var score1 = +prompt("enter a score of team1");
      //   var score2 = +prompt("enter a score of team2");
      //  if(score1 > score2){
      //   document.write(team1 + " win ")
      //  }else if(score1 < score2){
      //   document.write(team2+" win ")
      //  }else{
      //   document.write("game tie")
      //  }


      // Javascript assignment  qno 16
      // var temp = prompt("enter a temperature");
      // if(temp > 40){
      //   document.write("It is too hot outside")
      // }
      // else if(temp > 30){
      //   document.write("The Weather today is Normal.")
      // }
      // else if(temp > 20){
      //   document.write("Today’s Weather is cool.")
      // }
      // else if(temp > 10){
      //   document.write("OMG! Today’s weather is so Cool.")
      // }

            // Javascript assignment  qno 17
    //         var firstNum = +prompt("enter a number 1")
    //         var secondNum = +prompt("enter a number 2")
    //         var operator = prompt("enter a operator")

    //          if(operator=="+"){
    //             alert(firstNum+ "+" +secondNum + "=" + (firstNum + secondNum))
    //          } else if(operator=="-"){
    //           alert(firstNum+ "-" +secondNum + "=" + (firstNum - secondNum))
    //        } else if(operator=="*"){
    //         alert(firstNum+ "*" +secondNum + "=" + (firstNum * secondNum))
    //      }else if(operator=="/"){
    //       alert(firstNum+ "/" +secondNum + "=" + (firstNum / secondNum))
    //    }else if(operator=="%"){
    //     alert(firstNum+ "%" +secondNum + "=" + (firstNum % secondNum))
    //  }


                          // Javascript assignment  qno 18

    // var inputDay = prompt("enter your day");
    // if(inputDay == 'monday'){
    //   alert("it is a week day")
    // } 
    // else if(inputDay == 'tuesday'){
    //   alert("it is a week day")
    // }
    // else if(inputDay == 'wednesday'){
    //   alert("it is a week day")
    // }
    // else if(inputDay == 'thursday'){
    //   alert("it is a week day")
    // }
    // else if(inputDay == 'friday'){
    //   alert("it is a week day")
    // }else if(inputDay == 'saturday'){
    //   alert("Its weekend")
    // } else if(inputDay == 'sunday'){
    //   alert("Yay! It’s a holiday")
    // }


     // Javascript assignment  qno 19
    //  var userScore = prompt("enter your score");
    //  if(userScore > 50){
    //   document.write("you are passed")
    //  }
    //  else{
    //   document.write('you are fail');
    //  }

               // Javascript assignment  qno 20
              //  var num1 = +prompt('enter your first number');
              //  var num2 = +prompt('enter your second number');
              //  if(num1 > num2){
              //   document.write("the greater number of "+ num1 + " and " + num2 + " is "+ num1);
              //  } else if(num1 < num2){
              //   document.write("the greater number of "+ num1 + " and " + num2 + " is "+ num2);
              //  } else{
              //   document.write("the "+num1+ " and "+num2 + " are equal")
              //  }

                   // Javascript assignment  qno 22

              // var num = +prompt("enter a number");       
              // if(num >=0){
              //   document.write("it is a positive number")
              // }else if(num < 0){
              //   document.write("it is a negative number")
              // } 


                   // Javascript assignment  qno 23
                  //  var num = prompt("enter a number")
                  //  var noun = prompt("enter a noun");
                  //  alert(num + " " + noun)

                   //chapter 12-13

                   // Javascript assignment  qno 3

  // var age = +prompt('enter your age');
  // if(age > 18){
  //   console.log("old enough")
  // }else{
  //   console.log("too young")
  // }

    // Javascript assignment  qno 8
    // var time = +prompt("enter time")
    // if(time >=000 && time <1200){
    //   console.log("good morning");
    // } else if(time >=1200 && time<1700){
    //   console.log("good afternoon")
    // } else if(time >=1700 && time < 2100){
    //   console.log("good evening")
    // } else if(time>=2100 && time <= 2359){
    //   console.log("good night");
    // }

    // Javascript assignment  qno 10
    // var pass = prompt("enter your password");
    // if(pass === ""){
    //   alert("enter a password");
    // } 
    // else if(pass === "furi890"){
    //   alert("corrrect password")
    // } else{
    //   alert("incorrect password")
    // }

    // Javascript assignment  qno 11
//     var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// } else{
//   document.write("you are not fahad")
// }

      // Javascript assignment  qno 12
//       var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  console.log( greeting = "Good day");

// }

// else{
//   console.log(greeting = "Good evening");
//  } 

 // Javascript assignment  qno 15
//  var hour = prompt("enter your hour")
//  if(hour == 6 && hour <=9){
//   document.write("Breakfast is served")
//  } else if(hour == 11 && hour <=13){
//   document.write("Time for lunch")
//  } else if(hour == 17 && hour <=20){
//   document.write("It's dinner time")
//  }else{
//   document.write("Sorry, you'll have to wait, or go get a snack.")
//  }


         //chapter  14-17
         // Javascript assignment  qno 7

        //  var networks = ['Ufone','Telenore','Mobilink','Zong','jazz','warid'];



        // Javascript assignment  qno 8
      //   document.write("Qualification" +"<br>"+"<br>"+"<br>");
      //   var edu = ['SSC','HSC','BCS','BS','BCOM',' MS','M. Phil.',' PhD']
      //   for(i=0; i<edu.length;i++){
      //     document.write(i + ") " + edu[i]+"<br>")
      //  }

       // Javascript assignment  qno 9
      //  document.write("<h1>"+"Top Movies Of 2015"+"</h1>")
      //  var movies = [];
      //  movies.push('avengers:age of ultron','spectere','jurassic world','Inside out')
      //  for(var i = 0;i<movies.length;i++){
      //    document.write(i +') '+movies[i]+"<br>")
      //  }
      //  document.write("<br>"+"<b>"+"The Lenght Of Array is: "+"</b>" +movies.length)

       // Javascript assignment  qno 10
      //  var cars = ['supra','audi','mercades','ferrari'];
      //  document.write(cars+"<br>"+"<br>"+
      //   "First Index Of array is: 0"+"<br>"+
      //  "Car at First Index Of array is "+ cars[0]+"<br>"+
      //  "Last Index Of array is: "+ (cars.length-1) +"<br>"+
      //  "Car at Last Index Of array is: "+ cars[3]
      //  )

      // Javascript assignment  qno 11

      // var students = ['michel','john','tony'];
      // var score = [320,230,480];
      // for(var i = 0;i<students.length;i++){
      //     for(var j = 0;j<score.length;j++){
      //       document.write("Score of "+ students[i]+" "+score[i]+" Percentage "+(score[i]/500)*100 + "%" + "<br>")
      //       break
      //     }
      // }

       // Javascript assignment  qno 12 
      //  var color = ['green','red','yellow','black','blue','pink']
      //  (a)
      //  var userInput = prompt('what color you want in beginning')
      //  color.unshift(userInput);
      //  document.write(color)
      //(b)
      // var userInput = prompt('what color you want in end')
      //  color.push(userInput);
      //  document.write(color)
       //(c)
    //  color.unshift('brown','white')
    //  document.write(color)
       //(d)
      //  color.shift(1)
      // document.write(color)
     //(e)
    //  color.pop(1)
    //  document.write(color);
    //(f)
    // var userInputIndex = +prompt('enter your index no')
    // var userInputColor = prompt('enter your color')
    // color.splice(userInputIndex,0,userInputColor);
    // document.write(color)
    //(g)
  //   var userInputIndex = +prompt('enter your index no')
  //   var HowManyValueDelete = +prompt('How Many Values delete')
  //   color.splice(userInputIndex,HowManyValueDelete)
  //  document.write(color)

         // Javascript assignment  qno 15

    // var cities = ['karachi' ,'lahore' ,'islamabad','quetta','peshawar'];
    // var selectedCities = cities.slice(2,4)
    // document.write("<h2>"+"Cities List"+"</h2>"+
    //  cities +"<br>"+"<br>"+"<br>")

    // document.write("<h2>"+"Selected Cities List"+"</h2>"

    //   +selectedCities)   

                         // chapter 18-20

                   // Javascript assignment  qno 1

    // for(var i = 0;i<5;i++){
    //   document.write("hello world"+"<br>")
    // }

                   // Javascript assignment  qno 2

      //  for(var i = 1;i<=10;i++){
      //   document.write(i + "<br>")
      //  }            

                  // Javascript assignment  qno 3

        // var userInput = +prompt("enter ypur table no");
        // var tableLength = +prompt("enter your table length");

        // for(var i = 1;i<=tableLength;i++){
        //   document.write(userInput + " X "+i+" = "+userInput*i + "<br>")
        // }

                // Javascript assignment  qno 4

        //  var A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
        //  for(var i = 0; i<A.length;i++){
        //   document.write(A[i]+"<br>")
        //  }

          // Javascript assignment  qno 5

          // var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
          // for(var i = 0; i <fruits.length;i++){
          //   document.write(fruits[i]+"<br>")
          // }

          // document.write("<br>"+"<br>")

          // var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
          // for(var i = 0; i <fruits.length;i++){
          //   document.write("Element at index "+i+" is "+fruits[i]+"<br>")
          // }


                 // Javascript assignment  qno 6
          // var noOfItems = +prompt("Enter no of items")



                       // Javascript assignment  qno 7 
          //a
          // document.write("<h2>" + "Counting" +"</h2>")
          // for(var i = 1; i<=15;i++){
          //   document.write(i+",")
          // }
          // //b
          // document.write("<h2>" + "Reverse Counting" +"</h2>")
          // for(var j =10;j>0;j--){
          //   document.write(j+",")
          // }
          // //c
          // document.write("<h2>" + "Even" +"</h2>")
          // for(var k = 0;k<=20;k++){
          //   if(k%2==0){
          //     document.write(k+",")
          //   }
          // }
          // //d
          // document.write("<h2>" + "odd" +"</h2>")
          // for(var l = 0;l<=20;l++){
          //   if(l%2!=0){
          //     document.write(l+",")
          //   }
          // }
          // //e
          // document.write("<h2>" + "Series" +"</h2>")
          // var num = 2;
          // for(var m =1;m<=10;m++){
          //  document.write(num*m+"k"+",")
          // }


              // Javascript assignment  qno 8
            //  var userInput = prompt("enter your items");
            //  var match = false
            //   var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
            //   for(var i = 0; i<items.length;i++){
            //     if(items[i]== userInput){
            //       match = true;
            //       document.write(userInput+" is available at index "+items.indexOf(userInput)+" in our bakery")
            //     }
            //   }

            //   if(match == false){
            //     document.write("it is not available")
            //   } 

                            // Javascript assignment  qno 9

                // var nums = [24, 53, 78, 91, 12]   
                // var min = nums[2];
                // for(var i =0; i<nums.length;i++){
                //   if(nums[i] > min){
                //     document.write(nums[i])
                //   }
                // }    

                // Javascript assignment  qno 10
                // var nums = [24, 53, 78, 91, 12]   
                // var min = nums[0];
                // for(var i =0; i<nums.length;i++){
                //   if(nums[i] < min){
                //     document.write(nums[i])
                //   }
                // }

                // Javascript assignment  qno 11
                // var nums = [24, 53, 78, 91, 12]   
                // var max = nums[2];
                // for(var i =0; i<nums.length;i++){
                //   if(nums[i] > max){
                //     document.write(nums[i]+"<br>")
                //   }

                // }
                // var min = nums[0]
                // for(var i =0; i<nums.length;i++){
                //   if(nums[i] < min){
                //     document.write(nums[i])
                //   }

                // }

                // Javascript assignment  qno 12
                // var num = 5;
                // for(var i = 5;i<=100;i=i+5){
                //   document.write(i+",")
                // }

                // Javascript assignment  qno 13
                // var students = ["Ali", "Sami", "Taha", "Inam"];
                // var scores = [58, 73, 89, 90];
                // for(var i =0;i<students.length;i++){
                //   for(var j = 0;j<scores.length;j++){
                //     document.write(students[i],scores[i]+"<br>")
                //     break;
                //   }
                // }


                //  var scores = [12, 45, 3, 22, 34, 50];
                //  var userInput = +prompt("enter value")
                //  for(var i =0; i<userInput;i++){
                //   document.write(scores[i]+",")
                //  }

                 // Javascript assignment  qno 15
                //  b = [ [1,2,3] , [4,5,6] , [7,8,9] ];
                // for(var i = 0;i<b.length;i++){
                //   for(var j = 0;j<b[i].length;j++){
                //     console.log(b[i][j])
                //   }

                // }

                // Javascript assignment  qno 16
                // var userInput = +prompt("enter your number");
                // var num = 0
                // for(var i = userInput;i<=0;i=i-0.5){
                //   console.log(i)


                // }

                // Javascript assignment  qno 17
                // var match = false
                // for(var i =0;i<=20;i++){
                //   if(i%2==0){
                //     match = true
                //     document.write(i + " even"+"<br>")

                //   } else if(i%2!=0){
                //     document.write(i + " odd"+"<br>")
                //   }
                // }



                        // Javascript assignment  qno 20
                        // for(var i =0;i<=5;i++){
                      //   var str = "";
                      //   for(var j =0;j<=i;j++){
                      //    str = str+"* "
                      //   }
                      //   console.log(str)
                      // }    


                             //  chapter 21-25


                           //  Javascript assignment  qno 1

                        //  var firstName = prompt("enter first name");
                        //  var lastName = prompt("enter last name");       
                        //  var fullName = firstName + " " + lastName;
                        //  alert("welcome " + fullName);

                    //  Javascript assignment  qno 2    
                    // var mob = prompt("enter fav mobile phone");
                    // var model = prompt("enter fav model");
                    // var merge4 = mob + " " + model; 
                    // document.write("My Favourite Phone is "+mob + " " + model + " length of string is: "  +merge4.length) 


                      //  Javascript assignment  qno 3
                      // var country = "Pakistani"
                      // var index =country.indexOf("n")
                      // document.write("String:Pakistani"+"<br>"+"Index of 'n: "+index)


                       //  Javascript assignment  qno 4
                      //   var country = "Hello World"
                      // var index =country.lastIndexOf("l")
                      // document.write("String:Pakistani"+"<br>"+"Index of 'l': "+index)

                       //  Javascript assignment  qno 5
                      //  var country = "Pakistani"
                      //  var index =country.charAt(3)
                      //  document.write("String:Pakistani"+"<br>"+"character at index 3 is: "+index)


                       //  Javascript assignment  qno 7

                      //  var city = "Hyderabad"
                      //  var h = city.replace("Hyder","Islam")
                      //   document.write("city: "+city+"<br>"+"After Replacement:" + h)


                       //  Javascript assignment  qno 8

                      //  var message = "Ali and Sami are best friends. They play cricket and football together.";
                      //  var h = message.replaceAll("and","&")
                      //  document.write("message: "+message+"<br>"+"After Replacement:" + h)


                           //  Javascript assignment  qno 9

                          //   var value = "472";
                          //   document.write("value: "+value+"<br>"+ "Type: " + typeof(value)+"<br>")
                          // var h = Number(value)
                          //   document.write("value: "+ h + "<br>" +"Type: "+typeof(h))



                     //  Javascript assignment  qno 10
                    //  var userInput = prompt("enter word")
                    //  var h = userInput.toUpperCase()
                    //  document.write("user input: "+userInput+"<br>"+"UpperCase: "+h)


                    //  Javascript assignment  qno 11

                  // var userInput = prompt("enter word")
                  // var select = userInput.slice(0,1).toUpperCase()
                  // var com = userInput.slice(1)
                  // document.write("user input: "+userInput+"<br>"+"Title Case: "+select+com)

                            //  Javascript assignment  qno 12

                  // var num = 35.36 ;
                  // document.write(parseInt(num))


                    //  Javascript assignment  qno 13


                  // var  bg = ["cake", "apple pie", "cookie", "chips", "patties"]   
                  // var userInput = prompt("enter words");
                  // var h =  userInput.toLowerCase();
                  // var match = false;
                  // for(var i =0;i<bg.length;i++){
                  //   if(bg[i]== h){
                  //     match = true;
                  //     document.write(h + " available")
                  //   }

                  // }

                  // if(match == false){
                  //   document.write(h + " not available")
                  // }


