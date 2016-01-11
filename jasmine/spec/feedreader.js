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
    /* This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* make sure that the allFeeds variable has been defined and that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
         */
        it('each feed has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
         */
        it('each feed has a name defined and the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* new test suite about the menu */
    describe('The menu', function() {
        var body, 
            menuDropdown,
            hamburgerButton;

        beforeEach(function() {
            body = $('body');
            menuDropdown = $('.slide-menu');
            hamburgerButton = $('.menu-icon-link');
        });


        /* makes sure the menu element is hidden by default. 
         */
        it('hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
            // Check for the position of the slide menu element to make sure it is truly not on the screen
            // CREDIT: https://discussions.udacity.com/t/testing-the-dom-in-jasmine/8438/4
            expect(menuDropdown.offset().left).toBeLessThan(0);
        });

         /* makes sure the menu changes visibility when the menu icon is clicked
          */
        it('displays when clicked and does hide when clicked', function() {
            // Trigger click function without actually clicking on it
            // CREDIT: https://stackoverflow.com/questions/773639/how-can-i-simulate-an-anchor-click-via-jquery
            hamburgerButton.trigger('click');
            expect(body.hasClass('menu-hidden')).not.toBe(true);

            hamburgerButton.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* new test suite about initial entries from the feed */
    // CREDIT: https://discussions.udacity.com/t/initial-entries-problem/40200
    describe('Initial Entries', function() {
        /* makes sure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
         */

        // done callback signals that the async function is done loading the feed
        // Further Explanation on done: https://github.com/jasmine/jasmine/issues/988
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // async function that does not have to wait for all the feed to load to test
        it('there is at least a single entry within the feed container', function(done){
            expect($('.entry').length).not.toBeLessThan(0);
            done();
        });
    });

    /* new test suite about new feeds*/
    describe('New Feed Selection', function() {
        /* makes sure when a new feed is loaded by the loadFeed function that the content actually changes*/

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
