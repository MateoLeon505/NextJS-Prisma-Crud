const { NextResponse } = require("next/server")
import { prisma } from "@/libs/prisma"

const GET = async () => {
    const tasks = await prisma.task.findMany()
    console.log(tasks);
    return NextResponse.json("Getting Tasks")
}

const POST = () => {
    return NextResponse.json("Creating Tasks")
}

export {GET, POST}