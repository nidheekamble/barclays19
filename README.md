CONTENTS OF THIS FILE 
---------------------

 * Introduction
 * Setup
 * Techstack
 * Maintainers

INTRODUCTION
------------

This is a prototype PWA that aims at profitable user investment by assisting the users in analyzing current stockmarket trends. The functionalities in the PWA include:<br>
  * **Search and shortlist:**<br>Stocks available can be searched for and shortlisted. Shortlisted stocks can be analyzed and compared further <br><br>
  * **Stock Prediction: Sentiment Analysis:**<br><br>
  * **Live news feed:**<br> Includes news about trending stocks and the ones shortlisted <br><br>
  * **Assistance and platform extension: Chatbot (DialogFlow):**<br> Processing natural input by the user and displaying results in accordance with aforementioned features. The chatbot used can also be exported to Google Assistant, Facebook Messenger, and other bot services to avail on other platforms the functionalities provided by PWA.<br><br>
  
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

* `Flask: Python 3.6, SQLAlchemy`
* `DialogFlow` (uses `Flask Webhook`): prototype functional in Google Assistant and PWA
* `React`

 MAINTAINERS
 -----------

This project has been developed in the final round of *Barclays India Hackathon 2019*, at Pune, India in the time period of one day.
The contributors to the project and this repository are :

Mr. Ameya Daddikar (`AmeyaDaddikar`)<br>
Ms. Nidhee Kamble (`nidheekamble`)<br>
Mr. Yash Gupte (`yash8998`)<br>


