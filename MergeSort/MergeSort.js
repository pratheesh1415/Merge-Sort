/*** Function to change Unsorted Label Text **/

function changeUnsortedLabelText(){
    
    var number = document.getElementById("number-input").value;
    if(number.length == 0){
        alert("Please Enter Numerical Space Separated Values to Proceed");
    }
    document.getElementById("number-input").value='';
    var inputText = (document.getElementById('input-label').innerHTML + " " +number)
    document.getElementById('input-label').innerHTML= inputText;
}


/*** Sort function ***/
function sort(){
    
    /** Getting Numbers Entered in Input Field **/
    var inputNumbersString = document.getElementById('input-label').innerHTML.split(" ");
    
    /** Filtering Numerical Values from String ***/
    var onlyNumbers = inputNumbersString.filter(value => /^-?\d+\.?\d*$/.test(value));
    
    var changeUnsortedLabelText = document.getElementById('input-label').innerHTML;
    /** Checking whether Numbers are Submitted or not **/
    if(changeUnsortedLabelText.length<=0){
        
        alert("Please Submit before proceeding to Sort");
    }
    /** Checking Numerical Values present or not in Input Text ***/
    if(onlyNumbers.length <=0){
        document.getElementById('input-label').innerHTML = 'Unsorted Numbers:';
        alert("Please Submit Correct Values to Sort");
        return;
    }
    /** Declaring Array to Store Parsed Integers **/
    var array = new Array();
    /** TypeCasting From  String Format Numbers to Integer Type **/
    for(var i=0;i<onlyNumbers.length;i++){
        array[i] = parseInt(onlyNumbers[i]);
    }
    /**  ---------------**/
    let sortedArray = mergeSort(array);
    let sortedText = "<span style='color:red'>Ignoring AlphaNumeric Values</span> <br><br>Sorted Numbers:";
   
    /** Adding Sorted Values to Sorted Text **/
    for(var s=0;s<sortedArray.length;s++){
        sortedText += ( " "+(sortedArray[s]));
    }
    /** Setting Sorted Text **/
    document.getElementById('sorted-label').innerHTML= sortedText;
    
    
}




/** Helper Function for Merge Sort ***/
 function mergeArrays(leftSubArray, rightSubArray) {
         let array = []
         while (leftSubArray.length && rightSubArray.length) {
            if (leftSubArray[0] < rightSubArray[0]) {
               array.push(leftSubArray.shift())
            } else {
               array.push(rightSubArray.shift())
            }
         }
         return [ ...array, ...leftSubArray, ...rightSubArray ]
      }

/** Merge Sort Function **/
function mergeSort(unsortedArray) {
         const middleIndex = unsortedArray.length / 2
         if(unsortedArray.length < 2) {
            return unsortedArray
         }
         const leftSubArray = unsortedArray.splice(0, middleIndex);
         return mergeArrays(mergeSort(leftSubArray),mergeSort(unsortedArray))
      }

/***------------------------***/

