const currencyData = [
    { "currency": "AUD", "amount": 1100.00 },
    { "currency": "MYR", "amount": 899.00 },
    { "currency": "GBP", "amount": 56000.00 },
    { "currency": "EUR", "amount": 5388.00 }
  ];

let currentSort = { column: null, direction: null };


//this function renders the table
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="currency">${row.currency}</td>
            <td class="amount">${row.amount}</td>
        `;
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
    sortedData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];

        if (type === 'number') {
            aVal = parseFloat(aVal);
            bVal = parseFloat(bVal);
        } else {
            aVal = aVal.toString().toLowerCase();
            bVal = bVal.toString().toLowerCase();
        }

        if (direction === 'asc') {
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
            return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
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

    //click listeners for sortable headers
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