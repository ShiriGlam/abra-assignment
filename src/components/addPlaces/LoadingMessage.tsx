interface LoadingMessageProps {
    isLoading: boolean;
    message: string;
}

const LoadingMessage: React.FC<LoadingMessageProps> = ({ isLoading, message }) => (
    <>{isLoading && <p>Loading...</p>}{!isLoading && message && <p>{message}</p>}</>
);
export default LoadingMessage;