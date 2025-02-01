import { registerAs } from "@nestjs/config";

export default registerAs('appConfig', () => ({
    environments: process.env.NODE_ENV || 'production',
}));
/*export const appConfig = () => ({
    environments: process.env.NODE_ENV || 'production',
    database: {
        host: process.env.DATABASE_HOST || "188.213.130.121",
        port: parseInt(process.env.DATABASE_PORT) || 5432,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
        autoLoadEntities: process.env.DATABASE_AUTOLOAD === 'true' ? true : false
    }
})*/