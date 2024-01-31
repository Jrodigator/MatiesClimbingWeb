// Function to get the current formatted date
const getCurrentFormattedDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    const day = ('0' + currentDate.getDate()).slice(-2); // Adding leading zero if needed
    return `${year}-${month}-${day}`;
}

// Creates the filename for an uploaded POP file
const getFilename = (name, surname) => {
    const currentDate = getCurrentFormattedDate(); // Utilize the getCurrentFormattedDate function here
    return `${currentDate}-${name}-${surname}`;
}

// Exporting both functions
module.exports = {
    getCurrentFormattedDate,
    getFilename
};
