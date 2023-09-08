"use client";
import { Log, useLogStore } from "@/store";
import { useRef } from "react";

export default function InitLog({ logs }: { logs: any }) {
  const initRef = useRef<boolean>();

  const prepareLog = () => {
    const result: {
      [key: string]: Log;
    } = {};

    logs.forEach((log: any) => {
      result[log.date as string] = { ...log, date: new Date(log.date) };
    });

    return result;
  };

  if (!initRef.current) {
    useLogStore.setState({
      logs: prepareLog(),
    });
    initRef.current = true;
  }
  return null;
}
