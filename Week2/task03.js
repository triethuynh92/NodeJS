const fs = require('fs');
const format = require('date-fns/format');
const XLSX = require('xlsx');

fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let objproduct = JSON.parse(data);

    
    objproduct.forEach(element => {
        var updated = format(new Date(element.dateUpdated), 'MM/dd/yyyy');
        element.updated = updated;
    });

    objproduct.forEach(element => {
        delete element.dateUpdated;
    });


// create 'worksheet' object from json
const ws = XLSX.utils.json_to_sheet(objproduct);
 
 
// Optional: config columns width (character length)
ws['!cols'] = [{ width: 20 }, { width: 15 }, { width: 20 }, { width: 20 }, { width: 20 }];
 
 
// create 'workbook' object (which contains multiple sheet)
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Products');
 
 
// convert to Microsoft EXCEL workbook and write to a Buffer object
const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

fs.writeFile('Products.xlsx', buf, err => {
    console.log('Write success!')
}); 

});