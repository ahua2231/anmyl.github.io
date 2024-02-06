// Function to generate a table with data
function generateTable(data) {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    function createHeaderRow() {
        const headerRow = document.createElement('tr');
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        return headerRow;
    }

    thead.appendChild(createHeaderRow());
    table.appendChild(thead);

    // Create table rows and cells
    function createRow(item) {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.innerHTML = item[key];
            row.appendChild(cell);
        }
        return row;
    }

    data.forEach(function(item) {
        tbody.appendChild(createRow(item));
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Sample data
const sampleData = [{
    MIPAY: `<img onclick='showBgImg(this)' class='thum-img' src="../images/1.png"/>
    <img class='thum-img' src="../images/4.png" onclick='showBgImg(this)'/>
    <img class='thum-img' src="../images/3.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/8.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/9.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/10.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/7.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/14.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/15.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/2.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/Testflight-1.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/Testflight-2.png" class="img" onclick='showBgImg(this)'>`,
    VPAY: `<img class='thum-img' src="../images/5.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/13.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/6.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/11.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/12.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/88.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/16.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/17.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/18.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/云闪付.png" class="img" onclick='showBgImg(this)'>
    <img class='thum-img' src="../images/微信.png" class="img" onclick='showBgImg(this)'>`
}];

// Call the function with the sample data
generateTable(sampleData);
