function myDisplayer(some) {
        //Document.getElementById("demo").innerHTML = some;
        console.log(some)
      }

      
      function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
      }
      
      myCalculator(105, 5, myDisplayer);