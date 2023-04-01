"use client";
import React, { useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";

export default function Provideres({
  children,
}: {
  children: React.ReactNode;
}) {
  //
  // マウント処理は、下記の関連するwarningの解消するために行なっている。
  //
  //  Extra attributes from the server: data-theme,style
  //
  //  クライアント側で処理すべき内容がサーバでレンダリングする際に実行されるのを防ぐ
  //
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
