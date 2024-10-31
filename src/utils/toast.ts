import { ElNotification } from 'element-plus';

export function toast({
  title,
  message,
  type,
  duration,
  zIndex
}: {
  title?: string;
  message?: string|any;
  type?: 'success' | 'warning' | 'info' | 'error';
  duration?: number;
  zIndex?: number;
} = {}): Function {
  // 關閉該吐司訊息的函式
  const { close } = ElNotification({
    title: title,
    message: message,
    type: type ? type : 'info',
    duration: duration ? duration : 4500,
    zIndex: zIndex
  });

  return close;
}
