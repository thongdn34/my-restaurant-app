/*
  Warnings:

  - You are about to drop the column `postId` on the `Featured` table. All the data in the column will be lost.
  - Added the required column `featuredId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Featured" DROP CONSTRAINT "Featured_postId_fkey";

-- DropIndex
DROP INDEX "Featured_postId_key";

-- AlterTable
ALTER TABLE "Featured" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "featuredId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_featuredId_fkey" FOREIGN KEY ("featuredId") REFERENCES "Featured"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
