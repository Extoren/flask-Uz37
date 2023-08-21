from flask import Flask, request, render_template, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'fbfe54c431b28e24063d27c487c54d1d'  # Replace with your actual secret key

# Simulated database of usernames and passwords
users = {
    "Extoren": "password1",
}

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

@app.route("/logout")
def logout():
    session.pop('logged_in', None)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
