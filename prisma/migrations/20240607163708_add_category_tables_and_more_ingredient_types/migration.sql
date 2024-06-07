-- CreateTable
CREATE TABLE "grain_categories" (
    "id" TEXT NOT NULL,

    CONSTRAINT "pk_grain_categories" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hop_categories" (
    "id" TEXT NOT NULL,

    CONSTRAINT "pk_hop_categories" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "malt_extracts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lovibond" REAL NOT NULL,
    "fermentable_percentage" REAL NOT NULL,
    "suggested_maximum_usage" INTEGER NOT NULL DEFAULT 0,
    "maltster" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "pk_malt_extracts" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "other_fermentables" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lovibond" REAL NOT NULL,
    "fermentable_percentage" REAL NOT NULL,

    CONSTRAINT "pk_other_fermentables" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_malt_extracts" (
    "id" TEXT NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "malt_extract_id" TEXT NOT NULL,
    "weight_in_pounds" REAL NOT NULL,

    CONSTRAINT "pk_recipe_malt_extracts" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_other_fermentables" (
    "id" TEXT NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "other_fermentable_id" TEXT NOT NULL,
    "weight_in_pounds" REAL NOT NULL,

    CONSTRAINT "pk_recipe_other_fermentables" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "yeast_categories" (
    "id" TEXT NOT NULL,

    CONSTRAINT "pk_yeast_categories" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GrainToGrainCategory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_HopToHopCategory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_YeastToYeastCategory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "ix_recipe_malt_extracts_malt_extract_id" ON "recipe_malt_extracts"("malt_extract_id");

-- CreateIndex
CREATE INDEX "ix_recipe_malt_extracts_recipe_id" ON "recipe_malt_extracts"("recipe_id");

-- CreateIndex
CREATE INDEX "ix_recipe_other_fermentables_other_fermentable_id" ON "recipe_other_fermentables"("other_fermentable_id");

-- CreateIndex
CREATE INDEX "ix_recipe_other_fermentables_recipe_id" ON "recipe_other_fermentables"("recipe_id");

-- CreateIndex
CREATE UNIQUE INDEX "_GrainToGrainCategory_AB_unique" ON "_GrainToGrainCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_GrainToGrainCategory_B_index" ON "_GrainToGrainCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HopToHopCategory_AB_unique" ON "_HopToHopCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_HopToHopCategory_B_index" ON "_HopToHopCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_YeastToYeastCategory_AB_unique" ON "_YeastToYeastCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_YeastToYeastCategory_B_index" ON "_YeastToYeastCategory"("B");

-- AddForeignKey
ALTER TABLE "recipe_malt_extracts" ADD CONSTRAINT "fk_recipe_grains_grains_grain_id" FOREIGN KEY ("malt_extract_id") REFERENCES "malt_extracts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_malt_extracts" ADD CONSTRAINT "fk_recipe_grains_recipes_recipe_id" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_other_fermentables" ADD CONSTRAINT "fk_recipe_grains_grains_grain_id" FOREIGN KEY ("other_fermentable_id") REFERENCES "other_fermentables"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_other_fermentables" ADD CONSTRAINT "fk_recipe_grains_recipes_recipe_id" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_GrainToGrainCategory" ADD CONSTRAINT "_GrainToGrainCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "grains"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrainToGrainCategory" ADD CONSTRAINT "_GrainToGrainCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "grain_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HopToHopCategory" ADD CONSTRAINT "_HopToHopCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "hops"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HopToHopCategory" ADD CONSTRAINT "_HopToHopCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "hop_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YeastToYeastCategory" ADD CONSTRAINT "_YeastToYeastCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "yeasts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YeastToYeastCategory" ADD CONSTRAINT "_YeastToYeastCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "yeast_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
