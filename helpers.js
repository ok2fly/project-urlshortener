class StringToNumberMapping {
	constructor() {
		this.hashTable = {};
		this.counter = 1;
	}

	mapStringToNumber(str) {
		if (!this.hashTable[str]) {
			this.hashTable[str] = this.counter++;
		}
		return this.hashTable[str];
	}

	mapNumberToString(num) {
		for (let key in this.hashTable) {
			if (this.hashTable[key] === num) {
				return key;
			}
		}
		return null;
	}
}

// 示例
// console.log(strToNum("hello")); // 输出：1048681
// console.log(numToStr(1048681)); // 输出：hello
// console.log(
// "---ftf: ",
// strToNum("https://e.huawei.com/cn/talent/cert/#/careerCert")
// ); // 输出：hello
// console.log(numToStr(4451)); // 输出：1048681

module.exports = { StringToNumberMapping };
