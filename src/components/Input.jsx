import { forwardRef } from 'react';

/*
    这里导入了 React 库中的 forwardRef 函数，它允许 React 组件在转发(ref forwarding)的情况下接收 ref。
*/

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {

  // 这里定义了一个变量 classes，它是一个包含一系列 CSS 类名的字符串，用于定义组件的样式
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    // 这是一个 <p> 元素，它包裹了组件的内容，设置了一些样式，例如 flex 布局、垂直方向的列布局、间隔、以及外边距
    <p className = "flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
            {label}
        </label>
        {textarea ? (
            <textarea ref={ref} className={classes} {...props} />
        ) : (
            <input ref={ref} className={classes} {...props} />
        )}
    </p>
  );

  /*
    这是一个条件渲染，根据 textarea 属性的值决定渲染 <textarea> 还是 <input> 元素。

    如果 textarea 为真，则渲染 <textarea>，否则渲染 <input>。

    在这两种情况下，都将 ref 传递给了相应的元素，以及使用 classes 变量设置了样式，并将剩余的 props 属性传递给元素
  */
});

export default Input;