import getProducts from '@/app/actions/getProducts';
import { Product } from '@prisma/client';
import Link from 'next/link';
import ProductItem from './components/ProductItem';

const ProductPage = async() => {

    const { products } = await getProducts();
     
    return(
        <div
            className='
                mx-auto max-w-7xl py-20
            '
        >
            <Link
                href={'/products/create'}
                className='
                    bg-zinc-900 
                    rounded-md 
                    text-white 
                    px-3 py-2 
                    hover:bg-zinc-700
                '
            >New Product</Link>
            <div
                className='
                    mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3
                '
            >
                {products?.map((product:Product, index:number) => (
                    <ProductItem
                        key={index} 
                        id={product.id} 
                        title={product.title} 
                        body={product.body} 
                        published={product.published}
                        createdAt={product.createdAt}
                        updatedAt={product.updatedAt}                                                
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;