/*
  Warnings:

  - You are about to drop the column `name` on the `classes` table. All the data in the column will be lost.
  - Added the required column `title` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_module_id_fkey";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
