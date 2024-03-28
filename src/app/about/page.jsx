import Image from 'next/image';
import React from 'react';

function AboutPage() {
    return (
        <div>
            <Image src="/about.png" alt="" width={500} height={500} />
        </div>
    );
}

export default AboutPage;
