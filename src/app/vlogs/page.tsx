import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { vlogs } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const metadata = {
  title: "Vlogs | Travel & Ask Adventures",
  description: "Watch our adventures unfold. The latest episodes from our travel show.",
};

export default function VlogsPage() {
  return (
    <div>
      <PageHeader
        title="Video Logs"
        description="Watch our adventures unfold. The latest episodes from our travel show."
        imageId="hero-vlogs"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vlogs.map((vlog) => {
            const vlogImage = placeholderImages.find(p => p.id === vlog.thumbnail);
            return (
              <Dialog key={vlog.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative aspect-video">
                      {vlogImage && (
                        <Image
                          src={vlogImage.imageUrl}
                          alt={vlog.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={vlogImage.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{vlog.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{vlog.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={vlog.videoUrl}
                      title={vlog.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <DialogHeader className="p-6">
                    <DialogTitle className="font-headline text-2xl">{vlog.title}</DialogTitle>
                    <DialogDescription>{vlog.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </div>
  );
}
