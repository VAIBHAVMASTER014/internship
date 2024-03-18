const asyncFunc = async () => {
	const response = await fetch();
   	const data = await response.json();
}

console.log("1");
console.log("2");

asyncFunc().then(data => console.log(data));

console.log("3");
console.log("4");