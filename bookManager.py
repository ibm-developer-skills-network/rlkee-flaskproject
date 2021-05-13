from flask import Flask, render_template
import json

app = Flask("My Flask Application")
books = []

@app.route("/addBook/<bookname>/<author>")
def addBook(bookname,author):
    books.append({"bookname":bookname,"author":author})
    return "%s by %s appended" %(bookname,author)

@app.route("/getBooks")
def getBooks():
    return json.dumps(books)

@app.route("/getBooks/<author>")
def getBooksForAuthor(author):
    authbooks = []
    for book in books:
        if book['author'] == author:
            authbooks.append(book)
    return json.dumps(authbooks)

@app.route("/")
def homepage():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True) 
    # When no port is specified, starts at default port 5000