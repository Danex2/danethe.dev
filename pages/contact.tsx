import Layout from "@/components/sections/Layout";
import { motion } from "framer-motion";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <Layout>
      <motion.div className="mt-[88px] lg:mt-[184px] text-skin-base">
        <div className="mb-10">
          <h2 className="mb-2 text-4xl font-bold">Contact</h2>
          <p className="text-skin-secondary">
            where you can find me on the interwebs
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex items-start space-x-3 text-2xl">
            <AiOutlineTwitter className="text-3xl" />
            <span>@hybridearth</span>
          </div>
          <div className="flex items-start space-x-3 text-2xl">
            <FaLinkedinIn className="text-3xl" />
            <span>dmiller94</span>
          </div>
          <div className="flex items-start space-x-3 text-2xl">
            <HiOutlineMail className="text-3xl" />
            <span>khadane (dot) miller @gmail.com</span>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
