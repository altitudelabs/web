# Web Developers

#### Time: 1 hour

Hello!

Thanks for your interest in Altitude Labs.

Here's a short exercise for us to get a sense of your level of web coding experience (HTML, CSS & JavaScript) and how you would go about coding in your day-to-day job. We are looking for more than just working code. We are looking for well-written code, good structure and an understanding of how to test your code. You are free to use Google and the internet and encouraged to ask questions if you get stuck or have any questions.

When you're done, submit a pull request to this repository or provide a link to a public repo.

#### Exercise

We've created a few starter files that you should flesh out:

* [index.html](index.html)
* [style.css](css/style.css)
* [script.js](js/script.js)

You will be building an "Awesome Bands" leaderboard (see diagram), which is a list of the top five awesome band names paired with the number of times that those bands have been mentioned on Twitter.

For simplicity's sake, we've stubbed out an API interface and polling functionality within a library (see [lib.js](js/lib.js)). The library provides a `Poller()` class that allows you to create a poller, setting some options and providing a callback function that will be called when the poller returns data. It also has a `.start()` method that will start the poller.

Upon each poll, the API will send an array of objects to your callback function. Each object will contain a band name and its associated count, sorted descending by count.

The leaderboard that you build should satisfy these basic requirements:

* Visually adhere to the provided [PSD](AwesomeBands.psd).
* Every 15 seconds, update the leaderboard to show the latest band names and counts, sorted descending by count.
* **Bonus:** Animate the leaderboard update in some way (fade/dissolve, sliding, etc.).

When you're finished, please send your work to us as a link to a public repo on GitHub.

#### Diagram

[PSD](AwesomeBands.psd)
