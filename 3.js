class TableGenerator
{
	constructor(title,data){
		this.title=title;
		this.data=data;
	}
	
	render(){
		let htmlOutput="";
		for(data in this.data){
			htmlOutput+=``;
		}
	}
}

let data = [
    {title: 'apple', price: 2, qty: 30},
    {title: 'banana', price: 1, qty: 30},
    {title: 'chikoo', price: 1, qty: 30}
];
let title = “fruits”
let tableObj=new TableGenerator(title,data);
console.log(tableObj.render();)
