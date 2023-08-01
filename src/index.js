import app from './app.js'
import { connectDB } from "./db.js";

connectDB()

app.listen(4000)// para que escuche en el puerto 3000
console.log('Server on port', 4000);