import { AiOutlineClose } from "react-icons/ai";

import * as styles from "./styles";

export const ModalForm = ({ children, open, onCancel }: any) => {

  if (!open) return null;
  
  return (
    <styles.Overlay>
      <styles.Modal>
        {children}
        <AiOutlineClose
          className="close-icon"
          style={{ cursor: "pointer" }}
          onClick={onCancel}
        />
      </styles.Modal>
    </styles.Overlay>
  );
};
