import { wait } from "@/lib/utils"

export default async function userPage() {
    await wait(2000)
    return (
        <div className="bg-blue-500">users</div>
    )
}