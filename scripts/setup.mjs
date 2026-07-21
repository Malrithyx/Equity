import {readFile} from "node:fs/promises"; import {join,dirname} from "node:path"; import {fileURLToPath} from "node:url"; import {neon} from "@neondatabase/serverless";
if(!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
const sql=neon(process.env.DATABASE_URL), file=await readFile(join(dirname(fileURLToPath(import.meta.url)),"..","database","schema.sql"),"utf8");
for(const statement of file.split("-- statement-breakpoint").map(x=>x.trim()).filter(Boolean)) await sql.query(statement);
console.log("Database ready");
