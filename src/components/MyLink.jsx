"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyLink = ({href, children}) => {

    const pathname = usePathname();
    return (
        <Link href={href} className={`${href === pathname && "border-b-2 border-purple-500 pb-2"}`}>{children}</Link>
    );
};

export default MyLink;