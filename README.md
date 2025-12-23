#!/bin/bash

# Create and write to README.md
cat <<EOF > README.md
# 🌦️ Quick Weather App

A lightweight, responsive web application that provides real-time weather data using the **OpenWeatherMap API**. 

## ✨ Features
* **Global Search:** Get weather updates for any city in the world.
* **Geolocation Support:** One-click weather detection based on your current coordinates.
* **Real-time Data:** Temperature, humidity, and wind speed.

## 🚀 Setup Instructions
1. Clone this repository.
2. Obtain a free API key from [OpenWeatherMap](https://openweathermap.org/).
3. Open \`script.js\` and paste your key into the \`apiKey\` variable.
4. Launch \`index.html\` in any web browser.

## 🛠️ Tech Stack
* HTML5
* CSS3 (Flexbox/Gradients)
* JavaScript (ES6 Fetch API)

## 📜 License
This project is open-source and available under the MIT License.
EOF

echo "README.md has been generated successfully!"
