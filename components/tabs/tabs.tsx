import cx from "classnames";
import { ReactNode, useState, type FunctionComponent } from "react";

export type TabsProps = {
  tabs: Array<{
    name: string;
    content: ReactNode;
  }>;
};

const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  const [selectedTab, selectTab] = useState(0);

  return (
    <div className="w-full">
      <div
        className="flex items-center lg:justify-center gap-x-2 lg:gap-x-4 overflow-y-auto py-6"
        data-aos="fade-up"
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cx(
              "font-bold text-black rounded-2xl px-6 py-3 cursor-pointer transition-colors",
              {
                "bg-black text-white": selectedTab === index,
                "hover:bg-blizzer": selectedTab !== index,
              }
            )}
            onClick={() => {
              selectTab(index);
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="lg:mt-24">{tabs[selectedTab].content}</div>
    </div>
  );
};

export default Tabs;
