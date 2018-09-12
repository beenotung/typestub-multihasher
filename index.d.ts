declare function multihasher(algo: string | number): (value: Buffer | { pipe: Function }) => Promise<string>;

export = multihasher;
