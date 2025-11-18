import { PageHeader } from "@/components/shared/PageHeader";
import { PageEditor } from "@/components/admin/PageEditor";

export default function PageEditorPage() {
  return (
    <>
      <PageHeader
        title="Homepage Editor"
        description="Use the editor below to change the content of your homepage."
        imageId="hero-premium"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
           <PageEditor pageId="homepage" />
        </div>
      </div>
    </>
  );
}
