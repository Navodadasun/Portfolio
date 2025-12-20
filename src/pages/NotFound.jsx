import { Link } from "react-router-dom"
import { Home } from "lucide-react"

export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)] p-6 text-center">
            {/* Ambient Background */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-subtle"></div>
            </div>

            <h1 className="text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                404
            </h1>
            <p className="text-2xl mb-8 font-light" style={{ color: 'var(--color-text-secondary)' }}>
                Oops! This page seems to have drifted into a black hole.
            </p>

            <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
            >
                <Home className="w-5 h-5" />
                Return Home
            </Link>
        </div>
    )
}