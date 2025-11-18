import { BlogForm } from "@/components/admin/BlogForm";
import { PageHeader } from "@/components/shared/PageHeader";

export default function NewBlogPostPage() {
  return (
    <>
      <PageHeader
        title="New Blog Post"
        description="Fill out the form below to create a new travel blog post."
        imageId="hero-blog"
      />
      <div className="container mx-auto max-w-2xl px-4 py-16 lg:py-24">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
            <BlogForm />
        </div>
      </div>
    </>
  );
}
