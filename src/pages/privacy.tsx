import classNames from "classnames";
import { useState } from "react";

export function PrivcyPage() {
    const [isActive, setIsActive] = useState(false);
  
    const dynamicClasses = classNames('bg-blue-500', 'text-white', {
      'p-4': isActive,
      'mt-2': !isActive,
    });
    const no = "bg-red-500"
    return (
      <div>
        <div className={`${(isActive)?no:"bg-yellow-200"}`}>
          هذا عنصر مع كلاسات ديناميكية
        </div>
        <button onClick={() => setIsActive(!isActive)}>
          تغيير الحالة
        </button>
      </div>
    );
  }
  
  export default PrivcyPage