"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectConstants from "@/projectContants";
import FadeUp from "@/animations/FadeUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="flex flex-col gap-10 xl:flex-row">
      <div className="flex w-[100%] flex-col gap-10">
        {projectConstants.faqs.map((faq) => (
          <FadeUp
            key={faq._id}
            tag="div"
            className={`border-b rounded-3xl border-[#666] p-5 ${activeId === faq._id ? "bg-digiFaqBlue" : ""}`}
          >
            <div
              className={`flex items-center justify-between cursor-pointer ${activeId === faq._id ? "text-white" : "text-[#011632]"}`}
              onClick={() => toggleActive(faq._id)}
            >
              <p className="text-xl    md:text-xl">{faq.question}</p>
              <div>{activeId === faq._id ? <RemoveIcon /> : <AddIcon />}</div>
            </div>
            {activeId === faq._id && <hr className="my-4" />}
            <AnimatePresence initial={false}>
              {activeId === faq._id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[17px] text-white ">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
