function Tech({ icon, name }) {
   return (
      <div className="text-primary-500 dark:text-primary-600/75 border border-primary-400/70 dark:border-primary-300/80 rounded-full px-3.5 py-1 flex items-center gap-2 text-base">
         {icon}
         {name}
      </div>
   );
}

export default Tech;
