import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4 py-10 text-center">
      <h1 className="text-4xl font-black text-slate-900">Courses Platform</h1>
      <p className="text-slate-600">Learn new skills from expert instructors.</p>
      <Link
        href="/courses"
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Browse Courses
      </Link>
    </div>
  );
}
