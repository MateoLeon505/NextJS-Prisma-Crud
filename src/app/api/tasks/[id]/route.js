import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

const GET = async (request, {params}) => {
    const id = parseInt(params.id)
    const task = await prisma.task.findUnique({
        where: {
            id : id
        }
    })
    return NextResponse.json({
        type: `Getting task ${params.id}`,
        data: task
    })   
}

const PUT = async (request, {params}) => {
    return NextResponse.json(`Updating task ${params.id}`)   
}

const DELETE = async (request, {params}) => {
    return NextResponse.json(`Deleting task ${params.id}`)   
}

export {GET, PUT, DELETE}