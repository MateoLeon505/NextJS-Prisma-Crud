const { NextResponse } = require("next/server")

const GET = () => {
    return NextResponse.json("Getting Tasks")
}

const POST = () => {
    return NextResponse.json("Creating Tasks")
}

export {GET, POST}