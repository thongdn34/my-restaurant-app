/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `Featured` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Restaurant` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[postId]` on the table `Featured` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Featured` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Featured" DROP CONSTRAINT "Featured_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_restaurantId_fkey";

-- DropIndex
DROP INDEX "Featured_restaurantId_key";

-- AlterTable
ALTER TABLE "Featured" DROP COLUMN "restaurantId",
ADD COLUMN     "postId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "restaurantId",
ADD COLUMN     "postId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Restaurant";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceRange" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Featured_postId_key" ON "Featured"("postId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Featured" ADD CONSTRAINT "Featured_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
