/*
  Warnings:

  - Added the required column `classe_url` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "classe_url" TEXT NOT NULL;
