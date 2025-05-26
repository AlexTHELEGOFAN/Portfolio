export const metadata = {
  title: 'Alexandre Pozzi',
  description: 'Voici mon portfolio !',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Alexandre Pozzi</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
