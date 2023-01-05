import React, {
  ReactNode,
  useEffect,
  useState,
  type FunctionComponent,
} from "react";
import cx from "classnames";

export type TabsProps = {
  tabs: Array<{
    name: string;
    content: ReactNode;
  }>;
};

const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  const [selectedTab, selectTab] = useState(0);
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   if (!clicked) {
  //     const timer = setTimeout(() => {
  //       selectTab((selectedTab + 1) % tabs.length);
  //     }, 4000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [clicked, selectedTab, selectTab, tabs]);

  return (
    <div className="w-full">
      <div
        className="flex items-center lg:justify-center gap-x-2 lg:gap-x-4 overflow-y-scroll py-6"
        data-aos="fade-up"
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cx(
              "font-bold text-black rounded-xl px-6 py-3 cursor-pointer transition-colors",
              {
                "bg-black text-white": selectedTab === index,
                "hover:bg-blizzer": selectedTab !== index,
              }
            )}
            onClick={() => {
              selectTab(index);
              setClicked(true);
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
