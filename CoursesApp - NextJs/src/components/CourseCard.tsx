import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types";

const levelStyles: Record<Course["level"], string> = {
  Beginner: "bg-emerald-100 text-emerald-800",
  Intermediate: "bg-amber-100 text-amber-800",
  Advanced: "bg-rose-100 text-rose-800",
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgb(15 23 42 / 0.6), transparent)" }}
        />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[course.level]}`}>
          {course.level}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-900">{course.title}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{course.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3 text-sm">
          <p className="text-slate-700">Instructor: {course.instructor}</p>
          <p className="text-slate-700">Duration: {course.durationHours}h</p>
          <p className="font-semibold text-slate-900">Price: ${course.price.toFixed(2)}</p>
          <p className="font-semibold text-slate-900">Rating: {course.rating}/5</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          View Full Details
        </Link>
      </div>
    </article>
  );
}
