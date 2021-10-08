window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const template = this.document.getElementById("template");
        console.log(template);
        console.log(window);
        html2pdf().from(template).save();
    })

}