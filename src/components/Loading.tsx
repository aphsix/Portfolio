import { motion } from 'framer-motion'

interface LoadingProps {
  text?: string
}

const Loading = ({ text = 'Loading...' }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <motion.div
          className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 border-t-teal-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-600 dark:text-gray-400 text-sm"
      >
        {text}
      </motion.p>
    </div>
  )
}

export default Loading