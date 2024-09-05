import 'dotenv/config';  // Automatically loads your .env file
import Mustache from 'mustache';  // ES module import
import fetch from 'node-fetch';  // Modern fetch syntax
import { promises as fs } from 'fs';  // Use fs.promises to avoid callback-style code

const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
  name: 'Danny',
  date: new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Singapore',
  }),
};

// Fetch weather information
async function setWeatherInformation() {
  try {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=34.05&lon=-118.24&appid=${process.env.OPEN_WEATHER_MAP_KEY}&units=imperial`
      );
      
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.message}`);
    }

    const data = await response.json();

    // Log the full response to inspect the structure
    console.log('API Response:', data);

    // Update DATA based on the new API response structure
    if (data.main && data.main.temp) {
      DATA.temperature = Math.round(data.main.temp);
    } else {
      console.error('Temperature data is not available in the response.');
      DATA.temperature = 'N/A';  // Set to N/A if temp is missing
    }

    if (data.weather && data.weather[0]) {
      DATA.weather = data.weather[0].description;
    } else {
      console.error('Weather data is not available in the response.');
      DATA.weather = 'Unknown';
    }
  } catch (error) {
    console.error('Error fetching weather information:', error);
  }
}

// Generate README using the Mustache template and data
async function generateReadMe() {
  try {
    const template = await fs.readFile(MUSTACHE_MAIN_DIR, 'utf-8');
    const output = Mustache.render(template, DATA);
    await fs.writeFile('README.md', output);
    console.log('README.md has been generated.');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Main action
async function action() {
  await setWeatherInformation();  // Fetch weather data
  await generateReadMe();         // Generate the README.md
}

// Execute the main action
await action();
