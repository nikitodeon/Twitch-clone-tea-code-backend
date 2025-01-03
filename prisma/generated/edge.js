
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  username: 'username',
  displayName: 'displayName',
  avatar: 'avatar',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Julia\\Documents\\next-projects\\teastream\\teastream-backend\\prisma\\generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Julia\\Documents\\next-projects\\teastream\\teastream-backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "6.1.0",
  "engineVersion": "11f085a2012c0f4778414c8db2651556ee0ef959",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_URI",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"POSTGRES_URI\")\n}\n\nmodel User {\n  id String @id @default(uuid())\n\n  email    String @unique\n  password String\n\n  username    String @unique\n  displayName String @map(\"display_name\")\n\n  avatar String?\n  bio    String?\n\n  //   telegramId String? @unique @map(\"telegram_id\")\n\n  //   isVerified Boolean @default(false) @map(\"is_verified\")\n\n  //   isEmailVerified Boolean @default(false) @map(\"is_email_verified\")\n  //   isTotpEnabled   Boolean @default(false) @map(\"is_totp_enabled\")\n  //   totpSecret      String? @map(\"totp_secret\")\n\n  //   isDeactivated Boolean   @default(false) @map(\"is_deactivated\")\n  //   deactivatedAt DateTime? @map(\"deactivated_at\")\n\n  //   tokens               Token[]\n  //   socialLinks          SocialLink[]\n  //   stream               Stream?\n  //   chatMessages         ChatMessage[]\n  //   notifications        Notification[]\n  //   notificationSettings NotificationSettings?\n\n  //   followers  Follow[] @relation(name: \"followers\")\n  //   followings Follow[] @relation(name: \"followings\")\n\n  //   transactions             Transaction[]\n  //   sponsorshipPlans         SponsorshipPlan[]\n  //   sponsorshipSubscriptions SponsorshipSubscription[] @relation(name: \"sponsorship_subscriptions\")\n  //   sponsors                 SponsorshipSubscription[] @relation(name: \"sponsors\")\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"users\")\n}\n\n// model SocialLink {\n//   id String @id @default(uuid())\n\n//   title    String\n//   url      String\n//   position Int\n\n//   user   User?   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String? @map(\"user_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"social_links\")\n// }\n\n// model Stream {\n//   id String @id @default(uuid())\n\n//   title        String\n//   thumbnailUrl String? @map(\"thumbnail_url\")\n\n//   ingressId String? @unique @map(\"ingress_id\")\n//   serverUrl String? @map(\"server_url\")\n//   streamKey String? @map(\"stream_key\")\n\n//   isLive Boolean @default(false) @map(\"is_live\")\n\n//   isChatEnabled              Boolean @default(true) @map(\"is_chat_enabled\")\n//   isChatFollowersOnly        Boolean @default(false) @map(\"is_chat_followers_only\")\n//   isChatPremiumFollowersOnly Boolean @default(false) @map(\"is_chat_premium_followers_only\")\n\n//   chatMessages ChatMessage[]\n\n//   user   User?   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String? @unique @map(\"user_id\")\n\n//   category   Category? @relation(fields: [categoryId], references: [id])\n//   categoryId String?   @map(\"category_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"streams\")\n// }\n\n// model ChatMessage {\n//   id String @id @default(uuid())\n\n//   text String\n\n//   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String @map(\"user_id\")\n\n//   stream   Stream @relation(fields: [streamId], references: [id], onDelete: Cascade)\n//   streamId String @map(\"stream_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"chat_messages\")\n// }\n\n// model Category {\n//   id String @id @default(uuid())\n\n//   title        String\n//   slug         String  @unique\n//   description  String?\n//   thumbnailUrl String  @map(\"thumbnail_url\")\n\n//   streams Stream[]\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"categories\")\n// }\n\n// model Follow {\n//   id String @id @default(uuid())\n\n//   follower   User   @relation(name: \"followers\", fields: [followerId], references: [id], onDelete: Cascade)\n//   followerId String @map(\"follower_id\")\n\n//   following   User   @relation(name: \"followings\", fields: [followingId], references: [id], onDelete: Cascade)\n//   followingId String @map(\"following_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@unique([followerId, followingId])\n//   @@index([followerId])\n//   @@index([followingId])\n//   @@map(\"follows\")\n// }\n\n// model Notification {\n//   id String @id @default(uuid())\n\n//   message String\n//   type    NotificationType\n//   isRead  Boolean          @default(false) @map(\"is_read\")\n\n//   user   User?   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String? @map(\"user_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"notifications\")\n// }\n\n// model NotificationSettings {\n//   id String @id @default(uuid())\n\n//   siteNotifications     Boolean @default(true) @map(\"site_notifications\")\n//   telegramNotifications Boolean @default(true) @map(\"telegram_notifications\")\n\n//   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String @unique @map(\"user_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"notification_settings\")\n// }\n\n// model Transaction {\n//   id String @id @default(uuid())\n\n//   amount   Float\n//   currency String\n\n//   stripeSubscriptionId String?           @map(\"stripe_subscription_id\")\n//   status               TransactionStatus @default(PENDING)\n\n//   user   User?   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String? @map(\"user_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"transactions\")\n// }\n\n// model SponsorshipPlan {\n//   id String @id @default(uuid())\n\n//   title       String\n//   description String?\n//   price       Float\n\n//   stripeProductId String @map(\"stripe_product_id\")\n//   stripePlanId    String @map(\"stripe_plan_id\")\n\n//   channel   User?   @relation(fields: [channelId], references: [id], onDelete: Cascade)\n//   channelId String? @map(\"channel_id\")\n\n//   sponsorshipSubscriptions SponsorshipSubscription[]\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"sponsorship_plans\")\n// }\n\n// model SponsorshipSubscription {\n//   id String @id @default(uuid())\n\n//   expiresAt DateTime @map(\"expires_at\")\n\n//   plan   SponsorshipPlan? @relation(fields: [planId], references: [id], onDelete: Cascade)\n//   planId String?          @map(\"plan_id\")\n\n//   user   User?   @relation(name: \"sponsorship_subscriptions\", fields: [userId], references: [id], onDelete: Cascade)\n//   userId String? @map(\"user_id\")\n\n//   channel   User?   @relation(name: \"sponsors\", fields: [channelId], references: [id], onDelete: Cascade)\n//   channelId String? @map(\"channel_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"sponsorship_subscriptions\")\n// }\n\n// model Token {\n//   id String @id @default(uuid())\n\n//   token     String    @unique\n//   type      TokenType\n//   expiresIn DateTime  @map(\"expires_in\")\n\n//   user   User?   @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   userId String? @map(\"user_id\")\n\n//   createdAt DateTime @default(now()) @map(\"created_at\")\n//   updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n//   @@map(\"tokens\")\n// }\n\n// enum TokenType {\n//   EMAIL_VERIFY\n//   PASSWORD_RESET\n//   DEACTIVATE_ACCOUNT\n//   TELEGRAM_AUTH\n\n//   @@map(\"token_types\")\n// }\n\n// enum NotificationType {\n//   STREAM_START\n//   NEW_FOLLOWER\n//   NEW_SPONSORSHIP\n//   ENABLE_TWO_FACTOR\n//   VERIFIED_CHANNEL\n\n//   @@map(\"notification_types\")\n// }\n\n// enum TransactionStatus {\n//   PENDING\n//   SUCCESS\n//   FAILED\n//   EXPIRED\n\n//   @@map(\"transaction_statuses\")\n// }\n",
  "inlineSchemaHash": "3755aebebff0fd456c54afbeffce9624c3f87994ca646e8a940c22b913cf812a",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"dbName\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_URI: typeof globalThis !== 'undefined' && globalThis['POSTGRES_URI'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_URI || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

