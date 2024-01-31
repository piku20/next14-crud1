import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
    const posts = await prisma.post.findMany({});
    return NextResponse.json({
        posts:posts
    });
};

const DELETE = async (req:NextRequest) => {
    const url = new URL(req.url).searchParams;
    const id = Number(url.get('id')) || 0;

    const posts = await prisma.post.delete({
        where:{
            id:id,
        },
    });

    if(!posts){
        return NextResponse.json({
            message:'Error',
        },{
            status:500,
        })
    }

    return NextResponse.json({});
};

const POST = async(req:NextRequest) => {
    const {title, content} = await req.json();

    const post = await prisma.post.create({
        data:{
            title,
            content,
        },
    });

    return NextResponse.json({post: post});
}


export {
    GET,
    DELETE,
    POST,
}