import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProps {
    id: string
    title: string
    subTitle: string
    author: string
    date: string
    imageSrc: string
    cardWidth?: number
    imgWidth?: number
    imgHeight?: number
    imgQuality?: number
}

export const Card = ({
    id,
    title,
    author,
    date,
    imageSrc,
    cardWidth,
    imgWidth,
    imgHeight,
    imgQuality
}: CardProps) => {
    return (
        <article className="card">
            <div className="img-container">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={imgWidth ? imgWidth : 300}
                    height={imgHeight ? imgHeight : 168}
                    quality={imgQuality ? imgQuality : 50}
                />
            </div>
            <h2>{title}</h2>
            <span>{author}</span>{' '}
            <span>
                <b>.</b> {date}
            </span>
            <Link href={id}>
                <span className="link-wrapper">link</span>
            </Link>
            <style jsx>{`
                .card {
                    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
                    transition: 0.3s;
                    width: ${cardWidth ? cardWidth + 'px' : '300px'};
                    margin: 0 auto;
                    border-radius: 5px;
                    position: relative;
                }

                .card:hover h2 {
                    color: #1e90ff;
                }

                .card:hover .img-container {
                    filter: opacity(0.7);
                }

                .link-wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    color: transparent;
                }

                span {
                    font-size: 0.8rem;
                }

                .author {
                    margin-right: 0.5rem;
                }
            `}</style>
        </article>
    )
}
