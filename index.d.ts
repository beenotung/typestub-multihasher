import {Stream} from "stream";

declare function multihasher(algo: string|number): (value: Buffer | Stream) => Promise<string>;

export = multihasher
