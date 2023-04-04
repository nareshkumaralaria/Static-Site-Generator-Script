import fetch from 'node-fetch';
import ejs from 'ejs'
import fs from 'fs'

// Define the URL of the Bored API endpoint
const apiUrl = "https://www.boredapi.com/api/activity/";

// Define the number of pages to generate
const numPages = 10;

// Fetches data from the Bored API and returns it as a JSON object.
export const getActivityData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

/*
 * Generates an HTML page using a template and data from the Bored API,
 * and writes the page to disk.
 */
export const generatePage = async () => {
    const data = await getActivityData();
    const template = fs.readFileSync('template.ejs', 'utf-8');
    const html = ejs.render(template, data);
    fs.writeFileSync(`${data.key}.html`, html);
    console.log(`Page generated: ${data.key}.html`);
}

// Call the generatePages function to generate the HTML pages
for (let i = 0; i < numPages; i++) {
    generatePage();
}