import React from "react";

interface cardProps {
  icon: React.ElementType;
  title: string;
  content: string;
}
function NavbarCards({ icon: Icon, title, content }: cardProps) {
  return (
    <div>
      <div className="w-full max-w-sm p-5 rounded-2xl shadow-md bg-white">
        <div className="flex flex-col items-start space-y-3">
          <Icon className="w-8 h-8 text-blue-500" />
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarCards;
