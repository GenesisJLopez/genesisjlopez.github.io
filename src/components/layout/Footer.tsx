
import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              <span className="font-bold font-headline text-lg">
                Travel & Ask Adventures
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Exploring the world, one adventure at a time.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
             <div>
              <h3 className="font-headline font-semibold">Explore</h3>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted-foreground hover:text-primary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
               <h3 className="font-headline font-semibold">Company</h3>
               <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/admin" className="text-muted-foreground hover:text-primary">
                    Admin
                  </Link>
                </li>
               </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Travel & Ask Adventures. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
