'use client';

import React from 'react';
import BentoGrid from '@/components/BentoGrid';
import { headerPhotos } from '@/content/header-photos';

const HeroHeader: React.FC = () => {
	return (
		<div
			className="h-[calc(100svh-56px)] border-t border-cursor-border overflow-hidden"
			style={{
				maskImage: 'linear-gradient(to bottom, black 85%, transparent)',
				WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent)',
			}}
		>
			<BentoGrid photos={headerPhotos} cols={4} rows={4} mobileCols={2} mobileRows={4} />
		</div>
	);
};

export default HeroHeader;
