import Link from "next/link";
import Image from "next/image";
import { getCourses, getCourseById } from "@/lib/api";
import { Course } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";

const levelStyles: Record<Course["level"], string> = {
  Beginner: "bg-emerald-100 text-emerald-800",
  Intermediate: "bg-amber-100 text-amber-800",
  Advanced: "bg-rose-100 text-rose-800",
};

export default function CourseDetailsPage({ course }: { course: Course }) {
  return (
    <section className="space-y-8">
      <Link href="/courses" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
        ← Back to all courses
      </Link>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <div className="relative h-64 bg-slate-100 md:h-96">
          <Image src={course.image} alt={course.title} fill sizes="100vw" className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgb(15 23 42 / 0.7), rgb(15 23 42 / 0.1), transparent)" }}
          />
          <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[course.level]}`}>
              {course.level}
            </span>
            <h1 className="mt-4 text-3xl font-black md:text-5xl">{course.title}</h1>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
          <div className="space-y-3 md:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">About this course</h2>
            <p className="leading-7 text-slate-700">{course.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {course.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="space-y-3 rounded-2xl bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-900">Course facts</h3>
            <p className="text-slate-700">Instructor: {course.instructor}</p>
            <p className="text-slate-700">Duration: {course.durationHours} hours</p>
            <p className="text-slate-700">Rating: {course.rating}/5</p>
            <p className="text-xl font-black text-slate-900">Price: ${course.price.toFixed(2)}</p>
          </aside>
        </div>
      </article>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const courses = await getCourses();
    return {
      paths: courses.map((c) => ({ params: { id: String(c.id) } })),
      fallback: false,
    };
  } catch {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<{ course: Course }> = async ({ params }) => {
  const course = await getCourseById(params?.id as string);
  if (!course) return { notFound: true };
  return { props: { course }, revalidate: 60 };
};
