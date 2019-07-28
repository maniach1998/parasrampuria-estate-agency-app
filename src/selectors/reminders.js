// Get reminders
export default (reminders, { text }) => {
    return reminders.filter((reminder) => {
        const textMatch = reminder.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        return a.createdAt > b.createdAt ? 1 : -1;
    }).sort((a, b) => {
        return a.seen > b.seen ? 1 : -1;
    });
};