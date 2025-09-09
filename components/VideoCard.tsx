 'use client'   
import Image from "next/image"
import Link from "next/link"


import { Visibility } from "@/constants";

interface VideoCardProps {
    id: string;
    title: string;
    thumbnail: string;
    userImg: string;
    username: string;
    createdAt: Date;
    views: number;
    visibility: Visibility;
    duration: number | null;
}

const VideoCard = ({
        id,
        title,
        thumbnail,
        createdAt,
        userImg,
        username,
        views,
        visibility,
        duration
}: VideoCardProps ) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
        <Image src={thumbnail} alt={title} width={290} height={160} className="thumbnail"/>
        <article>
            <div>
                <figure>
                    <Image src={userImg || '/assets/images/dummy.jpg'} alt={username} width={34} height={34} className="rounded-full aspect-square"/>
                    <figcaption>
                        <h3>{username}</h3>
                        <p>{visibility}</p>
                    </figcaption>
                </figure>
                <aside>
                    <Image src="/assets/icons/eye.svg" alt="viws" width={16} height={16}/>
                    <span>{views} views</span>
                </aside>
            </div>
            <h2>{title} - {"  "} {createdAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })}</h2>
        </article>
        <button onClick={() => {}} className="copy-btn">
            <Image src="/assets/icons/link.svg" alt="copy link" width={18} height={18}/>
        </button>
        {duration && (
            <span className="duration">
                {Math.ceil(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
            </span>
        )}
    </Link>
  )
}

export default VideoCard