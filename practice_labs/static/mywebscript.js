//This is a javascript code to be used in the HTML page through static rendering

let addBook = ()=>{
    bookname = document.getElementById("bookname").value;
    author = document.getElementById("author").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("updatemessage").innerHTML = xhttp.responseText;
            setTimeout(function(){ 
                document.getElementById("updatemessage").innerHTML = "<br/>"; 
            }, 1000);
            getBook();
        }
    };
    xhttp.open("GET", "addBook/"+bookname+"/"+author, true);
    xhttp.send();
}

let getBook = ()=>{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let books = JSON.parse(xhttp.responseText);
            retstr = "<table class='table table-striped' style='width:100%;'><tr><th>Book</th><th>Author</th></tr>"
            books.forEach(element => {
                retstr+="<tr><td>"+element['bookname']+"</td><td>"+element['author']+"</td></tr>"
            }); 
            retstr+="</table>"

            document.getElementById("listofbooks").innerHTML = retstr;
        }
    };
    xhttp.open("GET", "../getBooks", true);
    xhttp.send();
}
