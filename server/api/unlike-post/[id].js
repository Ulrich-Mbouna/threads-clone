import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export default defineEventHandler(async event => {
    return prisma.likes.delete({
        where: {
            id: Number(event.context.params.id)
        }
    })
})
