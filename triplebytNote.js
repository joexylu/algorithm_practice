//caching faster why?

//which evaluation strategy for passing arguments to functions involves copying?

// You're writing a music editing app. Once a composition is done, the app encodes it (asynchronously) into a speciﬁed audio format (.mp3 or .ogg). When the encoding is complete, you'd like to update the UI in several places in the app. Which of the following approaches to this problem makes the most sense?

// Select the correct answer:

// A. We can simply have the encoding system take a list of UI elements as parameters. When the encoding is done, it can tell the UI elements to update themselves.

// B. A spin lock is a good way to do this. The UI code can enter a spin lock, continually checking if the encoding is done. When it is, it can update the UI and exit the lock. As long as the spin lock is not on the main thread, this will work well.

// C. This is a perfect place for a factory method. The encoder will be the factory. When it is done with its fabrication (encoding the audio). the assembly line will take it to the UI elements, which can update the UI. before passing the composition further along the chain.

// D. The important thing here is that we separate the UI update from the actual encoding logic. The encoding system should not know about UI. A good way to do this is a broadcast event. The encoding system can broadcast an event when a song is encoded. The UI code can listen for this event. and update the UI when it sees it.



//which is a commonly claimed benefit of using statically typed language in contrast to a dynamically typed one


//what type of testing would best measure which version of a landing page result in more sign ups


//what is a common use case for generics in a programming language

//what is defining character of a weak reference

//reading data, ordering in increasing latency
// l1 cache, l2, main memory, ssd, hdd
