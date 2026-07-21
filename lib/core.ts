import {createHmac,randomBytes,createHash,timingSafeEqual} from "node:crypto";
export const units={minutes:60,hours:3600,days:86400,weeks:604800,months:2592000} as const;
export type Unit=keyof typeof units;
const secret=(name:string)=>{const v=process.env[name];if(!v||v.length<32)throw new Error(`${name} must be at least 32 characters`);return v};
const h=(v:string)=>createHmac("sha256",secret("LICENSE_PEPPER")).update(v.trim().toUpperCase()).digest("hex");
export const keyHash=(v:string)=>h(v),deviceHash=(v:string)=>h(`device:${v}`);
export function newKey(){const alphabet="ABCDEFGHJKLMNPQRSTUVWXYZ23456789", b=randomBytes(16);let s="";for(const n of b)s+=alphabet[n%alphabet.length];return `EQTY-${s.slice(0,4)}-${s.slice(4,8)}-${s.slice(8,12)}-${s.slice(12)}`}
export const hint=(v:string)=>{v=v.toUpperCase();return `${v.slice(0,4)}-••••-••••-${v.slice(-4)}`};
export const safeEqual=(a:string,b:string)=>{const x=createHash("sha256").update(a).digest(),y=createHash("sha256").update(b).digest();return timingSafeEqual(x,y)};
