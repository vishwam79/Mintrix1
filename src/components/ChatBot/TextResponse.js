

import parse from "html-react-parser";

export const formatResponse = (text) => {
  // Convert plain text into structured HTML
  let html = text
    .replace(/(^|\n)#\s?(.+)/g, '<h1>$2</h1>') // Convert "# Heading" to <h1>
    .replace(/(^|\n)##\s?(.+)/g, '<h2>$2</h2>') // Convert "## Subheading" to <h2>
    .replace(/(^|\n)-\s?(.+)/g, '<li>$2</li>') // Convert "- Item" to <li>
    .replace(/(^|\n)\d+\.\s?(.+)/g, '<li>$2</li>') // Convert "1. Item" to <li>
    .replace(/<\/li>\n<li>/g, '</li><li>') // Ensure proper <li> formatting
    .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>') // Wrap <li> with <ul>
    .replace(/\n/g, '<br>'); // Convert newlines to <br>

  return parse(html); // Parse the HTML string into React components
};
