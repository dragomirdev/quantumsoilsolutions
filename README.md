
# Quantum Soil Solution

Quantum Soil Solution is a Quantum Artificial Intelligence solution that is designed to :

* Predict Soil Organic Matter (SOM) using visible and near-infrared spectroscopy.

  SOM is a key indicator of soil fertility and its quality which will help in decision making process for scientific fertilisation of agricultural land.

* Provide satellite image analysis to predict crop conditions and yields.  T
   
  This will help the agriculural sector to increase productivity and reduce overall costs of food production.

# Why

Why is this project important?

Every second, one acre of soil becomes desert - UNCCD

Average Organic Content in the Soil is:

Northern Europe - 1.48%

Southern Europe - 1.2%

Africa          - 0.3%

India           - 0.68%

USA             - 1.25%

We need minimum 3% of organic content in Soil in order to allow it to produce sustainable food in the future.

The project will allow faster processing of SOM data and thus identify areas of land that need fertilisation earlier giving farmers an opportunity to produce food in a more sustainable way and maintain profitable income for long periods of time.

This will also benefit governments to keep investing in agricultural land with sustainable future growth.

# Solution Architecture

![Alt text](src/img/QuantumSoilSolutions.png?raw=true "Title")

The implementation uses Google Cloud technology stack.

The Solution Architecture is designed into 5 different distinct layers i.e.:

## Security

The Security Layer is implemented by using the AuthO.com services in conjuntion with Google Security.

Please go to https://auth0.com/ and follow basic instructions to setup the account.  The Free account allows many users to join which should be sufficient to run this projects.

When you start the service on your local server, it will run the service on port 3000 by default.

If there is a port clash for any reason, you will be given an option to run it on port 3001.

## Integration

The Integration Layer is implemented by connecting to Satellite Image data sources directly or indirectly.  

Also, the Soil images are stored in a temporary storage location before they are sent to the Data Layer.

## Data

The Data Layer is made of 3 main components i.e. :

BigTable - NoSQL database to process billions of satellite and soil images.

BigQuery - SQL database to process millions of pre-processed images.

DataProc Spark - Data Processing framework that is the main data processing engine for the entire solution.

## Business

The Business Layer is made of 3 main components i.e. :

AI Engine with Vertex - Most of Artificial Intelligence processing will be done by using Google Vertex engine.

Google Quantum - Quantum AI Hybrid processing will be executed with the latest Google Quantum engine which will provide faster execution. 

Google TPU4 - In combination TPU4 will be used to provide additional computational speed for complex AI processing which will be in the range of 1.1 Exaflops.


## Presentation

The solution will provide both Web and Mobile applications for the end users.

The web application will be based on the React web framework whereas Mobile will be implemented with Android and iOS.

# Installation

## Presentation Layer

The presentation layer is implemented with 

### ReactJS

### HTML5

### CSS3

After git clone, please go to [cloned directory]/src/web

**Install NodeJS**

Go to https://nodejs.org/en/download/ and download/install the appropriate installer for your environment

**Install NPM**

*npm install*

**To start the web app**

Go to directory quantumsoilsolutions/presentation/web

To start the web application execute:

*npm start*

After the start you should see

![Alt text](src/img/wheatfieldtext.png?raw=true "Title")

## Security Layer

The security layer is implemented with Auth0 and Google Security framework.

After git clone, please go to [cloned directory]/src/security

* Go to auth0.com and register an account.

* Change the .env file with values from Auth0 account, Applications--Settings.

* In Auth0, in Applications-->Settings, set the Allowed Callback URLs to http://localhost:4000/callback

* The 4000 port can be changed in server.py (last line of code).
* From the command line, start the security auth0 client with **python3 server.py**

After the start you should see

![Alt text](src/img/auth0main.png?raw=true "Title")

After successful login you should see a **Satellite Image of London and the level of Terrestrial Chlorophyl**

![Alt text](src/img/SatelliteScan.png?raw=true "Title")

# Social Media

Twitter: @cpsavesoil @SadhguruJV

Facebook: @consciousplanetmovement @Sadhguru

Instagram & YouTube: @ConsciousPlanet @Sadhguru


<a href="https://www.consciousplanet.org/" target="_blank">
<img src="https://www.datocms-assets.com/60396/1648286746-english.png"/>
</a>
