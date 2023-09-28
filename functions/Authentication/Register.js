function generateRandomString(username, mail, birthday, phoneNumber) {
    const combinedData = `${username}${mail}${birthday}${phoneNumber}`;

    let randomString = "";

    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * combinedData.length);
        randomString += combinedData.charAt(randomIndex).toUpperCase();
    }

    randomString = randomString.replace(/[.\-_*]/g, "");

    return randomString;
}
