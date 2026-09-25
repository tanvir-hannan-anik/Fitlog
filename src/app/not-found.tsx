import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center px-4">
            <div className="text-center">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#caff00]">
                    404 ERROR
                </p>

                <h1 className="mt-4 text-6xl md:text-8xl font-extrabold tracking-tight">
                    404
                </h1>

                <h2 className="mt-4 text-xl md:text-2xl font-bold uppercase">
                    Page Not Found
                </h2>

                <p className="mt-3 max-w-md mx-auto text-sm leading-6 text-gray-500">
                    The page you are looking for does not exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-flex rounded-lg bg-[#caff00] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#b9ed00]"
                >
                    Back to Home
                </Link>

            </div>
        </main>
    );
};

export default NotFound;