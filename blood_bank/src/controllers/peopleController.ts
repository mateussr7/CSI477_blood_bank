import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const peopleRouter = Router()


peopleRouter.post("/insert", async (req, res) => {
    const { nome, rua, numero, complemento, documento, cidadeId, tipoId } = req.body


    const people = await prisma.pessoa.create({
        data: {
            nome,
            rua,
            numero, 
            complemento,
            documento,
            cidade: {
                connect: { id: cidadeId}
            },
            tipo_sanquineo: {
                connect: { id: tipoId}
            }
        }
    })

    res.status(200).json({ people })
})

peopleRouter.post("/update", async (req, res) => {
    const { id, nome, rua, numero, complemento, documento, cidadeId, tipoId } = req.body

    const updatedPeople = await prisma.pessoa.update({
        where: { id },
        data: {
            nome,
            rua,
            numero, 
            complemento,
            documento,
            cidade: {
                connect: { id: cidadeId}
            },
            tipo_sanquineo: {
                connect: { id: tipoId}
            }
        }
    })

    res.status(200).json({ updatedPeople })
})

peopleRouter.post("/delete", async (req, res) => {
    const { id } = req.body


    const people = await prisma.pessoa.delete({
        where: { id }
    })

    res.status(200).json({ people })
})

peopleRouter.get("/find-all", async (req, res) => {
    const peoples = await prisma.pessoa.findMany()

    res.status(200).json({ peoples })
})

peopleRouter.post("/find-by-id", async (req, res) => {

    const { id } = req.body

    const people = await prisma.pessoa.findUnique({
        where: { id }
    })

    res.status(200).json({ people })
})

peopleRouter.post("/find-by-name", async (req, res) => {

    const { nome } = req.body

    const people = await prisma.pessoa.findMany({
        where: { nome }
    })

    res.status(200).json({ people })
})


export default peopleRouter