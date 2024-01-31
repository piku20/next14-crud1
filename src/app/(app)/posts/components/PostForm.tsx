'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import React,{
    FC,
    useState,
} from "react";

const PostForm:FC = () => {
    
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const submit = async(e:{preventDefault:()=>void}) => {
        e.preventDefault();
        setLoading(true);

        await fetch(`/api/posts`, {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({title, content}),
        })
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
            console.error("MAAADARCHOOOO");
            setLoading(false);
        })
        .finally(() => {
            setLoading(false);
            router.push('/posts');
            router.refresh();
        });
    };

    
    return(
        <form 
            className="space-y-4"
            onSubmit={submit}
        >
            <div>
                <label
                    htmlFor="title"
                    className="text-sm font-medium"
                >Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    id="title"
                    autoFocus
                    placeholder="The title"
                    className="
                        block 
                        w-full 
                        rounded 
                        border 
                        border-zinc-400 
                        px-2 
                        py-2 
                        text-sm 
                        transition 
                        duration-500 
                        focus:outline-none 
                        focus:ring 
                        focus:ring-zinc-200
                    "
                />
            </div>

            <div>
                <label
                    htmlFor="title"
                    className="text-sm font-medium"
                >Content</label>
                <input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    name="content"
                    id="content"
                    autoFocus
                    placeholder="The content"
                    className="
                        block 
                        w-full 
                        rounded 
                        border 
                        border-zinc-400 
                        px-2 
                        py-2 
                        text-sm 
                        transition 
                        duration-500 
                        focus:outline-none 
                        focus:ring 
                        focus:ring-zinc-200
                    "
                />
            </div>

            <div
                className="
                    flex 
                    items-center 
                    justify-end 
                    gap-x-2
                "
            >
                <button
                    disabled={title==='' ? true : content==='' ? true : loading}
                    className="
                        rounded-lg 
                        bg-zinc-950 
                        text-white 
                        px-5 
                        py-2 
                        text-sm 
                        font-bold 
                        uppercase 
                        tracking-wide 
                        transition 
                        duration-300 
                        hover:bg-zinc-700 
                        focus:ring 
                        focus:ring-zinc-900 
                        focus:ring-offset-2 
                        disabled:bg-zinc-950/50
                    "
                >
                    {loading? 'Saving...' : 'Save'}
                </button>
                <Link
                    href={'/posts'}
                    className="
                        rounded-lg
                        border
                        border-zinc-400
                        bg-transparent 
                        px-5 
                        py-2 
                        text-sm 
                        font-bold 
                        uppercase 
                        tracking-wide
                        text-black 
                        transition 
                        duration-300 
                        hover:bg-zinc-200 
                        focus:ring 
                        focus:ring-zinc-900 
                        focus:ring-offset-2
                    "
                >Back</Link>
            </div>
        </form>
    );
};

export default PostForm;