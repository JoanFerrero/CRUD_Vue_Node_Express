import app from './app'
import { startConnection } from "./database";

startConnection();
app.listen(4000)
console.log('Puerto 4000')