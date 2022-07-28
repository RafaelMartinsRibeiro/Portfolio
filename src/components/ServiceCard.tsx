import { FunctionComponent } from "react";
import { IServices } from "../../type";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
  service: { Icon, title },
}) => {
  return (
    <div className="flex items-center p-5 space-x-4">
      <Icon className="w-12 h-12 text-purple-600 " />
      <div>
        <h4 className="font-bold">{title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
