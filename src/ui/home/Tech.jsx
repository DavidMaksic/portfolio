function Tech({ icon, name }) {
   return (
      <div className="bg-primary-200/50 dark:bg-primary-200/60 text-primary-600/85 dark:text-primary-600/75 border border-primary-300/20 dark:border-primary-300/15 rounded-full px-3.5 py-1 flex items-center gap-2 text-base">
         {icon}
         {name}
      </div>
   );
}

export default Tech;
