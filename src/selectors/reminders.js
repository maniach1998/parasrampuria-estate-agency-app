// Get reminders
export default (reminders, { text }) => {
    return reminders.filter((reminder) => {
        const textMatch = reminder.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
};