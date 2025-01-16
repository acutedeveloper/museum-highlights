export const getFormattedDate = (date) => {
    const dateObj = new Date(date);

    const formattedDate = dateObj.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    return formattedDate || '';
}