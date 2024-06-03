/*
  Warnings:

  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "beer_styles" ALTER COLUMN "fermentation_bak" DROP NOT NULL;

-- AlterTable
ALTER TABLE "yeasts" ALTER COLUMN "fermentation_bak" DROP NOT NULL,
ALTER COLUMN "fermentation_bak" DROP DEFAULT;

-- DropTable
DROP TABLE "tags";
