import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeaderProps {
    logo: string
    headerHeight?: number
    link?: string
}

export const Header = ({ logo, headerHeight, link }: HeaderProps) => (
    <header>
        <div className="logo">
            <Link href={link ? link : '/'}>
                <Image src={logo} alt="logo" width={100} height={70} />
            </Link>
        </div>

        <style jsx>{`
            header {
                opacity: 0.9;
                background-color: #F7F7F7;
                position: sticky;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                margin-bottom: 2rem;
                height: ${headerHeight ? headerHeight + 'px' : '70px'};
            }

            .logo {
                padding-left: 1rem;
                display: flex;
                align-items: center;
            }

            @media (max-width: 768px) {
            }

            @media (max-width: 576px) {
            }
        `}</style>
    </header>
)
