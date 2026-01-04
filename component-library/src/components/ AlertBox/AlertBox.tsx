import { type AlertBoxProps } from '../../types';

export const AlertBox = ({
  type,
  message,
  onClose,
  children
}: AlertBoxProps) => {
  const getStyle = () => {
    if (type === 'success') return 'lightgreen';
    if (type === 'error') return 'lightcoral';
    if (type === 'warning') return 'khaki';
    return 'lightblue';
  };

  return (
    <div style={{ backgroundColor: getStyle(), padding: '10px' }}>
      <strong>{message}</strong>
      {onClose && (
        <button onClick={onClose} style={{ marginLeft: '10px' }}>
          X
        </button>
      )}
      {children}
    </div>
  );
};
