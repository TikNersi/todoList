export type Todo = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
};

export type Action = { type: string; payload?: any };
