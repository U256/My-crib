const str23: string = "hey";
const isTrue: boolean = false;
const intg: number = 42;
const int78: number = 11.3;
const intt3: number = -9;
const numbrArray: number[] = [1, 1, 2, 3, 5, 8, 13];
// ==
const numbrArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

//особый тип Tuple
const contact: [string, number] = ["Alexey", 1943];

//Any
let variableZz: any = 4;
variableZz = [];

function sayMyName(name: string): void {
	console.log(name)
}

sayMyName("works")

//never
function infiniit(message: string): never {
	while (true) {
		
	}
}

//Type (создание собств типов)
type login = string;
const login1: login = "number one";

type ID = string | number;
const id1: ID = 2324;
const id2: ID = "second";

type SomeType = string | null | undefined;

console.log(str23)


/// Interfaces
interface Rect {
	readonly id: string //неизменяемый
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: 'first',
	size: {
		width: 10,
		height: 30
	}
	// color со знаком ? - необязателен
}

rect1.color = 'black';

//привести к типу - as
const rect2 = {} as Rect
//==
const rect3 = <Rect>{}


// Inheritance
interface RectWithArea extends Rect {
	getArea: () => number
}

const rect4: RectWithArea = {
	id: "4322",
	size: {
		width: 8,
		height: 3
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

interface IClock {
	time: Date
	setTime(date: Date): void
}

// class <name> implements <interface>
class Clock implements IClock {
	time: Date = new Date()
	
	setTime(date: Date): void {
		this.time = date;
	}
}


//scriptts.ts