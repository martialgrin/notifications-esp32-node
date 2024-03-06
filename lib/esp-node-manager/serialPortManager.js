import { SerialPort } from "serialport";

export const serialPortManager = (portName, baudRate) => {
	const init = () => {
		return new Promise((resolve, reject) => {
			SerialPort.list().then((ports) => {
				const portsArray = selectUsbSerialPort(ports);
				if (portsArray.length == 0) {
					console.log("No port found, Are you sure the device is connected?");
				} else if (portsArray.length == 1) {
					console.log("Port found, opening port...");
					resolve(portsArray);
				} else {
					console.log(`${portsArray.length} ports found`);
					resolve(portsArray);
				}
			});
		});
	};

	const selectUsbSerialPort = (ports) => {
		const selectedPortsArray = [];
		ports.forEach((port) => {
			if (port.path.includes(portName)) {
				selectedPortsArray.push(openPort(port));
			}
		});
		return selectedPortsArray;
	};

	const openPort = (port) => {
		const serialPort = new SerialPort({
			path: port.path,
			baudRate: baudRate,
		});
		return serialPort;
	};

	return { findPort: init };
};
