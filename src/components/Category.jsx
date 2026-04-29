import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async() => {
    const res = await fetch('https://conceptual-project-pixgen.vercel.app/category.json');
    const categories = await res.json();
    return (
        <div className='my-6 space-x-3'>
            {
                categories.map(category => <Link key={category.id} href={`?category=${category.name}`}><Button  size='sm' variant='outline'>{category.name}</Button></Link>)
            }
        </div>
    );
};

export default Category;