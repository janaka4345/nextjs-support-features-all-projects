import { ReactNode } from "react";

export default function layout({ children, articles, users }: { children: ReactNode, articles: ReactNode, users: ReactNode }) {
    return (
        <>
            <div>layout</div>
            <section className="grid grid-cols-2 h-[80svh]">
                {children}
                {articles}
                {users}
            </section>

        </>
    )
}