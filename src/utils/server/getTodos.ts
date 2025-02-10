'use server';
import { cookies } from 'next/headers';

const COOKIE_KEY = 'todoList';

/** 📌 서버에서 To-Do 목록을 직접 가져오는 함수 */
export const getTodos = async () => {
  const cookieStore = cookies();
  const storedData = cookieStore.get(COOKIE_KEY)?.value;
  return storedData ? JSON.parse(storedData) : [];
};
