import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { placeholder } from "@babel/types";

export const UserDataField = ({ setEditValue, value }) => {
  return (
    <input
      onChange={(e) => setEditValue(e.target.value)}
      value={value}
      type="text"
    />
  );
};

export const UserEditButton = ({ handleEdit ,value}) => {
  return (
    <button onClick={handleEdit}>
      {value} <FontAwesomeIcon icon={faPencil} />
    </button>
  );
};
