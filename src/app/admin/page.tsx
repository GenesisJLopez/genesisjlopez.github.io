'use client';

import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { collection, query, orderBy } from 'firebase/firestore';
import type { TravelBlog } from '@/lib/types';
import { PlusCircle, Edit, LayoutTemplate } from 'lucide-react';
import { DeleteBlogButton } from '@/components/admin/DeleteBlogButton';

function BlogManagement() {
  const { user } = useUser();
  const firestore = useFirestore();

  const blogsQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(collection(firestore, 'users', user.uid, 'travelBlogs'), orderBy('datePublished', 'desc'));
  }, [firestore, user]);

  const { data: blogs, isLoading } = useCollection<TravelBlog>(blogsQuery);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Episode Posts</CardTitle>
          <CardDescription>Create, edit, and manage your episode pages.</CardDescription>
        </div>
        <Button asChild>
          <Link href="/admin/blog/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Post
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={4} className="text-center">Loading posts...</TableCell>
              </TableRow>
            )}
            {!isLoading && blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.destination}</TableCell>
                  <TableCell>{blog.datePublished ? new Date(blog.datePublished.toDate()).toLocaleDateString() : 'N/A'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/admin/blog/edit/${blog.id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <DeleteBlogButton blogId={blog.id} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              !isLoading && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">No episode posts found. Create one!</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function PageManagement() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Site Management</CardTitle>
                <CardDescription>Edit the content of your main site pages.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                         <LayoutTemplate className="h-6 w-6" />
                        <p className="font-medium">Homepage</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/page-editor">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Page
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/login');
    });
  };

  return (
    <div>
      <PageHeader
        title="Admin Dashboard"
        description="Manage your website content here."
        imageId="hero-premium"
      />
      <div className="container mx-auto space-y-8 px-4 py-16 lg:py-24">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Welcome, {user.email}</CardTitle>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </CardHeader>
        </Card>

        <PageManagement />
        <BlogManagement />

      </div>
    </div>
  );
}
