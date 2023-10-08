import { NextResponse } from "next/server";
import axios from "axios";
export async function GET() {
const data = await axios.get("http://localhost:5000/api/home");
console.log(await data.data)

}