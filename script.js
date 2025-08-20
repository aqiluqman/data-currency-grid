const currencyData = [
    { "currency": "AUD", "amount": 1100.00 },
    { "currency": "MYR", "amount": 899.00 },
    { "currency": "GBP", "amount": 56000.00 },
    { "currency": "EUR", "amount": 5388.00 }
  ];

//map each currency to its locale, to allow correct amount formatting
const currencyLocaleMap = {
    AUD: 'en-AU', //Australia
    MYR: 'ms-MY', //Malaysia
    GBP: 'en-GB', //UK
    EUR: 'de-DE'  //Germany
};

let currentSort = { column: null, direction: null };

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        //format amount with its respective locale, but without currency unit
        const locale = currencyLocaleMap[row.currency] || 'en-US';
        const formattedAmount = new Intl.NumberFormat(locale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(row.amount);

        tr.innerHTML = `<td class="currency">${row.currency}</td><td class="amount">${formattedAmount}</td>`;
        tbody.appendChild(tr);
    });
}

//this function sorts the data based on the column clicked
function sortData(column, type) {
    let sortedData = [...currencyData];

    //determine the sort direction
    let direction = 'asc';
    if (currentSort.column === column && currentSort.direction === 'asc') {
        direction = 'desc';
    }

    //sort based on column type
    sortedData.sort((a, b) => { //sort() comparison
        let valueA = a[column];
        let valueB = b[column];

        if (type === 'number') { //differentiate num vs string
            valueA = parseFloat(valueA);
            valueB = parseFloat(valueB);
        } else {
            valueA = valueA.toString().toLowerCase();
            valueB = valueB.toString().toLowerCase();
        }

        if (direction === 'asc') {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
           return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
    });

    //update current sort state
    currentSort = { column, direction };

    //update table headers
    updateSortHeaders();

    //render table with updated data
    renderTable(sortedData);
}

//update sort indicators in headers
function updateSortHeaders() {
    const headers = document.querySelectorAll('th[data-column]');

    headers.forEach(header => {
        const column = header.getAttribute('data-column');
        header.classList.remove('sort-asc', 'sort-desc');

        if (currentSort.column === column) {
            header.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    });
}

//init table and event listeners
function init() {
    //render initial unsorted table
    renderTable(currencyData);

    //click listeners to sort column
    document.querySelectorAll('th.sortable').forEach(header => {
        header.addEventListener('click', () => {
            const column = header.getAttribute('data-column');
            const type = header.getAttribute('data-type');
            sortData(column, type);
        });
    });
}

//start app
init();
