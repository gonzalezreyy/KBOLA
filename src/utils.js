// src/utils.js

import log from 'loglevel';

// Configure loglevel
log.setLevel('info');

const logger = {
  info: (message) => log.info(message),
  warn: (message) => log.warn(message),
  error: (message) => log.error(message),
  debug: (message) => log.debug(message),
};

export default logger;

export const calculateFee = (itemCount, deliveryType) => {
    if (deliveryType === 'delivery') {
      if (itemCount <= 2) return 50;
      if (itemCount <= 5) return 100;
      if (itemCount <= 7) return 200;
      return 500;
    } else if (deliveryType === 'pickup') {
      if (itemCount <= 2) return 30;
      if (itemCount <= 5) return 60;
      if (itemCount <= 7) return 100;
      return 150;
    } else {
      return 0;
    }
  };
  
  export const formatTime12h = (time24) => {
    const [hour, minute] = time24.split(":");
    const h = parseInt(hour, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${minute} ${suffix}`;
  };
  
  export const formatDisplayDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleDateString('es-ES', { month: 'long' });
    return `${day} de ${month}`;
  };
