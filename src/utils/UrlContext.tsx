import React, { createContext, useContext, useMemo, useState } from "react";

export type UrlContextType = {
  result: string;
  setResult: (result: string) => void;
  url: string;
  setUrl: (url: string) => void;
  fetchData: (e: { preventDefault: () => void }) => Promise<void>;
};

const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [result, setResult] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const fetchData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setResult(data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  const value = useMemo(
    () => ({
      result,
      setResult,
      url,
      setUrl,
      fetchData,
    }),
    [result, setResult, url, setUrl, fetchData]
  );

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export const useUrl = (): UrlContextType => {
  const value = useContext(UrlContext);
  if (!value) {
    throw new Error(
      "useUrl can only be called from within a RemindersProvider"
    );
  }
  return value;
};
