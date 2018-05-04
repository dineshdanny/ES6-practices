let calculatePrice =(price,discount,tax)=>{
	let taxablePrice = price - (price * (discount / 100))
	let priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
	return priceWithTax;
}
calculatePrice(1,1,1);