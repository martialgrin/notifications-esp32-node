import { ReadlineParser } from "serialport";

export const parserManager = (port) => {
	return port.pipe(new ReadlineParser({ delimiter: "\n" }));
};
