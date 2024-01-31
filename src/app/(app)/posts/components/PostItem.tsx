'use client';

import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import React,{
    FC,
    useState,
} from "react";

const PostItem:FC<Post> = ({
    id,
    title,
    body: content,
    published,
    createdAt,
    updatedAt
}) =>{
    
    const [loading, setLoading] = useState<boolean>(false);
    
    const router = useRouter();

    const handleDelete = async(id:number) => {
        setLoading(true);
        await fetch(`/api/posts?id=`+id, {
            method:'DELETE',
        });
        setLoading(false);
        router.refresh();
    }
    
    return(
        <div
            className="
                flex 
                flex-col 
                col-auto 
                rounded-lg 
                border 
                border-zinc-300 
                p-5
            "
        >
            <h2
                className="text-xs font-medium"
            >ID: {id}</h2>
            <h1 className="text-base font-bold">{title}</h1>
            <p className="flex-1 text-sm tracking-wide">{content}</p>

            <div className="mt-4 inline-flex gap-x-4">
                <button
                    className="text-sm font-bold hover: text-zinc-800"
                    onClick={()=>router.push(`/update/${id}`)}
                >Update</button>
                <button
                    disabled = {loading}
                    className="text-sm font-bold text-red-500 hover:text-red-400"
                    onClick={()=>handleDelete(id)}
                >
                    {loading ? 'Deleting...' : 'Delete'}
                </button>
            </div>

        </div>
    );
}

export default PostItem;