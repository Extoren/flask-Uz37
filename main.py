from flask import Flask, request, render_template, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'fbfe54c431b28e24063d27c487c54d1d'  # Replace with your actual secret key, not with mine please

# Simulated database of usernames and passwords
users = {
    "Extoren": "password1",
}

# You know the rest
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        
        if username in users and users[username] == password:
            session['logged_in'] = True
            return redirect(url_for("index"))
        else:
            return "Login failed"
    return render_template("login.html")


# Make all the info .html work
@app.route("/info/<page>")
def info_page(page):
    return render_template("info/" + page)

# Make the login .html work
@app.route("/logout")
def logout():
    session.pop('logged_in', None)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
