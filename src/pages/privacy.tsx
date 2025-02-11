import { useContext, useState } from "react";
import TestContext from "../context/auth/authContext.tsx";


export function PrivcyPage() {
    const [isActive, setIsActive] = useState(false);
    const no = "bg-red-500"
    return (
      <div>
        <div className={`${(isActive)?no:"bg-yellow-200"}`}>
          هذا عنصر مع كلاسات ديناميكية
        </div>
        <button >
          تغيير الحالة
        </button>
      </div>
    );
  }
  
  export default PrivcyPage