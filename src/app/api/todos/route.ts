import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const COOKIE_KEY = 'todoList';

/** 📌 `GET`: 서버 쿠키에서 기존 할 일 목록을 가져오기 */
export async function GET() {
  const cookieStore = cookies();
  const storedData = cookieStore.get(COOKIE_KEY)?.value;
  const todos = storedData ? JSON.parse(storedData) : [];
  return NextResponse.json(todos);
}

/** 📌 `POST`: 새로운 할 일 목록을 쿠키에 저장 */
export async function POST(req: Request) {
  const cookieStore = cookies();
  const { todos } = await req.json();

  // ✅ 쿠키에 새로운 할 일 목록 저장
  cookieStore.set(COOKIE_KEY, JSON.stringify(todos), { path: '/' });
  return NextResponse.json({ success: true });
}
