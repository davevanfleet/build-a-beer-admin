/*
  Warnings:

  - Added the required column `yeast_id` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "yeast_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "fk_recipes_yeasts_yeast_id" FOREIGN KEY ("yeast_id") REFERENCES "yeasts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
