const { NextResponse } = require("next/server")
import { prisma } from "@/libs/prisma"

const GET = async () => {
    try {
        const tasks = await prisma.task.findMany()
        return NextResponse.json(
        {
            type: `Getting All Tasks`,
            data: tasks ? tasks : 'Tasks not found'
        }
        )   
    } 
    catch (error) {
        return NextResponse.json({
            type: `Getting All Tasks`,
            error: error.message
        })   
    }
}

const POST = async (request) => {
    try {
        const data = await request.json() 
        const newTask = await prisma.task.create({
            data: data
        })
    
        return NextResponse.json({
            type: `Creating Tasks`,
            data: newTask ? newTask : 'Error creating tasks'
        })
    } catch (error) {
        return NextResponse.json({
            type: `Creating Tasks`,
            error: error.message
        })
    }
}

export {GET, POST}