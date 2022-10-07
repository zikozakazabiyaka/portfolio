type PageTitleType = {
  children: string;
};

export const PageTitle = ({ children }: PageTitleType) => {
  document.title = children;

  return null;
};
