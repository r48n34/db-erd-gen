// https://github.com/RickBr0wn/react-uuid/blob/master/uuid.js
export function uuidGen(len: number = 32) {

    if(len <= 0){
        len = 32
    }

	const hashTable = [
		"a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
	];

	let uuid = [];

	for (let i = 0; i < len; i++) {
		if (i === 8 || i === 13 || i === 18 || i === 23) {
			uuid[i] = "-";
		} 
        else {
			uuid[i] = hashTable[Math.ceil(Math.random() * hashTable.length - 1)];
		}
	}

	return uuid.join("");
}