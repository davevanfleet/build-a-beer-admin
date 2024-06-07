/*
  Warnings:

  - Added the required column `categorization_type` to the `grain_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorization_type` to the `hop_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorization_type` to the `yeast_categories` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategorizationType" AS ENUM ('geography', 'flavor', 'aroma', 'ingredient_grouping');

-- AlterTable
ALTER TABLE "grain_categories" ADD COLUMN     "categorization_type" "CategorizationType" NOT NULL;

-- AlterTable
ALTER TABLE "hop_categories" ADD COLUMN     "categorization_type" "CategorizationType" NOT NULL;

-- AlterTable
ALTER TABLE "yeast_categories" ADD COLUMN     "categorization_type" "CategorizationType" NOT NULL;
