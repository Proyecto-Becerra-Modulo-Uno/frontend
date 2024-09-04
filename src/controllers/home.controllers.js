import { config } from "dotenv"
config()
const url = process.env.BACKEND_URL
export const login = (req, res) => {
    res.render("views.login.ejs", {url: url})
}