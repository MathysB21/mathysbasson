import "./globals.css";

export const metadata = {
    title: "Mathys Basson",
    description: "Freelance Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="m-0 p-0 w-screen min-h-screen">{children}</body>
        </html>
    );
}
