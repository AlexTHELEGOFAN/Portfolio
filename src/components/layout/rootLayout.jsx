'use client'; // This is a client component 👈🏽

import "../../app/globals.scss";

export default function RootLayout({children}) {
    return (
        <html>
        <body lang="en">
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
