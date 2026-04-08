export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  durationHours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  image: string;
  tags: string[];
}
