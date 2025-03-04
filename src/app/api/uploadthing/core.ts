import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from 'zod'

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      // maxFileCount: 1,
    },
  })
    .input(z.object({configId: z.string().optional()}))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      
      const { configId } = metadata.input
      // return { uploadedBy: metadata.userId };
      // return { name: 'sedat'};
      return { configId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
