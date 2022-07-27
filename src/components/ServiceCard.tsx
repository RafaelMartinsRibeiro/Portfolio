import { FunctionComponent } from "react";
import { IServices } from "../../type";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
  service: { Icon, title },
}) => {
  return (
    <div>
      <Icon />
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
