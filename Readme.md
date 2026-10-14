# Unit Converter

A simple web app for converting values between metric and imperial units. It lets users enter a number and instantly see converted values for length, volume, and mass.

## Project Overview

This project was built with HTML, CSS, and JavaScript to provide a clean and responsive unit conversion experience. It is ideal for beginners learning DOM manipulation, form inputs, and JavaScript calculations.

## Features

- Convert between:
  - Length: meters and feet
  - Volume: litres and gallons
  - Mass: kilograms and pounds
- Instant display of results after entering a value
- Beginner-friendly UI with clear section headings
- Responsive card-style layout for easy reading

## Included Conversions

- 1 metre = 3.28084 feet
- 1 foot = 0.3048 metres
- 1 litre = 0.26417 gallons
- 1 gallon = 3.7854 litres
- 1 kilogram = 2.204623 pounds
- 1 pound = 0.4535924 kilograms

## Project Structure

```text
Unit Converter/
├── index.html
├── index.css
├── index.js
└── Readme.md
```

## How to Run

1. Open the project folder.
2. Launch `index.html` in your browser.
3. Enter a value in the input field.
4. Click the "Convert" button to view the conversions.

You can also use a simple local web server if you prefer:

```bash
python -m http.server
```

Then open `http://localhost:8000` in your browser.

## How It Works

- The app reads the numeric value entered by the user.
- JavaScript multiplies the value by the appropriate conversion factors.
- The results are displayed in the length, volume, and mass sections.
- The interface updates in a simple and interactive way using JavaScript event listeners.

## Technologies Used

- HTML
- CSS
- JavaScript

## Example

If you enter `10`:

- Length: `10 metres = 32.808 feet | 10 feet = 3.048 metres`
- Volume: `10 litres = 2.642 gallons | 10 gallons = 37.854 litres`
- Mass: `10 kilos = 22.046 pounds | 10 pounds = 4.536 kilos`

## Learning Goals

This project helps practice:

- JavaScript variables and constants
- DOM selection and manipulation
- Event listeners
- Basic math conversions
- Responsive design with CSS

## License

This project is for educational purposes and is not currently tied to a formal license.
