-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('GOOGLE', 'APPLE', 'SAMSUNG');
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('PHONE', 'WATCH', 'BUDS');
-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" "Brand" NOT NULL,
    "category" "Category" NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);