import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images.json";

interface PageHeaderProps {
  title: string;
  description: string;
  imageId: string;
}

export function PageHeader({ title, description, imageId }: PageHeaderProps) {
  const image = placeholderImages.find((p) => p.id === imageId);

  return (
    <section className="relative h-[40vh] w-full text-white">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-5xl font-bold md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
