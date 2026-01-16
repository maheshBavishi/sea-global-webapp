'use client'
import React from 'react'
import styles from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Logo = '/assets/logo/logo.svg';
const ShareIcon = '/assets/icons/share.svg';
export default function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className='container-md'>
                <div className={styles.headerAlignment}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src={Logo} alt='Logo' />
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <a aria-label='Markets'>Markets</a>
                        <Link className={pathname === "/accounts" ? styles.active : ""} href="/accounts" aria-label='Accounts'>Accounts</Link>
                        <a aria-label='Platforms'>Platforms</a>
                        <a aria-label='Blogs'>Blogs</a>
                        <a aria-label='Company'>Company</a>
                        <button>
                            <img src={ShareIcon} alt='ShareIcon' />
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
