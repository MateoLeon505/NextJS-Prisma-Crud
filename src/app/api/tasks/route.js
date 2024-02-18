const { NextResponse } = require("next/server")

const GET = () => {
    return NextResponse.json("TaskS GET")
}

export {GET}