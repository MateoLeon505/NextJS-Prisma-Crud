import { NextResponse } from "next/server"

const GET = async (request, {params}) => {
    return NextResponse.json(`Getting task ${params.id}`)   
}

const PUT = async (request, {params}) => {
    return NextResponse.json(`Updating task ${params.id}`)   
}

const DELETE = async (request, {params}) => {
    return NextResponse.json(`Deleting task ${params.id}`)   
}

export {GET, PUT, DELETE}