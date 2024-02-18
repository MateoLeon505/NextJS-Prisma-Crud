import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

const GET = async (request, {params}) => {
    try {
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
    catch (error) {
        return NextResponse.json({
            type: `Getting task ${params.id}`,
            error: error.message
        })   
    }
}

const PUT = async (request, {params}) => {
    try {
        const id = parseInt(params.id)
        const data = await request.json()
        const updateTask = await prisma.task.update({
            data: data,
            where: {
                id: id
            }
        })
        return NextResponse.json({
            type: `Updating task ${params.id}`,
            data: updateTask
        }) 
    } 
    catch (error) {
        return NextResponse.json({
            type: `Updating task ${params.id}`,
            error: error.message
        }) 
    }
}

const DELETE = async (request, {params}) => {
    try {
        const id = parseInt(params.id)
        const taskRemove = await prisma.task.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            type: `Deleting task ${params.id}`,
            data: taskRemove 
        })   
    } 
    catch (error) {
        return NextResponse.json({
            type: `Deleting task ${params.id}`,
            error: error.message
        })   
    }
}

export {GET, PUT, DELETE}