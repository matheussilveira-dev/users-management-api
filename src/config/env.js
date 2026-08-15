import dotenv from "dotenv";

dotenv.config()

const requiredEnv = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME",
];

for (const variable of requiredEnv) {
    if (!process.env[variable]) {
        throw new Error(
            `Variável de ambiente não configurada: ${variable}`
        );
    }
}

const env = {
    port: process.env.PORT || 3010,

    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
}

export default env