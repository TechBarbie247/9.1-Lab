export type AlertType = 'success' | 'error' | 'warning' | 'info';

export type AlertBoxProps = {
    type?: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
};
