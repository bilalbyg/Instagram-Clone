import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { logout } from "../firebase"

export default function Logout() {
    useEffect(() => {
        logout()
    })

    return null
}