import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/api";
import { Course } from "@/types";
import { GetStaticProps } from "next";

export default function CoursesPage({ courses }: { courses: Course[] }) {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-black text-slate-900">
        All Courses{" "}
        <span className="text-lg font-medium text-slate-500">({courses.length})</span>
      </h1>

      {courses.length === 0 ? (
        <p className="text-slate-500">No courses available right now.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}

export const getStaticProps: GetStaticProps<{ courses: Course[] }> = async () => {
  try {
    const courses = await getCourses();
    return { props: { courses }, revalidate: 60 };
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return { props: { courses: [] }, revalidate: 60 };
  }
};
