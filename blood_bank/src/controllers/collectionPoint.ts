import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const collectionPointRouter = Router()

collectionPointRouter.post("/insert", async (req, res) => {
    const { nome, rua, numero, complemento, cidadeId } = req.body


    const collectionPoint = await prisma.local_Coleta.create({
        data: {
            nome,
            rua,
            numero,
            complemento,
            cidade: {
                connect:{ id: cidadeId}
            }
        }
    })

    res.status(200).json({ collectionPoint })
})

collectionPointRouter.post("/update", async (req, res) => {
    const { id, nome, rua, numero, complemento, cidadeId } = req.body

    const updatedCollectionPoint = await prisma.local_Coleta.update({
        where: { id },
        data: {
            nome,
            rua,
            numero,
            complemento,
            cidade: {
                connect:{ id: cidadeId}
            }
        }
    })

    res.status(200).json({ updatedCollectionPoint })
})

collectionPointRouter.post("/delete", async (req, res) => {
    const { id } = req.body


    const collectionPoint = await prisma.local_Coleta.delete({
        where: { id }
    })

    res.status(200).json({ collectionPoint })
})

collectionPointRouter.get("/find-all", async (req, res) => {
    const collectionPoints = await prisma.local_Coleta.findMany()

    res.status(200).json({ collectionPoints })
})

collectionPointRouter.post("/find-by-id", async (req, res) => {

    const { id } = req.body

    const collectionPoint = await prisma.local_Coleta.findUnique({
        where: { id }
    })

    res.status(200).json({ collectionPoint })
})

export default collectionPointRouter