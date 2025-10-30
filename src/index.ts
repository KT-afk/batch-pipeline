import { sequelize, connectDB } from "./config/db";

(async() => {
    try {
        await connectDB();
        await sequelize.sync({ alter: true });
        console.log("✅ Models synced.");
    } catch (error) {
        console.error("❌ Startup failed.", error);
    } finally {
        await sequelize.close();
    }

})();
