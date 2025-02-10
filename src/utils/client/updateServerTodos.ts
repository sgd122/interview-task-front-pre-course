'use client';
import type { Todo } from '@/types/todo';

/**
 * ✅ 서버에 To-Do 목록을 업데이트하는 함수
 */
export const updateServerTodos = async (newTodos: Todo[]) => {
  try {
    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todos: newTodos }),
    });
  } catch (error) {
    console.error('Error updating todos:', error);
  }
};
