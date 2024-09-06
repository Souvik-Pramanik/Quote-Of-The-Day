document.addEventListener("DOMContentLoaded", () => {
  const quoteElm = document.getElementById("quote");
  const authorElm = document.getElementById("author");
  const svgFrameElm = document.getElementById("svgFrame");
  const button = document.getElementById("button");
  const searchButton = document.getElementById("searchButton");
  const authorInput = document.getElementById("authorInput");
  const installButton = document.getElementById("install-button");
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Show the install button
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
      // Hide the install button
      installButton.style.display = 'none';
      // Show the install prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    });
  });
  
  const colors = [
    "#eeb76b",
    "#FFC720",
    "#a4ebf3",
    "#c6ebc9",
    "#fbe0c4",
    "#9ecca4",
    "#b4aee8",
    "#f2b4b4",
    "#ffab73",
    "#b8b5ff",
  ];

  async function getQuote(author = "") {
    let url = "/api/quote"; // Default URL for random quote
    if (author && author.trim() !== "") {
      url = `/api/quote/search?author=${encodeURIComponent(author)}`;
      console.log(`Searching for quotes by author: ${author}`);
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (author && data.quotes && data.quotes.length > 0) {
        const matchingQuotes = data.quotes.filter(q => q.author.toLowerCase().includes(author.toLowerCase()));
        if (matchingQuotes.length > 0) {
          const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
          quoteElm.textContent = randomQuote.body;
          authorElm.textContent = `- ${randomQuote.author}`;
        } else {
          quoteElm.textContent = "No quotes found for the given author.";
          authorElm.textContent = "";
        }
      } else if (data.quote) {
        quoteElm.textContent = data.quote.body;
        authorElm.textContent = `- ${data.quote.author}`;
      } else {
        quoteElm.textContent = "No quotes found.";
        authorElm.textContent = "";
      }

      svgFrameElm.innerHTML = `<rect x="10" y="38" width="514.577" height="195.012" fill="${colors[Math.floor(Math.random() * colors.length)]}"></rect>`;
    } catch (error) {
      quoteElm.textContent = "An error occurred while fetching the quote.";
      authorElm.textContent = "";
      console.error("Error fetching quote:", error);
    }
  }

  button.addEventListener("click", () => getQuote());
  searchButton.addEventListener("click", () => {
    const author = authorInput.value.trim();
    if (author) {
      getQuote(author);
    } else {
      quoteElm.textContent = "Please enter an author name.";
      authorElm.textContent = "";
    }
  });

  getQuote(); // Load a random quote on page load
});
