'use client';

import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser, useFirestore } from '@/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface DeleteBlogButtonProps {
    blogId: string;
}

export function DeleteBlogButton({ blogId }: DeleteBlogButtonProps) {
    const { user } = useUser();
    const firestore = useFirestore();

    const handleDelete = async () => {
        if (!user || !blogId) return;
        const blogRef = doc(firestore, 'users', user.uid, 'travelBlogs', blogId);
        try {
            await deleteDoc(blogRef);
            // Optionally, show a success toast or trigger a state update
        } catch (error) {
            console.error("Error deleting blog post: ", error);
            // Optionally, show an error toast
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your blog post
                        and remove its data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
