/*
  Warnings:

  - Added the required column `password` to the `super_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "super_users" ADD COLUMN     "password" TEXT NOT NULL;