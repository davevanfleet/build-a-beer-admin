/*
  Warnings:

  - You are about to drop the column `maximumTypicalAlphaAcid` on the `hops` table. All the data in the column will be lost.
  - You are about to drop the column `minimumTypicalAlphaAcid` on the `hops` table. All the data in the column will be lost.
  - Added the required column `maximum_typical_alpha_acid` to the `hops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimum_typical_alpha_acid` to the `hops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hops" DROP COLUMN "maximumTypicalAlphaAcid",
DROP COLUMN "minimumTypicalAlphaAcid",
ADD COLUMN     "maximum_typical_alpha_acid" INTEGER NOT NULL,
ADD COLUMN     "minimum_typical_alpha_acid" INTEGER NOT NULL;
