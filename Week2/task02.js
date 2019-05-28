const fs = require('fs');
const format_distance = require('date-fns/formatDistance');
const vnLocale = require('date-fns/locale/vi');

fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    /* Read the products.json file and convert it to JS object*/    
    let objproduct = JSON.parse(data);

    // Print the total number of products to console. 
    console.log('So luong san pham la: ' + objproduct.length + ' san pham.');

    // Convert dateUpdated of each item into real Date
    let date = objproduct.forEach(element => {
        element.dateUpdated = new Date(element.dateUpdated);
    });
    console.log(objproduct);

    //Print the list to the console with following template for each product:
    objproduct.forEach(element => {
        let fromNow = format_distance(element.dateUpdated, new Date(), {locale: vnLocale});
        console.log(`${element.id} - ${element.name} - ${element.price.toLocaleString()} VND - Cập nhật cách đây: ${fromNow}`);
    });
})