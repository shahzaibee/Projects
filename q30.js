//an example code in JavaScript that meets your requirements:
const usernames = ['admin', 'Eric', 'John', 'Janny', 'Marry'];
for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
export {};
