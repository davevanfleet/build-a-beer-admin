/*
  Warnings:

  - The primary key for the `recipe_grains` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `recipe_hops` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/

-- Add Extension 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- AlterTable
ALTER TABLE "recipe_grains" DROP CONSTRAINT "pk_recipe_grains",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "pk_recipe_grains" PRIMARY KEY ("id");
DROP SEQUENCE "recipe_grains_id_seq";

-- Update Previous Ids
UPDATE "recipe_grains" SET "id" = uuid_generate_v4();

-- AlterTable
ALTER TABLE "recipe_hops" DROP CONSTRAINT "pk_recipe_hops",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "pk_recipe_hops" PRIMARY KEY ("id");
DROP SEQUENCE "recipe_hops_id_seq";

-- Update Previous Ids
UPDATE "recipe_hops" SET "id" = uuid_generate_v4();
