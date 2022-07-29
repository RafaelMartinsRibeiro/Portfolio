import { FunctionComponent } from "react";
import { ISoftSkill } from "../../type";

const SoftSkillCard: FunctionComponent<{ softSkill: ISoftSkill }> = ({
  softSkill: { Icon, title },
}) => {
  return (
    <div className="flex items-center p-5 space-x-4 group">
      <Icon className="w-12 h-12 text-purple-600" />
      <div>
        <h4 className="font-bold">{title}</h4>
      </div>
    </div>
  );
};

export default SoftSkillCard;
