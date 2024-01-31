import React,{
    FC,
} from "react";
import PostForm from "../components/PostForm";


const CreatePost:FC = () => {
    return(
        <div
            className=" 
                flex 
                min-h-[80vh] 
                w-full 
                max-w-md 
                items-center 
                justify-center
            "
        >
            <div
                className="
                    w-full 
                    rounded-lg 
                    border 
                    border-zinc-300 
                    px-5 
                    py-10
                "
            >
                <h1
                    className="mb-4 text-center text-xl font-bold"
                >Add new post</h1>
                <PostForm/>
            </div>
        </div>
    );
};

export default CreatePost;