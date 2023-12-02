"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './pagination.module.css';

const Pagination = ({
    count
}) => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams);
    const items_per_page = 4;

    const hasPrevious = items_per_page * (parseInt(page) - 1) > 0;
    const hasNext = items_per_page * (parseInt(page) - 1) + items_per_page < count;

    const handleChangePage = (type) => {
        type === "previous" 
        ? params.set("page", parseInt(page) - 1) 
        : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`)
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrevious}
                onClick={() => handleChangePage("previous")}
            >
                Previous
            </button>
            <button
                className={styles.button}
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination