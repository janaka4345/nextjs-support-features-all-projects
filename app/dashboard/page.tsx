import { wait } from "@/lib/utils"

export default async function page() {
    await wait(2000)
    return (
        <div className="bg-pink-500 col-start-1 col-end-3">page</div>
    )
}