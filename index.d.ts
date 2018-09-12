import {Stream} from "stream";
import {codes, names} from "typestub-multihashes";

declare function multihasher(algo: keyof codes | keyof names): (value: Buffer | Stream) => Promise<string>;

export = multihasher
