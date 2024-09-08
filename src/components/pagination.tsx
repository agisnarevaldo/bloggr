import Link from "next/link";
import {Icon} from "@iconify/react";

interface PaginationProps {
    page: number;
    pageCount: number;
    href: string;
}

export default function Pagination({page, pageCount, href}: PaginationProps) {
    return (
        <div className="flex gap-3 pb-3">
            <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
                <Icon icon="akar-icons:chevron-left" className="w-5 h-5" />
            </PaginationLink>
            <span>
                Page {page} of {pageCount}
            </span>
            <PaginationLink href={`${href}?page=${page + 1}`} enabled={page < pageCount}>
                <Icon icon="akar-icons:chevron-right" className="w-5 h-5" />
            </PaginationLink>
        </div>
    )
}

interface paginasiLinkProps {
    children: React.ReactNode;
    href: string;
    enabled: boolean;
}

export function PaginationLink({children, href, enabled}: paginasiLinkProps) {
    if (!enabled) {
        return (
            <span className="px-3 py-1 rounded border text-gray-200  border-gray-300 cursor-not-allowed">
                {children}
            </span>
        )
    }

    return  (
        <Link
            href={href}
            className="px-3 py-1 rounded border text-gray-600 border-gray-300 hover:bg-gray-100"
        >
            {children}
        </Link>
    )
}