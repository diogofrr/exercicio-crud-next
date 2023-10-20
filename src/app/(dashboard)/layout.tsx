'use client'

import Loading from "@/components/Loading"
import { AUTHENTICATED } from "@/constants/constants"
import useSession from "@/hooks/useSession"
import { useRouter } from "next/navigation"
import { useLayoutEffect } from "react"

interface IDashboardLayoutProps {
    children: JSX.Element
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
    const router = useRouter()
    const session = useSession()

    useLayoutEffect(() => {
        if (session.profileData?.status !== AUTHENTICATED) {
            return router.push('/auth/login')
        }
    }, [router, session.profileData?.status])
    
    if (session.profileData?.status !== AUTHENTICATED) {
        return <Loading />
    }

    return <>{children}</>
}