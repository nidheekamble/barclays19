CONTENTS OF THIS FILE 
---------------------

 * Introduction
 * Setup
 * Techstack
 * Extension
 * Maintainers

INTRODUCTION
------------

*Stockwatch* is a prototype PWA that aims at profitable user investment by assisting the users in analyzing current stockmarket trends. The functionalities in the PWA include:<br>
  * **Search**<br>Stocks available can be searched for and analyzed<br><br>
  * **Stock Prediction:** The said analysis is done on the basis of data available on the prices (WAP, highest, lowest, opening, etc.) at the corresponding date(s). The extent of range of prediction varies in accordance with the beginning date (of the data availability.<br>The analysis is diaplyed graphically over the given range, with the appropriate suggestion of buying, selling, or holding the stock depending on the current date and its status with regards to the user.<br><br>
  * **News feed:**<br> Includes news about trending stocks and the ones shortlisted <br><br>
  
<img src="https://github.com/nidheekamble/barclays19/blob/master/whatIsPWA.PNG"> <hr>
SETUP
-----

### Initial setup
1. Install all needed dependencies from dependencies.txt
```
pip3 install -r dependencies.txt
```
2. In the pwa/ folder, run the following commands
```
npm install
npm run build
```

### To run

1. run the Flask server
```
python3 run.py
```

2. To run the React dev server,
```
cd pwa/
npm run start
```
### Note:
1. All AJAX requests from React start with route /api
```
e.g: /api/hello
```
2. React application can be accessed on `localhost:8080` (react dev server) or `0.0.0.0:5000` (flask)
3. You need not run the react dev server if you are using flask. Just make sure you *npm run build* to use the latest version of the PWA


TECHSTACK
---------

* `Flask: Python 3.6`, `SQLAlchemy`
* `React: JavaScript` for PWA

EXTENSION
---------

* **DialogFlow: webhook and export to Third Party Assistants:** The current project is configured with Dialogflow and its `Flask` module. The webhook route exists in `api/routes/py`. An agent can be created to identify intends and trigger respective actions, and can be exported to Google Assistant, Facebook messenger, etc. <br><br>

* **Shortlisting:** The extant features can be made to operate on just the marked/shortlisted, instead of *all* records


 MAINTAINERS
 -----------

This project has been developed in the final round of *Barclays India Hackathon 2019*, at Pune, India in the time period of one day.
The contributors to the project and this repository are :

Mr. Ameya Daddikar (`AmeyaDaddikar`)<br>
Ms. Nidhee Kamble (`nidheekamble`)<br>
Mr. Yash Gupte (`yash8998`)<br>


