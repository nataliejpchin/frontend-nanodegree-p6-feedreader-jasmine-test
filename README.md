# Project Overview

In this project, I was given a web-based application that reads RSS feeds as part of the last project for Udacity Frontend Web Developer Nanodegree course.

I used [Jasmine](http://jasmine.github.io/) to test the underlying business logic of the application as well as the event handling and DOM manipulation.

* test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
* test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
* test that ensures the menu element is hidden by default
* test that ensures the menu changes visibility when the menu icon is clicked. 
* test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
* test that ensures when a new feed is loaded by the loadFeed function that the content actually changes

## How to run this application?
1. Clone this repository or download zip link
2. Unzip folder and double click on index.html
3. You can search by name or click on the markers on the map to view information about the attraction

**OR** view the project here http://njpchin.github.io/frontend-nanodegree-p6-feedreader-jasmine-test


## Credits
* https://discussions.udacity.com/t/new-feed-selection-question/16274/14
* https://discussions.udacity.com/t/trouble-with-the-new-feed-test-and-quest-for-an-explanation/43283/4
* https://discussions.udacity.com/t/initial-entries-problem/40200
* https://stackoverflow.com/questions/773639/how-can-i-simulate-an-anchor-click-via-jquery
* https://discussions.udacity.com/t/testing-the-dom-in-jasmine/8438/4
* http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229
* http://haopei.github.io/frontend-nanodegree-feedreader/
