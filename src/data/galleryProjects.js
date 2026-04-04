/**
 * Gallery → Projects tab and Projects page cards share these paths.
 *
 * To add a project:
 * 1. Put image(s) in public/gallery/
 * 2. Copy an object below, set unique id, slug, caption, photos[]
 * 3. In Projects.jsx add a card with ss: galleryProjectCover('your-slug') and matching repo/details
 */
export const GALLERY_PROJECT_POSTS = [
  {
    id: 1,
    slug: "student-sdms",
    caption:
      "💻 Student Details Management System — admin, student & department login, CRUD, and role-based access for records and marks.",
    photos: ["/gallery/Student Details Management System.png"],
  },
  {
    id: 2,
    slug: "fintech-budget",
    caption:
      "📊 FinTech Budget & Expense Tracker — Android app for income & expenses, categorization, and insights for smarter money management.",
    photos: ["/gallery/FinTech logo.png"],
  },
];

/** First image for a project card (same file shown in Gallery). */
export function galleryProjectCover(slug) {
  const post = GALLERY_PROJECT_POSTS.find((p) => p.slug === slug);
  return post?.photos?.[0] ?? "";
}
