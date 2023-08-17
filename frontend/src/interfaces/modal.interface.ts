interface IGenericModalProps {
  type: string | null;
}

interface IModalContextProps {
  setShowModal: React.Dispatch<React.SetStateAction<null | string>>;
  showModal: string | null;
  handleShowModal: (type: string | null) => void;
  handleCloseModal: () => void;
  ref: React.MutableRefObject<null>;
}

export type { IGenericModalProps, IModalContextProps };
