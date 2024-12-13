import NavBar from "@/components/NavBar";
import "./globals.css";

import { Montserrat, Poppins, Cormorant_Garamond } from "next/font/google";

const montserrat_init = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "600"],
    variable: "--font-montserrat",
});
const poppins_init = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "600"],
    variable: "--font-poppins",
});
const cg_init = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "600"],
    variable: "--font-cormorant-garamond",
});

export const metadata = {
    title: "Mathys Basson",
    description: "Freelance Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`m-0 p-0 min-h-screen antialiased ${montserrat_init.variable} ${poppins_init.variable} ${cg_init.variable} bg-wheat`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
