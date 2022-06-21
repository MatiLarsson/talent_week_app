import "./styles.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";


export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <nav className="tab-list">
        {tabs.map((item) => (
          <motion.div
            key={item.label}
            className={item === selectedTab ? "tab-item selected-tab" : "tab-item"}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.label}`}
          </motion.div>
        ))}
      </nav>
      <main className="exposition-main-container">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.program : ""}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
