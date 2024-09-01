function createTable() {
    let table = document.getElementById('myTable');
    table.innerHTML = '';

    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    for (let i = 0; i < rn; i++) {
        let row = document.createElement('tr');
		
        for (let j = 0; j < cn; j++) {
            let cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
