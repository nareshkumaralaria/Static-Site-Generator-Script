# Static Site Generator Script

This is a Node.js script that generates a set of static web pages using data from an external API and a templating engine.

## Requirements

- Node.js version 14.17 or higher.
- The following Node.js packages:
  - `node-fetch` for fetching data from the Bored API.
  - `ejs` for generating HTML pages using templates.
  - `fs` for writing files to disk.

## Usage

1. Clone or download the repository to your local machine.
2. Open a terminal or command prompt and navigate to the directory containing the script.
3. Install the required packages by running `npm install` in the terminal/command prompt.
4. Run the script by running `node index.js` in the terminal/command prompt.
5. The script will generate 10 unique HTML pages using data from the Bored API.
6. Optionally, run unit tests by running `npm test` in the terminal/command prompt.

## Configuration

- The URL of the Bored API is defined in the `apiUrl` constant at the top of the `index.js` file. You can modify this value to use a different API endpoint.
- The number of pages to generate is defined in the `for` loop in the `generatePage` function. You can modify this value to generate more or fewer pages.
- The EJS template used to generate the HTML pages is defined in the `template.ejs` file. You can modify this file to change the appearance of the generated pages.


## Notes

- The generated HTML pages are stored in the same directory as the script, with filenames based on the `key` property of the API response.
- The `generatePage` function is asynchronous to allow for fetching data from the API, which may take some time. As a result, the script generates pages in a sequential manner, which may also take some time. If you need to generate a large number of pages quickly, you may need to modify the script to use asynchronous operations in a more parallel manner.

## Generated page samples
[https://skillbee-naresh.netlify.app/](https://skillbee-naresh.netlify.app/)

## Authors

- [@nareshkumaralaria](https://github.com/nareshkumaralaria) (Naresh Kumar)
