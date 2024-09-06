document.addEventListener("DOMContentLoaded", () => {
  const quoteElm = document.getElementById("quote");
  const authorElm = document.getElementById("author");
  const svgFrameElm = document.getElementById("svgFrame");
  const button = document.getElementById("button");
  const searchButton = document.getElementById("searchButton");
  const authorInput = document.getElementById("authorInput");

  // Array of colors for the background of the SVG frame
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

  // Function to fetch a random quote or quotes by a specific author
  async function getQuote(author = "") {
    let url = "/api/quote"; // Default API endpoint for random quotes
    
    // If an author is provided, modify the URL for search functionality
    if (author && author.trim() !== "") {
      url = `/api/quote/search?author=${encodeURIComponent(author)}`;
      console.log(`Searching for quotes by author: ${author}`);
    }

    try {
      // Fetching data from the backend
      const response = await fetch(url);

      // Handling non-successful responses
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Display random quote from the search results if available
      if (data.quotes && data.quotes.length > 0) {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        quoteElm.textContent = randomQuote.body;
        authorElm.textContent = `- ${randomQuote.author}`;
      } 
      // Display random quote from the API if no author is searched
      else if (!author && data.quote) {
        quoteElm.textContent = data.quote.body;
        authorElm.textContent = `- ${data.quote.author}`;
      } 
      // If no quotes found for the given author
      else {
        quoteElm.textContent = "No quotes found for the given author.";
        authorElm.textContent = "";
      }

      // Change the SVG frame color randomly
      svgFrameElm.innerHTML = `<rect x="10" y="38" width="514.577" height="195.012" fill="${colors[Math.floor(Math.random() * colors.length)]}"></rect>`;
    } catch (error) {
      quoteElm.textContent = "An error occurred while fetching the quote.";
      authorElm.textContent = "";
      console.error("Error fetching quote:", error);
    }
  }

  // Event listener for the random quote button
  button.addEventListener("click", () => getQuote());

  // Event listener for searching quotes by author
  searchButton.addEventListener("click", () => {
    const author = authorInput.value.trim();
    if (author) {
      getQuote(author);
    } else {
      quoteElm.textContent = "Please enter an author name.";
      authorElm.textContent = "";
    }
  });

  // Initial quote load on page load
  getQuote();
});
