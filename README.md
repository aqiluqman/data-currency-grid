# data-currency-grid
Simple static project to sort currency data grid built with JavaScript.

## Demo
**GitHub Pages**: [View Live Demo](https://aqiluqman.github.io/data-currency-grid/)

## Project Structure

```
data-currency-grid/
├── index.html          #static HTML page that incorporates JavaScript and CSS
├── script.js           #JavaScript functions
├── style.css           #css styling
├── package.json        
└── README.md           #This documentation
```

## Features Included

- **Sortable Columns**: Click column headers to sort data
  - Currency column: Alphabetical sorting (string)
  - Amount column: Numerical sorting (number)
- **Toggle Sort Direction**: Click same column to reverse order
- **Each currency displays their own locality format**:
- **No Dependencies**: Just JavaScript, HTML, and CSS

## 🛠️ Stack Used

- **JavaScript**: Utilize ES6 functions
- **HTML5**: Displays static HTML page
- **CSS**: Custom CSS styling

## Local Development

### Prerequisites
- Web browser
- No Node.js or build tools required

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/aqiluqman/data-currency-grid.git
   cd data-currency-grid
   ```

2. **Open in browser**
   ```bash
   # Double-click index.html

## Usage

1. **View Data**: The grid displays currency codes and amounts
2. **Sort by Currency**: Click *Currency* column header to sort alphabetically
3. **Sort by Amount**: Click *Amount* column header to sort numerically
4. **Reverse Order**: Click the same respective column header again to reverse sort

### Data Structure
Populate currencyData array with object of currency and amount
```javascript
const currencyData = [
    { currency: 'AUD', amount: 1100.00 },
    { currency: 'MYR', amount: 899.00 },
    { currency: 'GBP', amount: 56000.00 },
    { currency: 'EUR', amount: 5388.00 }
];
```
An object mapping each currency to its respective locale to display correct number formatting.
```javascript
const currencyLocaleMap = {
    AUD: 'en-AU', 
    MYR: 'ms-MY', 
    GBP: 'en-GB', 
    EUR: 'de-DE'  
};
```

### Sort Algorithm
Uses JavaScript's _sort()_ with ES6 comparison function
- **String sorting**: Case-insensitive comparison for sorting
- **Number sorting**: Compares numerical value and sort DESC and ASC

_Note: This project is built for submission of Global Blue's Assessment for User Story 2_

Thank you!
