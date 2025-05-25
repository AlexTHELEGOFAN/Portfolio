'use client'; // This is a client component 👈🏽

import '../globals.scss';

import RootLayout from '@/components/layout/rootLayout';
import { useLottie } from 'lottie-react';
import notfound from '@/assets/lottie/error-animation.json';

const options = {
  background: '#000000',
  loop: true,
  autoplay: true,
  animationData: notfound,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function NotFoundCatchAll() {
  const { View: notfound } = useLottie(options);

  return (
    <RootLayout className=' h-screen w-screen'>
      <div className='content section-not-found flex justify-center items-center'>
        {notfound}
      </div>
    </RootLayout>
  );
}

export default NotFoundCatchAll;
