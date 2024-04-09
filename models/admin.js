// using factory method design pattern
const Admin = (email, hashedPassword) => {
    return {
        email: email,
        hashedPassword: hashedPassword,
        role:"Admin",
        since: new Date().toUTCString()
    }
}
module.exports = Admin