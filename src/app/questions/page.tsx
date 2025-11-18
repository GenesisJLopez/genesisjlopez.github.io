import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { questions } from "@/lib/data";
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
  title: "Question Segment | Travel & Ask Adventures",
  description: "Your travel questions answered, plus fun trivia and Q&A sessions.",
};

export default function QuestionsPage() {
  return (
    <div>
      <PageHeader
        title="Question Segment"
        description="Your travel questions answered, plus fun trivia and Q&A sessions with Genesis & Stephanie."
        imageId="hero-questions"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => {
            const qImage = placeholderImages.find(p => p.id === q.thumbnail);
            return (
              <Dialog key={q.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative aspect-video">
                      {qImage && (
                        <Image
                          src={qImage.imageUrl}
                          alt={q.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={qImage.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{q.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{q.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={q.videoUrl}
                      title={q.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <DialogHeader className="p-6">
                    <DialogTitle className="font-headline text-2xl">{q.title}</DialogTitle>
                    <DialogDescription>{q.description}</DialogDescription>
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
