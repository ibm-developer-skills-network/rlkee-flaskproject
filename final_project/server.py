import machinetranslation
from flask import Flask, render_template
import json

app = Flask("Web Translator")

@app.route("/englishToSpanish")
def englishToSpanish():
    # Write your code here
    return "<Translated text>"

@app.route("/spanishToEnglish")
def englishToSpanish():
    # Write your code here
    return "<Translated text>"

@app.route("/")
def renderIndexPage():
    # Write the code to render template

if __name__=="__main__":
    app.run(debug=True) 


