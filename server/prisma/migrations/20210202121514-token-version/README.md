# Migration `20210202121514-token-version`

This migration has been generated by Arlindo jose at 2/2/2021, 2:15:14 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Users" DROP COLUMN "phone",
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "token_version" INTEGER NOT NULL DEFAULT 0
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210116130108-create-users..20210202121514-token-version
--- datamodel.dml
+++ datamodel.dml
@@ -1,20 +1,21 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Users {
-  id          String   @id @default(uuid())
-  name        String
-  email       String   @unique
-  phone       String
-  created_at  DateTime @default(now()) 
-  updated_at  DateTime @updatedAt
+  id            String   @id @default(uuid())
+  name          String
+  email         String   @unique
+  phone_number  String
+  token_version Int      @default(0)
+  created_at    DateTime @default(now()) 
+  updated_at    DateTime @updatedAt
 }
 model Events {
   id          String   @id
```

