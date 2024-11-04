class B58 {
  BASE58_ALPHABET: string;

  constructor() {
    this.BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  }

  encodeBase58(input: string): string {
    let result: string[] = [];
    let base: bigint = BigInt(this.BASE58_ALPHABET.length);
    let value: bigint = BigInt("0x" + input);

    while (value > BigInt(0)) {
      let remainder: bigint = value % base;
      result.unshift(this.BASE58_ALPHABET[Number(remainder)]);
      value = value / base;
    }

    // Convert leading zeros to '1's
    let leadingZeros: RegExpMatchArray | null = input.match(/^0+/);
    if (leadingZeros) {
      for (let i = 0; i < leadingZeros[0].length; i++) {
        result.unshift(this.BASE58_ALPHABET[0]);
      }
    }

    return result.join("");
  }

  decodeBase58(input: string): string {
    let result: bigint = BigInt(0);
    let base: bigint = BigInt(this.BASE58_ALPHABET.length);
    let inputChars: string[] = input.split("");

    for (let char of inputChars) {
      result = result * base + BigInt(this.BASE58_ALPHABET.indexOf(char));
    }

    // Convert the result to a hexadecimal string
    return result.toString(16);
  }
}

export default B58;
