-- CreateEnum
CREATE TYPE "STORE_CATEGORY" AS ENUM ('SUSHI', 'UNAGI');

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "city" TEXT NOT NULL,
    "category" "STORE_CATEGORY" NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);
