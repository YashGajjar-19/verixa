/*
 Warnings:
 
 - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
 - Added the required column `sku` to the `Product` table without a default value. This is not possible if the table is not empty.
 - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
 
 */
-- AlterTable
ALTER TABLE "Product"
ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN "sku" TEXT NOT NULL,
  ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL;
-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");