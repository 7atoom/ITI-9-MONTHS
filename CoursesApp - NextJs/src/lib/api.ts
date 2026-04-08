import { Course } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${BASE_URL}/courses`);
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export async function getCourseById(id: string | number): Promise<Course | null> {
  const res = await fetch(`${BASE_URL}/courses/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch course");
  return res.json();
}
