
// Security utilities for XSS protection, input validation, and CSRF protection

export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters and HTML tags
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .replace(/script/gi, '') // Remove script tags
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateName = (name: string): boolean => {
  // Allow only letters, spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50;
};

export const validateSubject = (subject: string): boolean => {
  // Allow alphanumeric, spaces, and basic punctuation
  const subjectRegex = /^[a-zA-Z0-9\s\-.,!?]+$/;
  return subjectRegex.test(subject) && subject.length >= 3 && subject.length <= 100;
};

export const validateMessage = (message: string): boolean => {
  // Allow alphanumeric, spaces, and common punctuation
  const messageRegex = /^[a-zA-Z0-9\s\-.,!?'"()\n\r]+$/;
  return messageRegex.test(message) && message.length >= 10 && message.length <= 1000;
};

// Generate CSRF token
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Rate limiting storage
const rateLimitStorage = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (identifier: string, maxRequests = 5, windowMs = 60000): boolean => {
  const now = Date.now();
  const entry = rateLimitStorage.get(identifier);
  
  if (!entry || now > entry.resetTime) {
    rateLimitStorage.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (entry.count >= maxRequests) {
    return false;
  }
  
  entry.count++;
  return true;
};

// Content Security Policy headers (for reference)
export const getCSPHeaders = () => ({
  "Content-Security-Policy": 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self'; " +
    "frame-ancestors 'none';"
});

// Security headers
export const getSecurityHeaders = () => ({
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()"
});
