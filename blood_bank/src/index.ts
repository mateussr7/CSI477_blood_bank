import express from "express"
import cors from "cors"
import peopleRouter from "./controllers/peopleController"
import bloodTypeRouter from "./controllers/bloodTypeControler"
import collectionPointRouter from "./controllers/collectionPoint"
import donationsRouter from "./controllers/donationsRouter"

const app = express()

app.use(cors())

app.use("/people", peopleRouter)
app.use("/blood-type", bloodTypeRouter)
app.use("/collection-point", collectionPointRouter)
app.use("/donations", donationsRouter)

app.listen(9000, () => {
    console.log("[SERVER] Servidor rodando na porta 9000")
})