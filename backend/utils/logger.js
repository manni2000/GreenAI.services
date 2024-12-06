export const logger = {
    info: (message) => console.log(`[INFO] ${message}`),
    error: (message) => console.error(`[ERROR] ${message}`),
    warn: (message) => console.warn(`[WARN] ${message}`),
    debug: (message) => console.debug(`[DEBUG] ${message}`)
  };