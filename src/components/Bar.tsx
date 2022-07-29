import { FunctionComponent } from "react";
import { ISkill } from "../../type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="text-white my-2 bg-gray-300 rounded-full">
      <div
        style={{
          width: level,
        }}
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
