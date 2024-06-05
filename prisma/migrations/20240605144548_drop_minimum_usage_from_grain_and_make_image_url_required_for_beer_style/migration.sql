/*
  Warnings:

  - You are about to drop the column `suggested_minimum_usage` on the `grains` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "beer_styles" ALTER COLUMN "image_url" DROP DEFAULT;

-- AlterTable
ALTER TABLE "grains" DROP COLUMN "suggested_minimum_usage";
