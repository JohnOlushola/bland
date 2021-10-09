export interface Page {
  name: string;
  label: string | number;
  id: number;
}

interface PageNavigatorProps {
  pages: Page[];
  currentPage: number;
  onChangePage: (page: number) => void;
}

const PageNavigator: React.FC<PageNavigatorProps> = ({
  pages,
  currentPage,
  onChangePage,
}) => {
  return (
    <div className="absolute bottom-20 left-20 flex">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`h-14 w-14 rounded-full  mr-4 ${
            currentPage === page.id ? "bg-gray-100" : "bg-grey-lighter"
          }`}
          onClick={() => onChangePage(page.id)}
        >
          <p className="text-2xl text-grey-light my-auto">{page.label}</p>
        </button>
      ))}
    </div>
  );
};

export default PageNavigator;
