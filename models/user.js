// using factory method design pattern
const User = (email, hashedPassword) => {
    return {
        email: email,
        hashedPassword: hashedPassword,
        role:"Member",
        since: new Date().toUTCString()
    }
}
module.exports = User