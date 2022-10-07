import { useNavigate } from "react-router";

export const useRedirect = (path: string) => {
  const navigate = useNavigate();

  return () => navigate(path);
};
