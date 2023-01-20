import { connect } from "mongoose"

export default function loadDB() {
  connect(process.env.MONGO_URI || "mongodb://localhost/test")
    .then(() => console.log("MongoDB Connected!"))
    .catch(() => console.log("MongoDB error on connect!!!"))
}