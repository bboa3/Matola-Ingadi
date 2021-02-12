/*
  Warnings:

  - Made the column `name` on table `super_users` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `super_users` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "super_users" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "phone_number" SET NOT NULL;
