import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const donationsRouter = Router()

donationsRouter.post("/insert", async (req, res) => {
    const { pessoaId, localId, data } = req.body


    const donation = await prisma.doacao.create({
        data: {
            pessoa: {
                connect: { id: pessoaId }
            },
            local: {
                connect: { id: localId }
            },
            data
        }
    })

    res.status(200).json({ donation })
})

donationsRouter.post("/update", async (req, res) => {
    const { id, pessoaId, localId, data } = req.body

    const updatedDonation = await prisma.doacao.update({
        where: { id },
        data: {
            pessoa: {
                connect: { id: pessoaId }
            },
            local: {
                connect: { id: localId }
            },
            data
        }
    })

    res.status(200).json({ updatedDonation })
})

donationsRouter.post("/delete", async (req, res) => {
    const { id } = req.body


    const donation = await prisma.doacao.delete({
        where: { id }
    })

    res.status(200).json({ donation })
})

donationsRouter.get("/find-all", async (req, res) => {
    const donations = await prisma.doacao.findMany()

    res.status(200).json({ donations })
})

donationsRouter.post("/find-by-id", async (req, res) => {

    const { id } = req.body

    const donation = await prisma.doacao.findUnique({
        where: { id }
    })

    res.status(200).json({ donation })
})

export default donationsRouter