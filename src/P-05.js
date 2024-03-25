function sortFruits(fruits) {
	return fruits.sort();
} 
//arrow function de sortfruits
const ordenFrutas = (fruits) => fruits.sort

function getElementInTheMiddle(list) {
	return list[list.length / 2];
}
//arrow function de getElementInTheMiddle
const elementoEnmedio = (list) => list[list.length/2]

function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}
//arrow function de adminLogin
const logAdmin = (user) => { if(user == "ADMIN") return true; if(user == "DEV") return true; return false}