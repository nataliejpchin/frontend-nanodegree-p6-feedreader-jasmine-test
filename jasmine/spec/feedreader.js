/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each feed has a name defined and the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var body, 
            menuDropdown,
            hamburgerButton;

        beforeEach(function() {
            this.body = $('body');
            this.menuDropdown = $('.slide-menu');
            this.hamburgerButton = $('.menu-icon-link');
        });


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hidden by default', function() {
            expect(this.body.hasClass('menu-hidden')).toBe(true);
            // Check for the position of the slide menu element to make sure it is truly not on the screen
            // CREDIT: https://discussions.udacity.com/t/testing-the-dom-in-jasmine/8438/4
            expect(this.menuDropdown.offset().left).toBeLessThan(0);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('displays when clicked and does hide when clicked', function() {
            // Trigger click function without actually clicking on it
            // CREDIT: https://stackoverflow.com/questions/773639/how-can-i-simulate-an-anchor-click-via-jquery
            this.hamburgerButton.trigger('click');
            expect(this.body.hasClass('menu-hidden')).not.toBe(true);

            this.hamburgerButton.trigger('click');
            expect(this.body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    // CREDIT: https://discussions.udacity.com/t/initial-entries-problem/40200
    describe('Initial Entries', function() {
        var entry = $('.entry');
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // done callback signals that the async function is done loading the feed
        // Further Explanation on done: https://github.com/jasmine/jasmine/issues/988
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // async function that does not have to wait for all the feed to load to test
        it('there is at least a single entry within the feed container', function(done){
            expect(entry.length).not.toBeLessThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // CREDIT: https://discussions.udacity.com/t/new-feed-selection-question/16274/14
        // CREDIT: https://discussions.udacity.com/t/trouble-with-the-new-feed-test-and-quest-for-an-explanation/43283/4
        var newFeed;

        // load data from new feed
        beforeEach(function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                done();
            });
        });

        // async function that makes sure new feed is not the same as the initial feed
        it('content in new feed actually changes', function(done){
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(newFeed);
                done();
            });
        });
    });
}());
