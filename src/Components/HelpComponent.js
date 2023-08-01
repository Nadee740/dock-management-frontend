const HelpComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">Help</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-medium">Click to view the user manual for dock booking and to go through features of DMS</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-xl font-medium">For other enquiries/support:
Please contact <a href="mailto: nadeemblayparambil@gmail.com"></a></h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default HelpComponent;
