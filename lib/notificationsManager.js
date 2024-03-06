export const notificationsManager = () => {
	const handleNotification = (data) => {
		const id = data.slice(0, 1);
		const content = data.slice(2);
		switch (id) {
			case "0":
				console.log("MY CATEGORY", content);
				break;
			case "1":
				console.log("MY APPLICATION ID", content);
				break;
			case "2":
				console.log("MY TITLE", content);
				break;
			case "3":
				console.log("MY MESSAGE", content);
				break;
			case "4":
				console.log("MY TIME", content);
				break;
			default:
				break;
		}
	};

	return { handleNotification };
};
