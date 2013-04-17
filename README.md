# Coding Exercise for Web Developers

## Introduction

This exercise is intended to help the hiring team at Altitude Labs to gauge your level of front-end coding experience (HTML, CSS & JavaScript).

You should budget about an hour of actual coding time to complete the project. We realize that's a tight constraint, but we're trying to be respectful of your time while still allowing you to produce enough code for us to make a fair assessment of your skills. Try to ensure that the finished product represents your coding abilities, although you're not necessarily expected to fully finish in an hour. We'd much rather review high-quality but incomplete work rather than rushed, but complete work.

We've created a few starter files that you should flesh out:

* [index.html](index.html)
* [style.css](css/style.css)
* [script.js](js/script.js)

and a [PSD](AwesomeBands.psd) to use as a mockup.

## Requirements

You will be building an "Awesome Bands" leaderboard, which is a list of the top five awesome band names paired with the number of times that those bands have been mentioned on Twitter.

For simplicity's sake, we've stubbed out an API interface and polling functionality within a library (see [lib.js](js/lib.js)). The library provides a `Poller()` class that allows you to create a poller, setting some options and providing a callback function that will be called when the poller returns data. It also has a `.start()` method that will start the poller.

Upon each poll, the API will send an array of objects to your callback function. Each object will contain a band name and its associated count, sorted descending by count.

The leaderboard that you build should satisfy these basic requirements:

* Visually adhere to the provided [PSD](AwesomeBands.psd).
* Every 15 seconds, update the leaderboard to show the latest band names and counts, sorted descending by count.
* **Bonus:** Animate the leaderboard update in some way (fade/dissolve, sliding, etc.).

When you're finished, please send your work to us as a link to a public repo on GitHub.

## Questions?

Please use your best judgment to interpret the requirements above. However, if you're stuck with a question(s), feel free to ask us. There are no bad questions (other than, "What does JavaScript mean?").
