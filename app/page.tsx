import {redirect} from "next/navigation"; import {session} from "@/lib/auth"; export default async function Page(){redirect((await session())?"/dashboard":"/login")}
