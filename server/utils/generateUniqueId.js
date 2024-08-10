function generateUniqueId(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
    for (let i = 0; i < length; i++) {
        uniqueId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return uniqueId;
}

module.exports = generateUniqueId;