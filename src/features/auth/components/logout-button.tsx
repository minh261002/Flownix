"use client";

import { useSignOut } from "@/hooks/use-signout";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
    const { handleSignOut } = useSignOut()
    return (
        <Button onClick={handleSignOut}>Sign Out</Button>
    )
}

export default LogoutButton