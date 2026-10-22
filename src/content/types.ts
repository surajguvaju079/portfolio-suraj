export type Project = {
  id: string; name: string; category: string; status: string; summary: string;
  contributions: readonly string[]; stack: readonly string[]; featured: boolean;
  link?: { href: string; label: string };
  showcase?: { statement: string; summary: string };
};
export type ClientWork = {
  id: string; name: string; category: string; summary: string; href: string; stack: readonly string[];
  image?: { src: string; width: number; height: number; alt: string };
};
export type Experience = {
  company: string; role: string; location: string; current?: boolean; contributions: readonly string[];
};
