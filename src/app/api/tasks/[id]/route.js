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
        data: task ? task : 'Task not found'
    })   
}

const PUT = async (request, {params}) => {
    const id = parseInt(params.id)
    const {title, description} = await request.json()
    const updateTask = await prisma.task.update({
        data: {
            title, description
        },
        where: {
            id: id
        }
    })
    return NextResponse.json({
        type: `Updating task ${params.id}`,
        data: updateTask ? updateTask : 'Task not found'
    })   
}

const DELETE = async (request, {params}) => {
    const id = parseInt(params.id)
    const taskRemove = await prisma.task.delete({
        where: {
            id: id
        }
    })
    return NextResponse.json({
        type: `Deleting task ${params.id}`,
        data: taskRemove ? taskRemove : "Task not found"
    })   
}

export {GET, PUT, DELETE}