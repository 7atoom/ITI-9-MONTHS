import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">Error 404</p>
      <h1 className="mt-3 text-5xl font-black text-slate-900">Page Not Found</h1>
      <p className="mt-4 text-slate-500">The page you are looking for does not exist.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Go Home
        </Link>
        <Link href="/courses" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-blue-400">
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
