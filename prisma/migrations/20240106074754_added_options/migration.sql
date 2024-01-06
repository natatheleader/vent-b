/*
  Warnings:

  - You are about to drop the `coment_likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "coment_likes" DROP CONSTRAINT "coment_likes_comment_id_fkey";

-- DropForeignKey
ALTER TABLE "coment_likes" DROP CONSTRAINT "coment_likes_user_id_fkey";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "coment_likes";

-- CreateTable
CREATE TABLE "options" (
    "id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,
    "option" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option_counts" (
    "id" SERIAL NOT NULL,
    "option_id" INTEGER NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "option_counts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_likes" (
    "id" SERIAL NOT NULL,
    "comment_id" INTEGER NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comment_likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "option_counts_user_id_key" ON "option_counts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "comment_likes_user_id_key" ON "comment_likes"("user_id");

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option_counts" ADD CONSTRAINT "option_counts_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option_counts" ADD CONSTRAINT "option_counts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_likes" ADD CONSTRAINT "comment_likes_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_likes" ADD CONSTRAINT "comment_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
