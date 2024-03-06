import { parserManager } from "./parserManager.js";
import { serialPortManager } from "./serialPortManager.js";

export const espNodeManager = (props) => {
	const init = () => {
		const serialManager = serialPortManager(
			props.serialDescriptor.name,
			props.serialDescriptor.baudRate
		);
		serialManager.findPort().then((ports) => {
			ports.forEach((port) => {
				port.on("open", () => {
					console.log("Port opened");
				});
				const parser = parserManager(port);
				parseSerialPortMessages(parser);
			});
		});
	};

	const parseSerialPortMessages = (parser) => {
		parser.on("data", (data) => {
			props.notificationsHandler(data);
		});
	};
	init();
};
