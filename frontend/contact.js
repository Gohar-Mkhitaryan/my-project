
(async()=>{
    const response = await fetch('http://localhost:8000/contact', {
        method: 'GET',
    })
    const body = await response.json();
    const data = body.data;

   
        // creates a <table> element and a <tbody> element
         const tbl = document.createElement("table");
         const tblBody = document.createElement("tbody");
       
         // creating all cells
         for (const user of data) {
           // creates a table row
           const row = document.createElement("tr");
       
           for (const key in user) {
             // Create a <td> element and a text node, make the text
             // node the contents of the <td>, and put the <td> at
             // the end of the table row
             const cell = document.createElement("td");
             const cellText = document.createTextNode(user[key]);
             cell.appendChild(cellText);
             row.appendChild(cell);
           }
       
           // add the row to the end of the table body
           tblBody.appendChild(row);
         }
       
         // put the <tbody> in the <table>
         tbl.appendChild(tblBody);
         // appends <table> into <body>
         document.body.appendChild(tbl);
         // sets the border attribute of tbl to '2'
         tbl.setAttribute("border", "2");
       
})();

// const userTable = document.getElementById('users-container');