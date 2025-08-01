import { MDXProvider } from '@mdx-js/react';
import { motion } from 'motion/react';

function MDXWrapper({ children }) {
   return (
      <MDXProvider>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
         >
            {children}
         </motion.div>
      </MDXProvider>
   );
}

export default MDXWrapper;
