
        console.log('hello');
       // console.log('hello');
        //alert('yoooo');
    
        // You can ask user their age 

        //prompt('What is your age?');

        // Store the age and show it at the screen

        // var age = prompt('What is your age?');  CANT USE let TO STORE PROMT
        // document.getElementById('age').innerHTML = age;

        function greetings()
        {
        //    var name =  prompt('What is your name?');
           var result = 'Hello' + ' ' + name;
        //    console.log(result);
        }

        greetings();

        //STRINGS

        let fruit = 'banana , orange , apple';
        // console.log(fruit.split('')); Splits the string by letter
        // console.log(fruit.split(',')); output -  ["banana ", " orange ", " apple"] Splits by comma

        
         //Sorting Array of Numbers in Ascending order

         let numbers = [1, 23, 34, 11, 3, 78, 4];
         // console.log(numbers.sort(function(a,b){ return a-b}));


         //Sorting Array of NUmbers in Descending order
         let numbers2 = [1, 83, 34, 11, 563, 78, 43];
         // console.log(numbers2.sort(function(a,b){ return b-a}));

         let emptyArray = new Array()

         for(let num=0; num<10 ; num++)
         {
            emptyArray.push(num);
         }
         // console.log(emptyArray);


         //Objects

         let student = {
            first: 'Aiswarika',
            last: 'Mohapatra',
            age: 19,
            height: 165,
            studentInfo: function(){
               return this.first + '\n' + this.last + '\n' + this.age;
            }
         };
         // console.log(student.first);
         // console.log(student.last);
         // student.first = 'notAiswarika';  //Change Values in objects
         // console.log(student.first);  

         console.log(student.studentInfo());

         //Switch Statement
         //differentiate between weekdays and weekend
         //day 0 ----> Sunday
         //day 6 ----->Saturday
         //day 4 ---> Thursday ----> weekday

         switch(6) {
            case 0 :
               text = 'weekend';
         
            case 5:
               text: 'weekend'

            case 6:
               text: 'weekend'
               
            default:
               text = 'weekday'   

         }

         console.log(text);














