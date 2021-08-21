import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';


import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="Skeleton-card">
             <SkeletonTheme color="#9e9c9c" highlightColor="#fff">
            <p>
                <Skeleton className="circle" circle={true} height={50} width={50} />
               
                <Skeleton className="s-title" width={'80%'} />
                <Skeleton count={2} />
            </p>
            </SkeletonTheme>;
        </div>
    )
}

export default SkeletonCard
