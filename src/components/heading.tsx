import React from "react";

export default function Heading({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <h1 className="text-2xl font-bold pb-3 font-roboto">{children}</h1>
    )
}