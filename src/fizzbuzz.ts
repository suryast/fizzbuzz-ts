export default class FizzBuzz {
    target: number;

    constructor(input: number) {
        this.target = input;
    }

    fizzbuzz(): string {
        return this.fizz() + this.buzz() === "" ?
            this.target.toString() : this.fizz() + this.buzz();
    }

    fizz(): string {
        return this.target % 3 === 0 ? "fizz" : "";
    }

    buzz(): string {
        return this.target % 5 === 0 ? "buzz" : "";
    }
}

