  var exp = [];
            var operator;
            var ourExpression;
            var conditionArray = ["+","-","*","/"];
            var result;
            // it clears the result
            function resultClear(){
                  exp=[];
                  res.innerHTML="";
            }

            //whatever we type shows in result div

            function updateBuffer(e){
                  exp.push(e.target.innerHTML);
                  res.innerHTML=exp.join('');
                  ourExpression = res.innerHTML ;
            }     


            function calculateResult(){
                  
                  res.innerHTML="";  
                  console.log(ourExpression + "ourExpression")
                  var stack = ourExpression.split('');
                  exp=[];
                  var operand2=[];
                  var operand1=[];
                  var prev=1;

                  
                  console.log(stack);


                   for(let i =0 ; i < stack.length;i++){

                       if(conditionArray.includes(stack[i])){
                             operator=stack[i]

                             prev=0;

                       }else if(prev){
                              operand1.push(stack[i]);


                       }else{
                              operand2.push(stack[i]);


                       }

                  }

                             




                  //convert array to string and to numbers
                  

                  var s1=operand1.join('')
                  var o1=parseInt(s1,2);

                  var s2=operand2.join('')
                  var o2=parseInt(s2,2);
                
                  // now lets perform calclation and return the result to a variable

                  if(operator=== "+"){
                        result = o1+o2;
                        result= result.toString(2);

                  }else if(operator=== "-"){
                        result = o1-o2;
                        result= result.toString(2);



                  }else if(operator=== "*"){
                        result = o1*o2;
                        result= result.toString(2);



                  }else if(operator=== "/"){
                        result = Math.floor(o1/o2);

                        result= result.toString(2);



                  }

                  // now we append the result to div 

                 

                 
                  res.innerHTML=result;

                  result="";


            }



           

            

            var res = document.getElementById('res');

            var btn0 = document.getElementById('btn0').onclick= updateBuffer;
            var btn1 = document.getElementById('btn1').onclick= updateBuffer;
            var btnSum = document.getElementById('btnSum').onclick= updateBuffer;
            var btnSub = document.getElementById('btnSub').onclick= updateBuffer;
            var btnMul = document.getElementById('btnMul').onclick= updateBuffer;
            var btnDiv = document.getElementById('btnDiv').onclick= updateBuffer;


            var btnClr = document.getElementById('btnClr').onclick=resultClear;
            var btnEql = document.getElementById('btnEql').onclick=calculateResult;


