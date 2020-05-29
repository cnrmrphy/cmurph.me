# crossReference.py
> 24 March 2020

## Overview 
A Python CLI tool that will find the films on your [Letterboxd](https://letterboxd.com) watchlist that are available on specified streaming services.   

It's pretty inevitable that the list of movies that you are definitely going to get around to watching someday expands faster and faster over time. Furthermore, the process of picking a movie to watch on any given night when you don't have one in mind is already arduous enough without having to keep discovering that you don't have access to the right streaming service. I began this project to help make picking a movie for myself as simple as possible - run a script to find all the movies I already know I want to watch that I can start watching in like three clicks. 

## Description
 
I chose Python for this project because of the simplicity of making API requests and scraping websites, both of which are critical to solving this type of problem.  

I used Python requests + BeautifulSoup to scrape Letterboxd watchlists from the link letterboxd.com/{USER}/watchlist. I used requests to get the user's country code from ipinfo.io/country so that I could make a call to the [open-source JustWatch API](https://github.com/dawoudt/JustWatchAPI) to find all the available streaming services based on the current location. I used this list of providers, and the get_close_matches() function from the difflib library with inquirer to have the user type in each service they want to reference, and prompt with a list of close matches if the input didn't exactly match one of the providers. I also wrote a function with inquierer to let the user review their list of providers and add services, remove services, and/or clear all services before proceeding. 

The username, country code, preferred services, and available services are all stored in JSON files. I wrote functions to clear and reconfigure the country and available services with every subsequent run of the script (and any no long available services will not be included in that run). I also added the -r command line argument so that all of the configuration files will be overwritten and the user can start from a fresh install. 

The project was a great exercise for me in that I was able to take an idea for an admittedly minor problem that I wanted to solve, and use my programming skills to build a complete and relatively user-friendly solution to that problem. I found that I kept thinking of new features and adjustments I could make to more fully flesh out the program throughout the course of working on this project, and that helped keep me motivated to keep working through the many challenges and setbacks I experienced. 

### Source code 
Link to the project repo: [github.com/cnrmrphy/crossreference](https://github.com/cnrmrphy/crossreference)

