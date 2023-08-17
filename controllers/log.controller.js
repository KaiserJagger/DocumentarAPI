import { createLogger } from "../utils.js";

const logger = createLogger();

const logAllLevels = async (req, res) => {
    const now = Date.now()
    logger.debug(now + ' / DEBUG');
    logger.http(now + ' / HTTP');
    logger.info(now + ' / INFO');
    logger.warning(now + ' / WARNING');
    logger.error(now + ' / ERROR');
    logger.fatal(now + ' / FATAL');

    res.status(200).send("Logueando todos los niveles");
};
const logCustomLevel = async (req, res) => {
    const el = req.params.el;
    const now = Date.now()
    switch (el) {
        case "fatal":
            logger.fatal(now + ' / FATAL');
            break;
        case "error":
            logger.error(now + ' / ERROR');
            break;
        case "warning":
            logger.warning(now + ' / WARNING');
            break;
        case "info":
            logger.info(now + ' / INFO');
            break;
        case "http":
            logger.http(now + ' / HTTP');
            break;
        case "debug":
            logger.debug(now + ' / DEBUG');
            break;
    }
    res.status(200).send("Logueando nivel " + el);
};
export default {
    logAllLevels,
    logCustomLevel,
};