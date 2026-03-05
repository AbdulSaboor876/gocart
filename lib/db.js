// Load environment variables
require('dotenv').config();

const { PrismaClient } = require('./generated/prisma');
const { PrismaNeon } = require('@prisma/adapter-neon');

// Create Neon adapter with DATABASE_URL
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

// Instantiate Prisma Client
const prisma = new PrismaClient({ adapter });

// Export for use in API routes
module.exports = { prisma };