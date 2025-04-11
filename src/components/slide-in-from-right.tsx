import { useDelayedHidden } from "@/hooks/use-delay-hidden";
import { AnimatePresence, motion } from "framer-motion";

interface SlideInFromRightProps {
  hidden: boolean;
  children: React.ReactNode;
  className?: string;
}

const SlideInFromRight: React.FC<SlideInFromRightProps> = ({
  hidden,
  children,
  className = "",
}) => {
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 256, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideInFromRight;
