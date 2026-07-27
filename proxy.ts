import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const authHeader = request.headers.get('authorization')
    
    if (authHeader !== 'Bearer secret-token') {
        return NextResponse.json({ error: 'Не авторизован' }, { status: 401 })
    }
    return NextResponse.next()
}