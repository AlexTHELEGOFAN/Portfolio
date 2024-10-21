import "../../app/globals.scss";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className="">
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
