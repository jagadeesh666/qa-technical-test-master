If you have Docker installed, then run the following in the root of the technical test folder:

cd  qa-technical-test-master
 
docker build -t qa_app:v1 .
docker run -p 5000:5000 -t qa_app:v1

# verify the below url in the browser 
http://localhost:5000/v1/ui/

# verify that container is running
docker ps  

#Execute cypress test framework and verify result at command prompt
cd sensynehealthqa
npx run cypress

#Execute Cypress in UI mode
npx cypress open
#cypress window will open click on sesnsenetest and verity that scenarios are executed in the chrome browser
click on sensetest.js
