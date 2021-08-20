// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
///
 const batch1= [invalid1, invalid2, invalid3, invalid4, invalid5];

 const arrayw=[1,2,3,4,5,6,7,8];
 const arraw=[4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8];
// Add your functions below:
const validateCred= array =>{
    //get the check element from the original array
   const   checksome=array[array.length-1];
  //  console.log('this is the check element: ' ,checksome)

    //creAte new array from the origal array mainting e original array
    let  reducedArray=array.slice(0,array.length-1);
       
  reducedArray.reverse();//reversing array elements in new array
   // console.log(reducedArray);

    const oddDoubler =(element,idx) =>{
               let inc=idx +1;
            if(inc %2 !=0){
             if(element*2 >9){
                 return (element * 2) -9
             }else return element * 2

            }return element
       
    };
      
     let mapDouble= reducedArray.map(oddDoubler);

        mapDouble.unshift(checksome);

      //  console.log(mapDouble)
        
        let reducer= (a,b) => a + b;//use this a callback in the next line
     
  let sumOfElem=  mapDouble.reduce(reducer) ;//summing elements of the array with reduce
   
       // console.log('sum of the array is: '+sumOfElem);

      // console.log(' original array forever :' +array)

        if(sumOfElem %10===0) { return 'valid' }return 'invalid';
};


//nest function to find invalid cards n print dem out
const findInvalidCards=function(array){
    const invalidBatch=[];
    for(let arr of array){
        //validateCREd using array as argument
        let validity= validateCred(arr) ;
        
        if(validity=='invalid'){
           
             invalidBatch.push(arr);
           //  console.log(' InvalidBatch must be empty array :' +invalidBatch)

        }

    }return invalidBatch;
};

//function to get invalid credit card companies

function idInvalidCardCompanies(arr){
    let ReturnA=[];//List of credit card companies to be returned
    let count=0;
    for(let each of arr){
        let firstD=each[0];
       
       
       // use this to handle single array passed to the function
        if(typeof each =='number'){

           // console.log('You came here or')
        firstD=each;//get the first digit of a credit card
        /* 
        incrementing count will make sure onle the first elem.
         of a single arr. will be checked
          */
         count +=1;

           if(count ==1){
            switch (firstD){//switch the initial digits to get the company name
                case 3:
                    if(ReturnA.indexOf('Amex')==-1){
                        ReturnA.push('Amex');
                    };
                    break;
                 case 4:
                     if(ReturnA.indexOf('Visa')==-1){
                         ReturnA.push('Visa');
                     };
                    break;
                 case 5:
                     if(ReturnA.indexOf('Mastercard')==-1){
                         ReturnA.push('Mastercard');
                     };
                    break;
                 case 6:
                     if(ReturnA.indexOf('Discover')==-1){
                         ReturnA.push('Discover');
                     };
                    break;
                 default :
                    console.log('Company not found for this card: '+each);
                    break;
            }
           }
        //this wil handle batch array passed to the program
        }else {
          //  console.log('Here rather buddy')
            switch (firstD){//switch the initial digits to get the company name
            case 3:
               if(ReturnA.indexOf('Amex')==-1){
                   ReturnA.push('Amex');
               };
               break;
            case 4:
                if(ReturnA.indexOf('Visa')==-1){
                    ReturnA.push('Visa');
                };
               break;
            case 5:
                if(ReturnA.indexOf('Mastercard')==-1){
                    ReturnA.push('Mastercard');
                };
               break;
            case 6:
                if(ReturnA.indexOf('Discover')==-1){
                    ReturnA.push('Discover');
                };
               break;
            default :
               console.log('Company not found for this card: '+each);
               break;
        }
    }

         
    } return ReturnA; 

}

//console.log(validateCred(batch))

console.log(findInvalidCards(arrayw))

//console.log(idInvalidCardCompanies(batch))


