'use client'; // This is a client component 👈🏽

import RootLayout from '@/components/layout/rootLayout';
import Lottie from 'lottie-react';
import notfound from '@/assets/lottie/error-animation.json';

function NotFound() {
	return (
		<RootLayout>
			<div className="section-not-found flex justify-self-center">
				<Lottie animationData={notfound} />
			</div>
		</RootLayout>
	);
}

export default NotFound;
