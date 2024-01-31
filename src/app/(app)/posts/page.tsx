import getPosts from '@/app/actions/getPosts';
import { Post } from '@prisma/client';
import Link from 'next/link';
import PostItem from './components/PostItem';

const PostPage = async() => {

    const { posts } = await getPosts();
     
    return(
        <div
            className='
                mx-auto max-w-7xl py-20
            '
        >
            <Link
                href={'/posts/create'}
                className='
                    bg-zinc-900 
                    rounded-md 
                    text-white 
                    px-3 py-2 
                    hover:bg-zinc-700
                '
            >New Post</Link>
            <div
                className='
                    mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3
                '
            >
                {posts?.map((post:Post, index:number) => (
                    <PostItem
                        key={index} 
                        id={post.id} 
                        title={post.title} 
                        body={post.body} 
                        published={post.published}
                        createdAt={post.createdAt}
                        updatedAt={post.updatedAt}                                                
                    />
                ))}
            </div>
        </div>
    );
}

export default PostPage;