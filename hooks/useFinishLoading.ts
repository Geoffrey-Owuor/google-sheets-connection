import { SetStateAction, useEffect } from "react";

type useFinishLoadingProps = {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  timeout: number;
};
const useFinishLoading = ({
  loading,
  setLoading,
  timeout,
}: useFinishLoadingProps) => {
  useEffect(() => {
    if (!loading) return;
    const id = setTimeout(() => setLoading(false), timeout);

    return () => clearTimeout(id);
  }, [setLoading, loading, timeout]);
};

export default useFinishLoading;
