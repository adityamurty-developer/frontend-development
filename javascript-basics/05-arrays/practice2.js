let items = [250, 645, 300, 900, 50];

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    let offer_price = items[i] - offer;
    console.log(`value after offer = ${offer_price}`);
}