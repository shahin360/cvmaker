function  shahin(inText) {
    var inText=document.getElementById('textInput').value;
    var result1=inText.split(" ").length;
    var result2= inText.length;
   document.getElementById("word_output").innerHTML="Number Of Total Word is  :"+result1;
   document.getElementById("character_output").innerHTML="Number of Total character is :"+result2;


    
}