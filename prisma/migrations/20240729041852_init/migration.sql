-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'MEMBER');

-- CreateEnum
CREATE TYPE "MonitoringType" AS ENUM ('HTTP', 'PING', 'PORT');

-- CreateEnum
CREATE TYPE "HttpMethod" AS ENUM ('GET', 'POST');

-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('UP', 'DOWN', 'TIMEOUT', 'UNKNOWN');

-- CreateTable
CREATE TABLE "Workspace" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceMembership" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "MonitoringType" NOT NULL,
    "httpUrl" TEXT,
    "httpMethod" "HttpMethod",
    "pingAddress" TEXT,
    "port" INTEGER,
    "interval" INTEGER NOT NULL,
    "checkSSL" BOOLEAN NOT NULL DEFAULT false,
    "checkDomain" BOOLEAN NOT NULL DEFAULT false,
    "timeout" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workspaceId" TEXT,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceResponse" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ServiceStatus" NOT NULL,
    "responseTime" INTEGER NOT NULL,
    "statusCode" INTEGER,
    "sslExpiryDays" INTEGER,
    "domainExpiryDays" INTEGER,

    CONSTRAINT "ServiceResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "workspaceId" TEXT NOT NULL,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_id_key" ON "Workspace"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_ownerId_key" ON "Workspace"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceMembership_id_key" ON "WorkspaceMembership"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceMembership_workspaceId_userId_key" ON "WorkspaceMembership"("workspaceId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceResponse_id_key" ON "ServiceResponse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_id_key" ON "ApiKey"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey"("key");

-- AddForeignKey
ALTER TABLE "Workspace" ADD CONSTRAINT "Workspace_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMembership" ADD CONSTRAINT "WorkspaceMembership_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMembership" ADD CONSTRAINT "WorkspaceMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceResponse" ADD CONSTRAINT "ServiceResponse_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
