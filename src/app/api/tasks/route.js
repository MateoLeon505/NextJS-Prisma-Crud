const { NextResponse } = require("next/server")
import { prisma } from "@/libs/prisma"

const GET = async () => {
    const tasks = await prisma.task.findMany()

    return NextResponse.json({
        type: `Getting All Tasks`,
        data: tasks.length > 0 ? tasks : 'There are no tasks'
    })
}

const POST = async (request) => {
    const {title, description} = await request.json() 
    const newTask = await prisma.task.create({
        data: {
            title, description
        }
    })

    return NextResponse.json({
        type: `Creating Tasks`,
        data: newTask ? newTask : 'Error creating tasks'
    })
}

export {GET, POST}