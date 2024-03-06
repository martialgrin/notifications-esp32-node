import { espNodeManager } from "./lib/esp-node-manager/index.js";
import { notificationsManager } from "./lib/notificationsManager.js";

const app = () => {
	const notifManager = notificationsManager();
	const serialDescriptor = {
		name: "usbserial",
		baudRate: 115200,
	};
	const init = () => {
		espNodeManager({ serialDescriptor, notificationsHandler: onDatas });
	};
	const onDatas = (data) => {
		notifManager.handleNotification(data);
	};

	init();
};

app();
